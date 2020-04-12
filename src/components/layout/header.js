import { Link } from 'gatsby'
import React from 'react'
import Cart from '../cart'

const Header = () => (
  <header>
    <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
    <section>
      <div className="container pt-0 pb-0">
        <div className="row">
          <div className="col-12">
            <nav>
              <div className="menu-top d-flex align-items-center justify-content-between">
                <label className="menu-icon d-inline-block" htmlFor="menu-btn">
                  <div className="navicon"></div>
                </label>
                <Cart />
              </div>
              <ul className="menu m-0 p-0 flex-column">
                <li className="mb-0 mt-4 mb-2">
                  <Link className="primary-link" to="/">
                    Find us
                  </Link>
                </li>
                <li className="mb-0 mt-2 mb-2">
                  <Link className="primary-link" to="/">
                    More info
                  </Link>
                </li>
                <li className="mb-0 mt-2 mb-2">
                  <Link className="primary-link" to="/">
                    Gallery
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 50 1440 155"
        preserveAspectRatio="none"
      >
        <path d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,176C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
    </section>
  </header>
)

export default Header
