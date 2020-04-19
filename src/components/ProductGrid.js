import React from 'react'
import Product from './Product'
import { graphql, useStaticQuery } from 'gatsby'

export const ProductGrid = () => {
  const data = useProducts()

  return (
    <section>
      <div className="container">
        <div className="shop-bg margin-bottom-50px"></div>
        <div className="row">
          {data &&
            data.map(({ node }, index) => (
              <Product
                key={index}
                id={node.id}
                name={node.product.name}
                description={node.product.metadata.description}
                bgColor={node.product.metadata.ref}
                price={node.price}
                image={node.localFiles[0].name}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export const useProducts = () => {
  const { skus } = useStaticQuery(
    graphql`
      query SkusForProduct {
        skus: allStripeSku {
          edges {
            node {
              localFiles {
                name
              }
              product {
                name
                metadata {
                  ref
                  description
                  isInStock
                }
              }
              image
              id
              currency
              price
              attributes {
                name
              }
            }
          }
        }
      }
    `
  )
  return skus.edges
}
