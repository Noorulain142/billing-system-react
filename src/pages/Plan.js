import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import PlansShow from '../components/PlansShow'

const Plan = () => {
  const location = useLocation()
  const [plan] = useState(location.state)
  return (
    <PlansShow plan={plan} />
  )
}
export default Plan
