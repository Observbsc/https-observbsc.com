import styled from 'styled-components'
import { Text, Flex, Box, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Container = styled(Flex)`
  height: 100%;
  padding: 0px;
  align-items: center;
  background: linear-gradient(0deg, rgba(39, 38, 44, 0.4), rgba(39, 38, 44, 0.4)),
    linear-gradient(180deg, #06051b 0%, #696969 100%);
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0px;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #06051b 0%, #696969 100%);
  }
`

const InnerContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SpeechBubble = styled.div`
  background: rgba(39, 38, 44, 0.4);
  border-radius: 16px;
  padding: 0px;
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & ${Text} {
    flex-shrink: 0;
    margin-right: 0px;
  }
`

const PhishingWarningBanner: React.FC = () => {
  const { t } = useTranslation()
  const { isMobile, isMd } = useMatchBreakpoints()
  const warningText = t("0x5e56394422782690653733DA4829c056B900BD18")
  const warningTextAsParts = warningText.split(/(https:\/\/pancakeswap.finance)/g)
  const warningTextComponent = (
    <>
      <Text as="span" color="warning" small bold textTransform="uppercase">
        {t('Contract Address: ')}
      </Text>
      {warningTextAsParts.map((text, i) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          small
          as="span"
          font-sezi="12px"
          bold={text === '0x5e56394422782690653733DA4829c056B900BD18'}
          color={text === '0x5e56394422782690653733DA4829c056B900BD18' ? '#FFFFFF' : '#BDC2C4'}
        >
          {text}
        </Text>
      ))}
    </>
  )
  return (
    <Container className="warning-banner">
      {isMobile || isMd ? (
        <>
          <Box>{warningTextComponent}</Box>
        </>
      ) : (
        <>
          <InnerContainer>
            <picture>
              <source type="image/webp" srcSet="/images/decorations/phishing-warning-bunny.webp" />
              <source type="image/png" srcSet="/images/decorations/phishing-warning-bunny.png" />
              <img src="/images/decorations/phishing-warning-bunny.png" alt="phishing-warning" width="92px" />
            </picture>
            <SpeechBubble>{warningTextComponent}</SpeechBubble>
          </InnerContainer>
        </>
      )}
    </Container>
  )
}

export default PhishingWarningBanner
