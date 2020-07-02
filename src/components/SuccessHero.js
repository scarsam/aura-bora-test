import React from 'react'

const SuccessHero = ({ children }) => {
  return (
    <>
      <section className="top-section">
        <div className="container padding-top-15px padding-bottom-none">
          <div className="row clear-both">
            <div className="col-12 text-center">{children}</div>
          </div>
        </div>
      </section>
      <section className="success-hero-background"></section>
    </>
  )
}

export default SuccessHero
