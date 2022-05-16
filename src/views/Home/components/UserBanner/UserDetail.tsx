import { NoProfileAvatarIcon, Flex, Heading, Skeleton, Text, Box } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { useProfile } from 'state/profile/hooks'
import { useTranslation } from 'contexts/Localization'
import truncateHash from 'utils/truncateHash'

const Desktop = styled(Flex)`
  align-items: center;
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`

const Mobile = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const Sticker = styled(Flex)`
  height: 92px;
  width: 92px;
  background-color: ${({ theme }) => theme.colors.invertedContrast};
  border: 3px solid ${({ theme }) => theme.colors.invertedContrast};
  border-radius: ${({ theme }) => theme.radii.circle};
  box-shadow: ${({ theme }) => theme.card.boxShadow};
`

const UserDetail = () => {
  const { profile, isLoading } = useProfile()
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const truncatedAddress = truncateHash(account)

  const getDesktopHeading = () => {
    if (profile) {
      return <Heading scale="xl">{({ userName: profile.username })}</Heading>
    }
    if (isLoading && !profile) {
      return <Skeleton width={200} height={40} my="4px" />
    }
    return <></>
  }

  const getMobileHeading = () => {
    if (profile) {
      return (
        <Heading mb="18px" textAlign="center">
          {({ userName: profile.username })}
        </Heading>
      )
    }
    if (isLoading && !profile) {
      return <Skeleton width={120} height={20} mt="2px" mb="18px" />
    }
    return <></>
  }

  return (
    <>
      <Desktop>
        <Flex flexDirection="column">
          {getDesktopHeading()}
          {isLoading || !account ? (
            <Skeleton width={200} height={16} my="4px" />
          ) : (
            <Text fontSize="32px" textAlign="center"> {t('Connected with %address%', { address: truncatedAddress })}</Text>
          )}
        </Flex>
      </Desktop>
      <Mobile>
        <Flex flexDirection="column">
          {getDesktopHeading()}
          {isLoading || !account ? (
            <Skeleton width={120} height={20} mt="2px" mb="18px" />
          ) : (
            <Text fontSize="12px" textAlign="center"> {t('Connected with %address%', { address: truncatedAddress })}</Text>
          )}
        </Flex>
        </Mobile>
    </>
  )
}

export default UserDetail