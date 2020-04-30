import React from 'react'
import auraBoraLogo from 'images/hero/aura-bora.svg'

const Hero = ({ children }) => {
  return (
    <>
      <section className="bg-lavender top-section hero-background">
        <div className="animations-container absolute">
          <div className="animations absolute">
            <div className="eye relative">
              <span></span>
            </div>
            <div className="eye-left relative">
              <span></span>
            </div>
            <div className="eye-cactus-left relative">
              <span></span>
            </div>
            <div className="eye-cactus-right relative">
              <span></span>
            </div>
          </div>
        </div>
        <div className="container padding-top-15px">
          <div className="row padding-bottom-50px clear-both">
            <div className="col-12 padding-bottom-50px text-center">
              <img
                className="logo margin-none"
                src={auraBoraLogo}
                alt="Aura Bora Logo"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightYellow home-hero">
        <div className="container padding-top-none padding-bottom-none">
          <div className="row">
            <div className="col-md-10 offset-md-1">{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
