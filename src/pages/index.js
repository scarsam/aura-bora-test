import React, { useEffect } from 'react'
import Layout from 'components/layout'
import { ProductGrid } from 'components/ProductGrid'
import Hero from 'components/hero'
import SEO from 'components/seo'
import ValueProps from 'components/value-props'
import Social from 'components/Social'
import '@stripe/stripe-js'

const IndexPage = () => {
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab)
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
      <Hero />
      <ValueProps />
      <ProductGrid />
      <Social />
    </Layout>
  )
}

export default IndexPage
