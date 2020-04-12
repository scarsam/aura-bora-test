import React, { useContext } from 'react'
import { Context } from 'store'
import Layout from 'components/layout'
import Image from 'components/image'
import SEO from 'components/seo'
import ValueProps from 'components/value-props'

const IndexPage = () => {
  const { dispatch } = useContext(Context)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="bg-lavender">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Aura Bora</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightYellow">
        <div className="container">
          <div className="row">
            <ValueProps />
          </div>
        </div>
      </section>
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

              <div>
                <Image alt="Gatsby in Space" filename="gatsby-astronaut.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
