import React, { useState, useContext } from 'react'
import Image from 'components/image'
import { formatPrice } from '../helpers/numberHelpers'
import PropTypes from 'prop-types'
import { Context } from 'store'
import NoStock from '../images/products/out_of_stock.svg'

const Product = ({ name, price, description, image, id, inStock }) => {
  const [showInfoPane, setShowInfoPane] = useState(false)
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
                  className="product-info-icon absolute z-index-2 margin-top-25px margin-top-lg-40px primary-btn bg-white"
                  onClick={() => setShowInfoPane(true)}
                >
                  <strong>
                    <h2 className="m-0">i</h2>
                  </strong>
                </button>
              )}
              <div className={`bg-${colorRef}`}>
                <Image alt="" filename={image} className="product-image" />
              </div>
            </div>

            <div className="text-center bg-white product-text">
              <h2 className="m-0 padding-top-25px padding-bottom-10px padding-top-lg-35px padding-bottom-lg-25px text-28px">
                {name}
              </h2>
              <p className="m-0 padding-bottom-20px padding-bottom-lg-25px text-22px font-barlow">
                12x for {formatPrice(price)}
              </p>
              <button
                className="primary-btn bg-white padding-top-15px padding-bottom-15px padding-top-lg-20px padding-bottom-lg-20px padding-left-lg-30px padding-right-lg-30px text-22px add-product-btn"
                onClick={() =>
                  dispatch({
                    type: 'add',
                    product: { id, price, name },
                  })
                }
              >
                <span className="d-lg-none">Add to bag</span>
                <span className="d-none d-lg-block"> Add to bouquet</span>
              </button>
            </div>
          </>
        ) : !isInStock ? (
          <div className="bg-white text-center out-of-stock">
            <h2 className="text-40px">Out of Stock</h2>
            <img alt="" src={NoStock} className="product-image margin-none" />
            <p className="margin-none padding-top-60px text-28px font-barlow">
              We´re working on it.
            </p>
            <p className="text-28px font-barlow">Check back again soon</p>
          </div>
        ) : (
          <div
            className={`product-info font-barlow c-white d-flex align-items-center bg-${colorRef}-i`}
          >
            <div>
              <div
                className="info-close-icon absolute margin-top-35px margin-top-lg-55px"
                onClick={() => setShowInfoPane(false)}
              />

              <h2 className="pb-3 font-barlow text-40px">
                {name &&
                  name
                    .split(' ')
                    .map((word, index) => <div key={index}>{word}</div>)}
              </h2>
              <p className="text-32px margin-none">
                <strong>Ingredients</strong>
              </p>
              {description &&
                description.split(',').map((item, index) => (
                  <p className="margin-none text-32px" key={index}>
                    {item}
                  </p>
                ))}
              <div className="padding-top-30px text-32px">
                <p className="margin-none">No calories</p>
                <p className="margin-none">No sugar</p>
                <p className="margin-none">No sodium</p>
              </div>
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
}
