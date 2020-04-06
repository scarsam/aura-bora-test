import React from 'react'
import { Link } from 'gatsby'
import Subscribe from '../subscribe'

const Footer = () => {
  return (
    <footer>
      <section className="bg-lightYellow">
        <div className="container pt-4 pb-4">
          <div className="row">
            <div className="col-12 d-flex justify-content-between pb-5 pt-2">
              <Link className="primary-link" to="/">
                Find us
              </Link>
              <Link className="primary-link" to="/">
                More info
              </Link>
              <Link className="primary-link" to="/">
                Gallery
              </Link>
              <Link className="primary-link" to="/">
                Team
              </Link>
              <Link className="primary-link" to="/">
                Testimonials
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <strong className="mb-2 d-block">Let's be rosebuds</strong>
              <p>
                Join our newsletter for work tips, featured interviews and deals
                on our latest products.
              </p>
            </div>
            <div className="col-md-5 offset-md-1">
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
