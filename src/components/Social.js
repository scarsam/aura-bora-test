import React from 'react'
import SocialImage from '../images/header-mood.svg'
import ArrowImage from '../images/social-arrow.svg'

const Social = () => {
  return (
    <div className="container padding-top-10px" id="social">
      <div className="social">
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
              <a
                href="https://www.instagram.com/drinkaurabora/"
                className="primary-link text-30px"
                target="_blank"
                rel="noreferrer noopener"
              >
                <strong>Instagram</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social
