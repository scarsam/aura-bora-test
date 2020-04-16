import { Link } from 'gatsby'
import React from 'react'
import Cart from '../cart'

const Header = () => (
  <>
    <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
    <header>
      <div className="container padding-top-none padding-bottom-none">
        <nav className="padding-top-50px">
          <label className="navicon d-block" htmlFor="menu-btn" />
          <ul className="menu margin-none padding-none">
            <li className="margin-none margin-top-30px margin-bottom-20px">
              <Link className="primary-link text-20px" to="/">
                Find us
              </Link>
            </li>
            <li className="margin-none margin-top-20px margin-bottom-20px">
              <Link className="primary-link text-20px" to="/">
                More info
              </Link>
            </li>
            <li className="margin-top-20px margin-bottom-20px">
              <Link className="primary-link text-20px" to="/">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
        <Cart />
      </div>
    </header>
  </>
)

export default Header
