import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'mailto:hello@observbsc.com',
        isHighlighted: true,
      },
      {
        label: t('Roadmap'),
        href: 'https://docs.observbsc.com/info/roadmap/stage-1',
      },
      {
        label: t('Community'),
        href: 'https://t.me/observbsc',
      },
      {
        label: t('Tokenomics'),
        href: 'https://docs.observbsc.com/info/tokenomics/total-supply',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: '',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'mailto:hello@observbsc.com',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/observbsc',
      },
    ],
  },
]
