import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <header>
    <section>
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-12">
            <nav>
              <input
                className="menu-btn d-none"
                type="checkbox"
                id="menu-btn"
              />
              <div className="menu-top d-flex align-items-center justify-content-between">
                <label className="menu-icon d-inline-block" htmlFor="menu-btn">
                  <div className="navicon"></div>
                </label>
                <p className="mb-1">Cart</p>
              </div>
              <ul className="menu m-0 p-0 bg-white">
                <li className="mb-0">
                  <Link className="d-block p-4" to="/">
                    Nav here
                  </Link>
                </li>
                <li className="mb-0">
                  <Link className="d-block p-4" to="/">
                    Nav here
                  </Link>
                </li>
                <li className="mb-0">
                  <Link className="d-block p-4" to="/">
                    Nav here
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
