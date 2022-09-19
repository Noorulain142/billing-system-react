import React from 'react'

const SubscriptionsIndex = ({ subscriptions }) => {
  return (
    <div>
      <h1 className='mt-5 mb-3 text-center'>Subscriptions</h1>
      <div className='col-lg-10 mx-auto'>
        <table className='table table-striped'>
          <thead>
            <tr>

              <th>Buyer</th>
              <th>Plans</th>
              <th colSpan='3' />
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((val, key) => {
              return (
                <tr key={key}>
                  <th scope='row'>{key + 1}</th>
                  <td> {val.user.name}</td>
                  <td> {val.plan.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default SubscriptionsIndex
