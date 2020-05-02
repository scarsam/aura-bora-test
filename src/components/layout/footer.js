import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Subscribe from '../subscribe'

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <section>
        <div className="container padding-top-40px padding-bottom-40px">
          <div className="row">
            <div className="col-sm-6 col-md-4 d-flex flex-column align-items-start text-24px">
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
                to="/#mood"
                stripHash
              >
                Mood
              </AnchorLink>
              <AnchorLink
                className="primary-link margin-bottom-10px"
                to="/contact"
              >
                Let’s be rosebuds
              </AnchorLink>
            </div>
            <div className="col-md-7 offset-md-1 padding-right-30px padding-top-30px padding-top-md-none d-flex flex-column flex-sm-row">
              <div className="content flex-fill">
                <p className="margin-bottom-none padding-bottom-25px d-block text-22px font-barlow padding-top-5px">
                  <strong>Let's be </strong>rose<strong>buds</strong>
                </p>
                <p className="margin-bottom-25px text-18px">
                  We’ll send you
                  <span className="d-block">discounts or pictures</span>
                  <span className="d-block"></span>
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
