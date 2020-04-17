import React, { useContext } from 'react'
import { Context } from 'store'
import Layout from 'components/layout'
import { ProductGrid } from 'components/ProductGrid'
import Hero from 'components/hero'
import SEO from 'components/seo'
import ValueProps from 'components/value-props'
import '@stripe/stripe-js'

const IndexPage = () => {
  const { dispatch } = useContext(Context)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ValueProps />
      <ProductGrid />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <p>Todo:</p>
                <li>Nav (Sam)</li>
                <li>Hero</li>
                <li>Value props</li>
                <li>Product grid (Max)</li>
                <li>Footer (Sam)</li>
                <li>Stripe account</li>
                <li>Checkout</li>
                <li>
                  https://drive.google.com/drive/u/1/folders/1Rt__kFXdVf99lB66Gcv7eWLgLDlOey8Y
                </li>
                <li>
                  <button onClick={() => dispatch({ type: 'decrement' })}>
                    Remove to cart
                  </button>
                </li>
                <li>
                  <button onClick={() => dispatch({ type: 'increment' })}>
                    Add to cart
                  </button>
                </li>
              </ul>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
