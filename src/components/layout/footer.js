import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Subscribe from '../subscribe'

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <section>
        <div className="container padding-top-40px padding-bottom-40px">
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
            <div className="col-md-8 offset-md-1 padding-right-30px padding-top-30px padding-top-md-none d-flex flex-column flex-sm-row">
              <div className="content flex-fill">
                <p className="margin-bottom-none padding-bottom-25px d-block text-22px font-barlow padding-top-5px">
                  <strong>Let's be </strong>rose<strong>buds</strong>
                </p>
                <p className="margin-bottom-25px text-18px">
                  We’ll either send you discounts or pictures of baby sloths.
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
