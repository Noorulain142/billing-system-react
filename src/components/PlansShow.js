import React from 'react'
import { Link } from 'react-router-dom'

const PlansShow = ({ plan }) => {
  return (
    <div className='mt-5  card col-lg-10 mx-auto'>
      <div className='card-body'>
        <p>
          <strong><h1 className=' text-center card-title'>{plan.name}</h1></strong>
        </p>
        <p>
          <strong><h3 className=' text-center card-subtitle mb-2 text-muted'> monthly fee : {plan.monthly_fee} </h3></strong>
        </p>
        <p>
          <h3>Features:</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item ' style={{ backgroundColor: '#577399' }}>
              {plan.features.map((feature) => {
                return (
                  <p key={feature.id}>
                    <ul>
                      <li>name : {feature.name}</li>
                      <li> code : {feature.code}</li>
                      <li>unit price : {feature.unit_price}</li>
                      <li>max unit limit : {feature.max_unit_limit}</li>
                      <li>usage value : {feature.usage_value}</li>
                      <li>over use : {feature.over_use}</li>
                    </ul>
                  </p>
                )
              })}
            </li>
          </ul>
        </p>
        <Link to='/'>
          <button className='btn btn-outline-dark btn-sm shadow'>
            Back
          </button>
        </Link>
      </div>
    </div>

  )
}

export default PlansShow
