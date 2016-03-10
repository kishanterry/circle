import Home from './components/Home'
import HrmDashboard from './components/hrm/Dashboard'

export const configRouter = (router) => {
  router.map({
    '/': {
      component: Home
    },
    '/hrm': {
      component: HrmDashboard
    }
  })
}
