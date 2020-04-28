import React from 'react'
import SocialImage from '../images/social-header.svg'
import ArrowImage from '../images/social-arrow.svg'
import { Link } from 'gatsby'

const Social = () => {
  return (
    <div className="container padding-top-10px">
      <div className="social" id="social">
        <div className="social-header ">
          <img className="margin-none" src={SocialImage} alt="" />
        </div>
        <div className="relative social-links">
          <div className="absolute ">
            <div>
              <img
                className="arrow margin-bottom-none"
                src={ArrowImage}
                alt=""
              />
            </div>

            <div className="social-link padding-top-lg-30px">
              <Link className="primary-link text-30px" to="/">
                <strong>Instagram</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social
