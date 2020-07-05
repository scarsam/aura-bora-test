import React, { useState } from 'react'
import Product from './Product'
import { graphql, useStaticQuery } from 'gatsby'
import ShopImage from '../images/header-shop.svg'

export const ProductGrid = () => {
  const [showInfoPane, setShowInfoPane] = useState(null)
  const data = useProducts()

  const items =
    data &&
    data.filter(item => item.node.availableForSale).map(item => item.node)

  return (
    <section>
      <div className="container padding-top-30px" id="shop">
        <div className="padding-bottom-50px padding-bottom-lg-45px text-center">
          <img className="margin-none" src={ShopImage} alt="" />
        </div>

        <div className="row">
          {items &&
            items.map((item, index) => (
              <Product
                key={index}
                id={item.variants[0].shopifyId}
                title={item.title}
                description={item.description}
                price={item.variants[0].price}
                image={item.variants[0].image.localFile.name}
                isInStock={item.availableForSale}
                showInfoPane={
                  showInfoPane === item.variants[0].shopifyId ? true : false
                }
                setShowInfoPane={setShowInfoPane}
                name={item.handle}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export const useProducts = () => {
  const { data } = useStaticQuery(
    graphql`
      {
        data: allShopifyProduct(sort: { fields: [title] }) {
          edges {
            node {
              title
              description
              availableForSale
              handle
              variants {
                price
                shopifyId
                selectedOptions {
                  name
                  value
                }
                image {
                  localFile {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return data.edges
}

// export const useProducts = () => {
//   const { skus } = useStaticQuery(
//     graphql`
//       query SkusForProduct {
//         skus: allStripeSku {
//           edges {
//             node {
//               localFiles {
//                 name
//               }
//               product {
//                 name
//                 metadata {
//                   description
//                   isInStock
//                   displayOrder
//                 }
//               }
//               active
//               image
//               id
//               currency
//               price
//               attributes {
//                 name
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   return skus.edges
// }
