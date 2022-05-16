import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'OBSERV',
  description:
    'Observ Ecosystem on the Binance smart Chain',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/'
  } else if (path.startsWith('/remove')) {
    basePath = '/'
  } else if (path.startsWith('/teams')) {
    basePath = '/'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('OBSERV')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('OBSERV')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('OBSERV')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('OBSERV')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('OBSERV')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('OBSERV')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('OBSERV')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('OBSERV')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('OBSERV')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('OBSERV')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('OBSERV')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('OBSERV')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('OBSERV')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('OBSERV')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('OBSERV')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('OBSERV')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('OBSERV')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('OBSERV')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('OBSERV Info & Analytics')}`,
        description: 'View statistics for OBSERV exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('OBSERV Info & Analytics')}`,
        description: 'View statistics for OBSERV exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('OBSERV Info & Analytics')}`,
        description: 'View statistics for OBSERV exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('OBSERV')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('OBSERV')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('OBSERV')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('OBSERV')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('OBSERV')}`,
      }
    default:
      return null
  }
}
