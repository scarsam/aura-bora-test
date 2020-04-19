import React from 'react'
import Layout from 'components/layout'
import { ProductGrid } from 'components/ProductGrid'
import Hero from 'components/hero'
import SEO from 'components/seo'
import ValueProps from 'components/value-props'
import '@stripe/stripe-js'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ValueProps />
      <ProductGrid />
    </Layout>
  )
}

export default IndexPage
