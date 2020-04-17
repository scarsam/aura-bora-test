import React, { useState, useContext } from 'react'
import Image from 'components/image'
import { formatPrice } from '../helpers/numberHelpers'
import PropTypes from 'prop-types'
import { Context } from 'store'

const Product = ({ name, price, description, bgColor, image, id }) => {
  const [showInfoPane, setShowInfoPane] = useState(false)
  const { dispatch } = useContext(Context)

  return (
    <div className="col-12 col-lg-6 padding-bottom-20px">
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
                {name}
              </h2>
              <p className="m-0">12x for {formatPrice(price)}</p>
              <button
                className="primary-btn bg-white margin-top-35px padding-top-10px padding-bottom-10px"
                onClick={() =>
                  dispatch({
                    type: 'add',
                    product: { id, price, name },
                  })
                }
              >
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
                {name &&
                  name
                    .split(' ')
                    .map((word, index) => <div key={index}>{word}</div>)}
              </h2>
              <p>
                <strong>Ingredients</strong>
              </p>
              {description &&
                description.split(',').map((item, index) => (
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
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
}
