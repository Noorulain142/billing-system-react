import React, { useEffect, useState } from 'react'

import PlansIndex from '../components/PlansIndex'
import { getAllPlans } from '../api/plan'

const Plans = () => {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    try {
      getAllPlans(setPlans)
    } catch (err) {
      alert(err)
    }
  }, [])
  console.log(plans)
  return (
    plans ? <PlansIndex plans={plans} /> : <>Fetching Data</>
  )
}
export default Plans
