import React, { useEffect } from 'react'
import Layout from 'components/layout'
import { ProductGrid } from 'components/ProductGrid'
import Hero from 'components/hero'
import SEO from 'components/seo'
import ValueProps from 'components/value-props'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const IndexPage = () => {
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab)
    document.body.setAttribute('ontouchstart', '')
    return () => {
      window.removeEventListener('keydown', handleFirstTab)
    }
  })

  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
      window.removeEventListener('keydown', handleFirstTab)
    }
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <div className="text-center margin-bottom-60px">
          <p className="margin-none intro-text">
            Aura Bora is a sparkling water{' '}
            <span className="d-lg-block">
              made from herbs, fruits, and flowers for{' '}
            </span>
            earthly tastes and heavenly feelings.
          </p>
          <div className="collection-btn">
            <AnchorLink
              className=" primary-btn bg-white text-22px c-black"
              to="/#shop"
              title="The Collection"
              stripHash
            ></AnchorLink>
          </div>
        </div>
      </Hero>
      <ValueProps />
      <ProductGrid />
    </Layout>
  )
}

export default IndexPage
