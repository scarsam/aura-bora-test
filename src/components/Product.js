import React, { useState } from 'react'
import Image from 'components/image'
import PropTypes from 'prop-types'

const Product = ({ title, price, ingredients, bgColor, image }) => {
  const [showInfoPane, setShowInfoPane] = useState(false)

  return (
    <div className="col-12 col-lg-6 padding-left-10px padding-right-10px padding-top-10px padding-bottom-10px">
      <div className="product-wrapper relative font-space-mono">
        {!showInfoPane ? (
          <>
            <div>
              <button
                className="product-info-icon absolute z-index-2 margin-top-40px primary-btn bg-white"
                onClick={() => setShowInfoPane(true)}
              >
                <strong>
                  <h2 className="m-0">i</h2>
                </strong>
              </button>
              <Image alt="" filename={image} className="product-image" />
            </div>

            <div className="text-center bg-white product-text">
              <h2 className="m-0 padding-bottom-35px padding-top-50px">
                {title}
              </h2>
              <p className="m-0">12x for ${price}</p>
              <button className="primary-btn bg-white margin-top-35px padding-top-10px padding-bottom-10px">
                Add to bag
              </button>
            </div>
          </>
        ) : (
          <div
            className={`product-info font-barlow c-white d-flex align-items-center bg-${bgColor}`}
          >
            <div>
              <div className="product-info-close absolute margin-top-45px">
                <label className="info-close relative d-inline-block">
                  <div
                    className="info-close-icon relative"
                    onClick={() => setShowInfoPane(false)}
                  ></div>
                </label>
              </div>

              <h2 className="pb-3 font-barlow">
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
              <p className="pt-5">No calories</p>
              <p>No sugar</p>
              <p>No sodium</p>
            </div>
          </div>
        )}
      </div>
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
