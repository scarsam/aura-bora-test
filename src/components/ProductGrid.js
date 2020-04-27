import React, { useState } from 'react'
import Product from './Product'
import { graphql, useStaticQuery } from 'gatsby'
import ShopImage from '../images/shop-bg.svg'

export const ProductGrid = () => {
  const [showInfoPane, setShowInfoPane] = useState(null)
  const data = useProducts()

  const items =
    data &&
    data
      .map(item => item.node)
      .sort((prev, cur) =>
        prev.product.metadata.displayOrder > cur.product.metadata.displayOrder
          ? 1
          : -1
      )

  return (
    <section>
      <div className="container padding-top-30px">
        <div className="padding-bottom-50px padding-bottom-lg-45px text-center">
          <img className="margin-none" src={ShopImage} alt="" />
        </div>

        <div className="row">
          {items &&
            items.map((item, index) => (
              <Product
                key={index}
                id={item.id}
                name={item.product.name}
                description={item.product.metadata.description}
                price={item.price}
                image={item.localFiles[0].name}
                inStock={item.product.metadata.isInStock}
                showInfoPane={showInfoPane === item.id ? true : false}
                setShowInfoPane={setShowInfoPane}
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
                  displayOrder
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
