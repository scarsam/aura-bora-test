import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <header>
    <input className="menu-btn d-none" type="checkbox" id="menu-btn" />
    <section>
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-12">
            <nav>
              <div className="menu-top d-flex align-items-center justify-content-between">
                <label className="menu-icon d-inline-block" htmlFor="menu-btn">
                  <div className="navicon"></div>
                </label>
                <p className="mb-1">Cart</p>
              </div>
              <ul className="menu m-0 p-0 d-inline-flex flex-column">
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
      <div className="wave-wrapper">
        <svg className="wave" viewBox="0 0 1440 320">
          <path d="M0,288L48,288C96,288,192,288,288,261.3C384,235,480,181,576,170.7C672,160,768,192,864,186.7C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </section>
  </header>
)

export default Header
