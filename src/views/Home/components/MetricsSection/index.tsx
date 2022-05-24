import { Heading, Flex, Text, Skeleton, StarLineIcon, HotIcon, ChartIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  const tvlText = t('Observ is a DEX exchange built by Observ. Observ is on mission to increase awareness about the threats we face with our environment and to encourage individuals to problem solve and participate in the resolution if environmental challenges. By holding $OBSERV token, your mind is automatically drawn to enviromental issues. We hope by becoming a top 100 token, that one (or many) of our envirmentally focused holders solve our biggest enviromental issues. To aid in our mission, once launched, our merchandise store will only take $OBSERV tokens and profits will go to charity.')
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <StarLineIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <HotIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="48px" width="48px" mb="24px" />
      <Heading textAlign="center" scale="xl"  color="#06051b">
        {t('Changing the world starts when you')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px"  color="#06051b">
        {t('Observ')}
      </Heading>
      <Text textAlign="center" color="#06051b">
        {t('Welcome to Observ!')}
      </Text>
      <Flex flexWrap="wrap">
      <Text textAlign="center" color="#06051b">
        {t('Observ is on a mission to increase awareness about the threats we face with our environment and to encourage individuals to problem solve and participate in the resolution if environmental challenges. When you hold $OBSERV, you hold a key to the future of our planet. We want to invite you to join us on our journey to the top 100 & inspire our community to help keep our planet & Observ thriving. The key to the future will not come from one individual alone, but when individuals join together and become part of a community. Once launched, the 1st of many utilities will be our merchandise store will only take $OBSERV tokens and profits will go directly to charity.')}
      </Text>
      </Flex>
      <Text textAlign="center" color="#06051b" bold mb="32px">
        {t('Will you join them?')}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('1 Quadrillion Tokens')}
            bodyText={t('Total and Max')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('950 Trillion Burned', { trades })}
            bodyText={t('50 Trillion Circulation Supply')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('Liquidity Pool Burned', { tvl: tvlString })}
            bodyText={t('We are going to be around awhile')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
