import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Plans from './pages/Plans'
import Plan from './pages/Plan'
import Subscriptions from './pages/Subscriptions'
import Navbar from './components/Navbar'

const Navigation = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Plans />} />
        <Route path='/plan/:plan_id' element={<Plan />} />
        <Route path='/subscriptions' element={<Subscriptions />} />

      </Routes>
    </>

  )
}
export default Navigation
