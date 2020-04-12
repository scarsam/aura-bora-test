import React, { useState } from 'react'
import Image from 'components/image'
import PropTypes from 'prop-types'

const Product = ({ title, price, ingredients, bgColor }) => {
  const [showInfoPane, setShowInfoPane] = useState(false)

  return (
    <div className="product-wrapper">
      {!showInfoPane ? (
        <>
          <div>
            <button
              className="product-info-icon mr-5 mt-5 primary-btn bg-white"
              onClick={() => setShowInfoPane(true)}
            >
              <strong>i</strong>
            </button>
            <Image alt="" filename="product__temp" className="product-image" />
          </div>

          <div className="text-center">
            <h2 className="m-0 pb-3 pt-4">{title}</h2>
            <p className="m-0 font-weight-bold">12 x {price}</p>
            <button className="primary-btn bg-white mt-3 mb-3">
              Add to bag
            </button>
          </div>
        </>
      ) : (
        <div
          className={`product-info c-white d-flex align-items-center bg-${bgColor}`}
        >
          <div>
            <div className="product-info-close mr-5 mt-5">
              <label className="info-close d-inline-block">
                <div
                  className="info-close-icon"
                  onClick={() => setShowInfoPane(false)}
                ></div>
              </label>
            </div>

            <h2 className="pb-3">
              {title &&
                title
                  .split(' ')
                  .map((word, index) => <div key={index}>{word}</div>)}
            </h2>
            <p>
              <strong>Ingredients</strong>
            </p>
            {ingredients &&
              ingredients.map((item, index) => (
                <p className="m-0" key={index}>
                  {item}
                </p>
              ))}
            <p className="pt-3">No calories</p>
            <p>No sugar</p>
            <p>No sodium</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product

Product.propTypes = {
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
}
