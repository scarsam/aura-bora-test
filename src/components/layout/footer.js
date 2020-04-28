import React from 'react'
import { Link } from 'gatsby'
import Subscribe from '../subscribe'

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <section>
        <div className="container padding-top-40px padding-bottom-20px">
          <div className="row">
            <div className="col-sm-3 d-flex flex-column align-items-start text-24px">
              <Link className="primary-link margin-bottom-15px" to="/">
                Shop
              </Link>
              <Link className="primary-link" to="/resellers">
                Reseller
              </Link>
            </div>
            <div className="col-sm-9 col-md-5 col-lg-4 offset-lg-1 padding-top-30px padding-top-sm-none">
              <strong className="padding-bottom-10px d-block text-24px">
                Let's be rosebuds
              </strong>
              <p className="margin-bottom-25px text-20px font-barlow">
                We’ll either send you discounts or pictures of baby sloths.
              </p>
            </div>
            <div className="col-sm-9 offset-sm-3 col-md-4 offset-md-0">
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
