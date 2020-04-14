import { Link } from 'gatsby'
import React from 'react'
import Cart from '../cart'

const Header = () => (
  <header>
    <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
    <section className="bg-test">
      <div className="container padding-top-none padding-bottom-none">
        <div className="row">
          <div className="col-12">
            <nav>
              <div className="menu-top d-flex align-items-center justify-content-between">
                <label className="menu-icon d-inline-block" htmlFor="menu-btn">
                  <div className="navicon"></div>
                </label>
                <Cart />
              </div>
              <ul className="menu margin-none padding-none flex-column">
                <li className="margin-none margin-top-30px margin-bottom-20px">
                  <Link className="primary-link" to="/">
                    Find us
                  </Link>
                </li>
                <li className="margin-none margin-top-20px margin-bottom-20px">
                  <Link className="primary-link" to="/">
                    More info
                  </Link>
                </li>
                <li className="margin-top-20px margin-bottom-20px">
                  <Link className="primary-link" to="/">
                    Gallery
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </header>
)

export default Header
