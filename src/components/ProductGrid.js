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
                price={node.price}
                image={node.localFiles[0].name}
                inStock={node.product.metadata.isInStock}
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
