import React from 'react'
import error404 from './error404.png'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div id='wrapper text-center'>
      <img src={error404} height='700' width='700' />
      <Link className='nav-link' to='/'> <button className='btn btn-outline-dark btn-sm shadow'>
        back
      </button>
      </Link>

    </div>

  )
}
