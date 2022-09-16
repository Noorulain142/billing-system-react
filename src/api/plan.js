import { index } from './index'
export const getAllPlans = (setFunc) => {
  index('GET', 'plans', setFunc)
}
