import React from 'react'
import Product from './Product'
import { graphql, useStaticQuery } from 'gatsby'
import ShopImage from '../images/shop-bg.svg'

export const ProductGrid = () => {
  const data = useProducts()

  return (
    <section>
      <div className="container padding-top-30px">
        <div className="padding-bottom-10px padding-bottom-lg-30px">
          <img className="margin-none" src={ShopImage} alt="" />
        </div>

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
