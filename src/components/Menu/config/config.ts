import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  HomeIcon,
  SwapFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    icon: HomeIcon,
    href: '/',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Home'),
        href: '/',
      },
    ],
  },
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: true,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Limit Swap'),
        href: '/limit-orders',
      },
    ],
  },
  {
    label: 'More',
    href: '/',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Documents'),
        href: 'https://docs.observbsc.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
          label: t('RoadMap'),
          href: 'https://docs.observbsc.com/info/roadmap/stage-1',
          type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
          label: t('Tokenomics'),
          href: 'https://docs.observbsc.com/info/tokenomics/total-supply',
          type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
          label: t('Community'),
          href: 'https://t.me/observbsc',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
     ],
  },
]

export default config
