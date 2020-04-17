import React from 'react'
import Product from './Product'
import products from '../data/products'

const ProductGrid = () => {
  return (
    <section>
      <div className="container">
        <div className="shop-bg margin-bottom-50px"></div>
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="row">
              {products &&
                products.map((product, index) => (
                  <Product
                    key={index}
                    title={product.title}
                    ingredients={product.ingredients}
                    bgColor={product.color}
                    price={product.price}
                    image={product.image}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
