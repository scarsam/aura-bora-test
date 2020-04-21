import React from 'react'
import { Link } from 'gatsby'
import Subscribe from '../subscribe'

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <section>
        <div className="container padding-top-50px padding-bottom-20px">
          <div className="row">
            <div className="col-12 d-flex flex-column flex-md-row align-items-start padding-top-20px padding-top-md-none padding-bottom-20px">
              <Link
                className="primary-link text-26px margin-bottom-25px margin-bottom-md-none"
                to="/"
              >
                Shop
              </Link>
              <Link className="primary-link text-26px" to="/resellers">
                Reseller
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <strong className="padding-top-20px text-26px d-block">
                Let's be rosebuds
              </strong>
              <p className="text-24px">
                Join our newsletter for work tips, featured interviews and deals
                on our latest products.
              </p>
            </div>
            <div className="col-md-6 offset-lg-1 col-lg-5">
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
