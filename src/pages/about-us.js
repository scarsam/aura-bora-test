import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import heroImage from 'images/about/about-header.svg'
import varietiesImage from 'images/about/varieties.svg'
import herbsImage from 'images/about/herbs.svg'
import tastesImage from 'images/about/tastes.svg'
import happyImage from 'images/about/carousel/carousel-header.svg'
import lizardImage from 'images/about/carousel/grazzlizard.svg'
import Carousel from '../components/Carousel'

const About = ({ data }) => {
  const testamonials = data?.allMarkdownRemark?.edges.map(
    ({ node: { frontmatter } }) => frontmatter
  )

  return (
    <Layout>
      <SEO title="About us" />
      <section className="about-us">
        <div className="container padding-top-20px">
          <div className="row">
            <div className="col-12">
              <div className="text-center hero">
                <img className="margin-none" alt="About us" src={heroImage} />
              </div>
            </div>
            <div className="col-10 col-md-8 offset-md-2 about-intro-text c-black">
              <p className="text-30px font-barlow margin-none">
                <strong>
                  Every bit of Aura Bora
                  <span className="d-block">was inspired by the Earth.</span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="selling-points">
        <div className="selling-points container padding-top-none">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-2">
              <img
                className="margin-bottom-5px"
                src={varietiesImage}
                alt="Two pink bushes"
              />
              <p className="text-30px c-black font-barlow">
                <strong>One-of-a-kind varieties</strong>
              </p>
              <p>
                Instead of artificial, uninspired fruit flavors, Aura Bora uses
                plant-based ingredients to herb up (like spice up HAH) your
                sparkling water experience.
              </p>
            </div>
            <div className="col-12 col-md-6 offset-md-2">
              <img
                className="margin-bottom-5px"
                src={herbsImage}
                alt="Two green leefs"
              />
              <p className="text-30px c-black font-barlow">
                <strong>Real herbs</strong>
              </p>
              <p>
                It turns out, when you combine real herbal extracts and
                sparkles, you get vivid flavors, floral aromas, and good
                feelings.
              </p>
            </div>
            <div className="col-12 col-md-6 offset-md-2">
              <img
                className="margin-bottom-5px"
                src={tastesImage}
                alt="Rainbow above clouds"
              />
              <p className="text-30px c-black font-barlow">
                <strong>Heavenly tastes</strong>
              </p>
              <p className="margin-bottom-none">
                Aura Bora’s flavor profile is unlike any other{' '}
                <span className="no-wrap">— it’s bold, </span>
                refreshing, and dare we say…{' '}
                <span className="no-wrap">full-bodied</span> with a soft floral
                finish?
              </p>
              <button className="primary-btn text-22px margin-top-60px">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="happy-thoughts bg-variety_pack-i">
        <div className="container padding-bottom-none">
          <div className="row">
            <div className="col-12">
              <div className="text-center hero">
                <img
                  className="margin-none padding-right-15px"
                  alt="About us"
                  src={happyImage}
                />
                <img
                  className="margin-bottom-15px"
                  alt="About us"
                  src={lizardImage}
                />
              </div>
            </div>
          </div>
        </div>
        <Carousel testamonials={testamonials} />
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 12
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
    ) {
      edges {
        node {
          frontmatter {
            text
            author
          }
        }
      }
    }
  }
`
