import React, { useEffect } from 'react'
import Layout from 'components/layout'
import { ProductGrid } from 'components/ProductGrid'
import Hero from 'components/hero'
import SEO from 'components/seo'
import ValueProps from 'components/value-props'
import Social from 'components/Social'
import '@stripe/stripe-js'
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
          <h2 className="font-barlow text-33px margin-none padding-bottom-10px c-black">
            From the land to your hand.
          </h2>
          <p className="text-22px margin-none">
            Aura Bora is a delightful sparkling water{' '}
            <span className="d-md-block">
              made from herbs, fruits, and flowers.
            </span>
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
      <Social />
    </Layout>
  )
}

export default IndexPage
