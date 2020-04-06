import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Aura Bora</h1>
            <p>Landing page</p>

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
// Import colors
