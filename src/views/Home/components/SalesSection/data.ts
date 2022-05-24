import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Observ Everything. 100% Free, always.'),
  bodyText: t('Just connect your wallet to start. Rest assured knowing your asset safety is a top priority to us.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.observbsc.com/info/roadmap/stage-1',
    text: t('Roadmap'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CAKE', alt: t('CAKE token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Observ MASSIVE rewards with passive income.'),
  bodyText: t(' Every buy & sell transaction of Observ tokens is taxed 10%. 5% is split between holders to generate generate passive income. The other 5% automatically generates new liquidity pool tokens and immediately burns to ensure an ever growing price floor. As long as you are holding your bag is constantly growing as well as our liquidity.'),
  reverse: true,
  primaryButton: {
    to: '/swap?outputCurrency=0x5e56394422782690653733DA4829c056B900BD18',
    text: t('Start Earning'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.observbsc.com/info/tokenomics/total-supply',
    text: t('Tokenomics'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('OBSERV a better tomorrow by holding today.'),
  bodyText: t(
    'Our heart is the driving force of everything we do, and at its core lies the Observ ecosystem. When you become a part of the Observ community, you become part of our heart. ',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x5e56394422782690653733DA4829c056B900BD18',
    text: t('Buy Observ'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.observbsc.com/info/intro/whitepaper',
    text: t('Whitepaper'),
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: t('Small 3d pancake') },
      { src: 'top-right', alt: t('Small 3d pancake') },
      { src: 'coin', alt: t('CAKE token') },
      { src: 'top-left', alt: t('Small 3d pancake') },
    ],
  },
})
