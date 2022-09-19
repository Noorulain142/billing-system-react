import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand mx-3'>Billing System </Link>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>Plans</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/subscriptions'>Subscriptions</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
