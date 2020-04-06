import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
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
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul>
              <p>Todo:</p>
              <li>Nav</li>
              <li>Hero</li>
              <li>Value props</li>
              <li>Product grid</li>
              <li>Footer</li>
              <li>Stripe account</li>
              <li>Checkout</li>
              <li>
                https://drive.google.com/drive/u/1/folders/1Rt__kFXdVf99lB66Gcv7eWLgLDlOey8Y
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

export default IndexPage
// Todo
