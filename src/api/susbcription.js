import { index } from './index'
export const getAllSubscriptions = (setFunc) => {
  index('GET', 'subscriptions', setFunc)
}
