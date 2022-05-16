import { ChainId } from '@pancakeswap/sdk'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { farmsConfig, SLOW_INTERVAL } from 'config/constants'
import { CHAIN_ID } from 'config/constants/networks'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import useSWRImmutable from 'swr/immutable'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, fetchFarmsAuctionDataAsync } from '.'
import { DeserializedFarm, DeserializedFarmsState, DeserializedFarmUserData, State } from '../types'
import {
  farmSelector,
  farmFromLpSymbolSelector,
  priceCakeFromPidSelector,
  makeBusdPriceFromPidSelector,
  makeUserFarmFromPidSelector,
  makeLpTokenPriceFromLpSymbolSelector,
  makeFarmFromPidSelector,
} from './selectors'
import { useInitialBlock } from '../block/hooks'

export const usePollFarmsWithUserData = () => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const initialBlock = useInitialBlock()

  const { data: auctionData } = useSWRImmutable(initialBlock ? ['farmsAuctionData'] : null, async () => {
    return dispatch(fetchFarmsAuctionDataAsync(initialBlock))
  })

  useSWRImmutable(
    auctionData ? ['farmsWithUserData', account] : null,
    () => {
      const pids = farmsConfig.map((farmToFetch) => farmToFetch.pid)

      dispatch(fetchFarmsPublicDataAsync(pids))

      if (account) {
        dispatch(fetchFarmUserDataAsync({ account, pids }))
      }
    },
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )
}

/**
 * Fetches the "core" farm data used globally
 * 2 = CAKE-BNB LP
 * 3 = BUSD-BNB LP
 */
const coreFarmPIDs = CHAIN_ID === String(ChainId.MAINNET) ? [2, 3] : [1, 2]
export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()

  useFastRefreshEffect(() => {
    dispatch(fetchFarmsPublicDataAsync(coreFarmPIDs))
  }, [dispatch])
}

export const useFarms = (): DeserializedFarmsState => {
  return useSelector(farmSelector)
}

export const useFarmsPoolLength = (): number => {
  return useSelector((state: State) => state.farms.poolLength)
}

export const useFarmFromPid = (pid: number): DeserializedFarm => {
  const farmFromPid = useMemo(() => makeFarmFromPidSelector(pid), [pid])
  return useSelector(farmFromPid)
}

export const useFarmFromLpSymbol = (lpSymbol: string): DeserializedFarm => {
  const farmFromLpSymbol = useMemo(() => farmFromLpSymbolSelector(lpSymbol), [lpSymbol])
  return useSelector(farmFromLpSymbol)
}

export const useFarmUser = (pid): DeserializedFarmUserData => {
  const farmFromPidUser = useMemo(() => makeUserFarmFromPidSelector(pid), [pid])
  return useSelector(farmFromPidUser)
}

// Return the base token price for a farm, from a given pid
export const useBusdPriceFromPid = (pid: number): BigNumber => {
  const busdPriceFromPid = useMemo(() => makeBusdPriceFromPidSelector(pid), [pid])
  return useSelector(busdPriceFromPid)
}

export const useLpTokenPrice = (symbol: string) => {
  const lpTokenPriceFromLpSymbol = useMemo(() => makeLpTokenPriceFromLpSymbolSelector(symbol), [symbol])
  return useSelector(lpTokenPriceFromLpSymbol)
}

/**
 * @@deprecated use the BUSD hook in /hooks
 */
export const usePriceCakeBusd = (): BigNumber => {
  return useSelector(priceCakeFromPidSelector)
}