import React from 'react'
import { Link } from 'gatsby'
import Subscribe from '../subscribe'

const Footer = () => {
  return (
    <footer>
      <section className="bg-yellow">
        <div className="container padding-top-50px padding-bottom-20px">
          <div className="row">
            <div className="col-12 d-flex justify-content-between padding-bottom-30px">
              <Link className="primary-link text-large" to="/">
                Find us
              </Link>
              <Link className="primary-link text-large" to="/">
                More info
              </Link>
              <Link className="primary-link text-large" to="/">
                Gallery
              </Link>
              <Link className="primary-link text-large" to="/">
                Team
              </Link>
              <Link className="primary-link text-large" to="/">
                Testimonials
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 text-large">
              <strong className="padding-top-20px d-block">
                Let's be rosebuds
              </strong>
              <p className="footer-paragrah">
                Join our newsletter for work tips, featured interviews and deals
                on our latest products.
              </p>
            </div>
            <div className="col-md-6 offset-md-1 col-lg-5">
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
