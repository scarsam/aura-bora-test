import React from 'react'
import auraBoraLogo from 'images/hero/aura-bora.svg'

const Hero = () => {
  return (
    <>
      <section className="bg-lavender top-section hero-background">
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
            <div className="col-md-10 offset-md-1">
              <p className="text-30px text-center">
                Our herbal sparkling waters are made from real herbs, fruits,
                and flowers for earthly tastes and heavenly feelings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
