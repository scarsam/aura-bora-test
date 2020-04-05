import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <header>
    <section className="bg-water">
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-12">
            <nav>
              <Link to="/">Nav here</Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </header>
)

export default Header
