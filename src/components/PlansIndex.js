import React from 'react'
import { Link } from 'react-router-dom'

const PlansIndex = ({ plans }) => {
  return (
    <div>
      <h1 className='mt-5 mb-3 text-center'>Plans</h1>
      <div className='col-lg-10 mx-auto'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>name</th>
              <th>monthly fee</th>
              <th colSpan='3' />
            </tr>
          </thead>
          <tbody>
            {plans.map((val, key) => {
              return (
                <tr key={key}>
                  <th scope='row'>{key + 1}</th>
                  <td> {val.name}</td>
                  <td> {val.monthly_fee}</td>
                  <td> {val.plan_id}</td>
                  <td> {val.price_id}</td>
                  <td>
                    <Link to={`./plan/:${val.id}`} state={val} key={val.id}>
                      <button className='btn btn-outline-dark btn-sm shadow'>
                        Show Plan
                      </button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default PlansIndex
