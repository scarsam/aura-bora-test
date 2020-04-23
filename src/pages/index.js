import React from 'react'
import Layout from 'components/layout'
import { ProductGrid } from 'components/ProductGrid'
import Hero from 'components/hero'
import SEO from 'components/seo'
import ValueProps from 'components/value-props'
import Social from 'components/Social'
import '@stripe/stripe-js'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ValueProps />
      <ProductGrid />
      <Social />
    </Layout>
  )
}

export default IndexPage
