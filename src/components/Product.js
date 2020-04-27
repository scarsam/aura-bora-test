import React, { useState, useContext } from 'react'
import Image from 'components/image'
import { formatPrice } from '../helpers/numberHelpers'
import PropTypes from 'prop-types'
import { Context } from 'store'
import NoStock from '../images/products/out_of_stock.svg'

const Product = ({
  name,
  price,
  description,
  image,
  id,
  inStock,
  showInfoPane,
  setShowInfoPane,
}) => {
  const { dispatch } = useContext(Context)

  const colorRef = name.replace(' ', '_').toLowerCase()

  const isInStock = inStock && inStock === 'true'

  return (
    <div className="col-12 col-md-6 padding-bottom-20px">
      <div className="product-wrapper relative font-space-mono">
        {!showInfoPane && isInStock ? (
          <>
            <div>
              {description && (
                <button
                  className="product-info-icon absolute z-index-2 primary-btn bg-white d-flex justify-content-center padding-none"
                  onClick={() => setShowInfoPane(id)}
                >
                  <strong>
                    <h2 className="m-0 text-28px">i</h2>
                  </strong>
                </button>
              )}
              <div className={`bg-${colorRef}`}>
                <Image alt="" filename={image} className="product-image" />
              </div>
            </div>

            <div className="text-center bg-white product-text c-black">
              <h2 className="m-0 padding-top-25px padding-bottom-20px padding-top-lg-35px padding-bottom-lg-20px text-28px line-height-1">
                {name}
              </h2>
              <p className="m-0 padding-bottom-20px padding-bottom-lg-30px text-24px font-barlow line-height-1">
                12x for {formatPrice(price)}
              </p>
              <button
                className="primary-btn bg-white padding-top-15px padding-bottom-15px padding-left-lg-30px padding-right-lg-30px margin-bottom-40px text-22px add-product-btn"
                onClick={() =>
                  dispatch({
                    type: 'add',
                    product: { id, price, name },
                  })
                }
              >
                <span> Add to bouquet</span>
              </button>
            </div>
          </>
        ) : !isInStock ? (
          <div
            className={`bg-${colorRef}-i text-center out-of-stock padding-top-60px c-white text-28px`}
          >
            <h2 className="padding-top-20px padding-bottom-none margin-none text-30px">
              {name}
            </h2>
            <h2 className="margin-none padding-none padding-bottom-50px line-height-40px text-30px">
              is out of stock
            </h2>
            <img alt="" src={NoStock} className="product-image margin-none" />
            <p className="margin-none padding-top-35px padding-top-lg-50px text-30px font-barlow">
              We´re working on it.
            </p>
            <p className="text-30px font-barlow">Check back again soon</p>
          </div>
        ) : (
          <div className={`product-info font-barlow c-white bg-${colorRef}-i`}>
            <div
              className="info-close-icon absolute"
              onClick={() => setShowInfoPane(false)}
            />

            <h2 className="margin-bottom-35px margin-bottom-lg-50px text-36px line-height-36px">
              {name &&
                name
                  .split(' ')
                  .map((word, index) => <div key={index}>{word}</div>)}
            </h2>
            <div className="text-24px line-height-32px">
              <p className="margin-none">
                <strong>Ingredients</strong>
              </p>
              {description &&
                description.split(',').map((item, index) => (
                  <p className="margin-none" key={index}>
                    {item}
                  </p>
                ))}
            </div>
            <div className="padding-top-30px text-24px line-height-32px">
              <p className="margin-none">0 calories</p>
              <p className="margin-none">0 sugar</p>
              <p className="margin-none">0 sodium</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product

Product.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string,
  showInfoPane: PropTypes.func.isRequired,
  setShowInfoPane: PropTypes.func.isRequired,
}
