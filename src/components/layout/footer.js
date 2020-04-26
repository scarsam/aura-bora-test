import React from 'react'
import { Link } from 'gatsby'
import Subscribe from '../subscribe'
import bird from 'images/bird-footer.svg'

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <section>
        <div className="container padding-top-40px padding-bottom-20px">
          <div className="row">
            <div className="col-sm-3 d-flex flex-column align-items-start text-20px">
              <Link className="primary-link margin-bottom-25px" to="/">
                Shop
              </Link>
              <Link className="primary-link" to="/resellers">
                Reseller
              </Link>
            </div>
            <div className="col-sm-6 col-md-5 offset-md-1 text-center-sm padding-top-30px padding-top-sm-none text-20px">
              <strong className="padding-bottom-10px d-block">
                Let's be rosebuds
              </strong>
              <p className="margin-bottom-25px">
                We’ll either send you discounts or pictures of baby sloths.
              </p>
              <Subscribe />
            </div>
            <div className="col-sm-3 justify-content-center d-none d-sm-flex">
              <img src={bird} alt="Bird walking" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
