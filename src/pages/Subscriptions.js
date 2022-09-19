import React, { useEffect, useState } from 'react'

import SubscriptionsIndex from '../components/SubscriptionsIndex'
import { getAllSubscriptions } from '../api/susbcription'

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([])
  useEffect(() => {
    try {
      getAllSubscriptions(setSubscriptions)
    } catch (err) {
      alert(err)
    }
  }, [])
  console.log(subscriptions)
  return (
    subscriptions ? <SubscriptionsIndex subscriptions={subscriptions} /> : <>Fetching Data</>
  )
}
export default Subscriptions
