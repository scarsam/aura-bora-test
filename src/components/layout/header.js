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
          <ul className="menu margin-none padding-none padding-bottom-md-50px padding-left-5px">
            <li className="margin-none margin-top-30px margin-bottom-20px">
              <Link className="primary-link text-40px" to="/">
                Shop
              </Link>
            </li>
            <li className="margin-top-20px margin-bottom-20px padding-bottom-md-50px">
              <Link className="primary-link text-40px" to="/resellers">
                Resellers
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
