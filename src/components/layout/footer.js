import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Subscribe from '../subscribe'

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <section>
        <div className="container padding-top-40px padding-bottom-60px">
          <div className="row">
            <div className="col-sm-4 col-md-3 d-flex flex-column align-items-start text-24px">
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/#shop"
                stripHash
              >
                Shop
              </AnchorLink>
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/where-to-find"
                stripHash
              >
                Where to find
              </AnchorLink>
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/#social"
                stripHash
              >
                Social
              </AnchorLink>
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/contact"
              >
                Contact
              </AnchorLink>
            </div>
            <div className="col-md-8 offset-md-1 padding-top-30px padding-top-md-none d-flex flex-column flex-sm-row">
              <div className="content flex-fill">
                <strong className="padding-bottom-15px d-block text-24px">
                  Let's be rosebuds
                </strong>
                <p className="margin-bottom-25px text-20px font-barlow">
                  We’ll either send you discounts{' '}
                  <span className="d-block">or pictures of baby sloths.</span>
                </p>
              </div>
              <Subscribe />
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
