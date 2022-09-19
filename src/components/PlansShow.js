import React from 'react'
import { Link } from 'react-router-dom'
import { PageNotFound } from '../pages/Error404'

const PlansShow = ({ plan }) => {
  return (
    plan === null
      ? <PageNotFound />
      :
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
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">name</th>
                  <th scope="col">code</th>
                  <th scope="col">unit price</th>
                  <th scope="col">max unit limit</th>
                  <th scope="col">usage value</th>
                  <th scope="col">over use</th>
                  {/* <th colSpan='3' /> */}
                </tr>
              </thead>
              <tbody>
                {plan.features.map((feature) => {
                      return (

                        <tr key={feature.id}>
                            <th scope="row"></th>
                            <td>{feature.name}</td>
                            <td>{feature.code}</td>
                            <td>{feature.unit_price}</td>
                            <td>{feature.max_unit_limit}</td>
                            <td>{feature.usage_value}</td>
                            <td>{feature.over_use}</td>

                        </tr>

                      )
                    })}
            </tbody>
            </table>
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
