import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Reusable image component
// https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { extension: { ne: "svg" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 470) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

export default Image
