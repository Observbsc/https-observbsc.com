import { useMemo } from 'react'
import LotteryBanner from '../LotteryBanner'
import useIsRenderIfoBanner from './useIsRenderIFOBanner'
import useIsRenderLotteryBanner from './useIsRenderLotteryBanner'

/**
 * make your custom hook to control should render specific banner or not
 * add new campaign banner easily
 *
 * @example
 * ```ts
 *  {
 *    shouldRender: isRenderIFOBanner,
 *    banner: <IFOBanner />,
 *  },
 * ```
 */
export const useMultipleBannerConfig = () => {
  const isRenderIFOBanner = useIsRenderIfoBanner()
  const isRenderLotteryBanner = useIsRenderLotteryBanner()
  return useMemo(
    () =>
      [
        {
          shouldRender: isRenderLotteryBanner,
          banner: <LotteryBanner />,
        },
      ]
        .filter((d) => d.shouldRender)
        .map((d) => d.banner),
    [isRenderIFOBanner, isRenderLotteryBanner],
  )
}
