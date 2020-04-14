import React from 'react'
import auraBoraLogo from 'images/hero/aura-bora.svg'

const Hero = () => {
  return (
    <>
      <section className="bg-lavender top-section hero-background">
        <div className="container pt-0">
          <div className="row pb-5">
            <div className="col-12 pb-5 text-center">
              <img
                className="logo m-0"
                src={auraBoraLogo}
                alt="Aura Bora Logo"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightYellow">
        <div className="container pt-0 pb-0">
          <div className="row">
            <div className="col-10 offset-1">
              <p className="text-xlarge text-center">
                Our herbal sparkling waters are made from real herbs, fruits and
                flowers for earthly tastes and heavenly feelings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
