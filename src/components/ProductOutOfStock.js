import React from 'react'
import PropTypes from 'prop-types'
import NoStock from '../images/products/out_of_stock.svg'

const ProductOutOfStock = ({ colorRef, name }) => (
  <div
    className={`bg-${colorRef}-i text-center justify-content-center d-flex flex-column out-of-stock c-white text-28px`}
  >
    <h2 className="padding-bottom-none margin-none text-30px padding-bottom-50px line-height-40px">
      {name} <span className="d-block">is out of stock</span>
    </h2>
    <img alt="" src={NoStock} className="product-image margin-none" />
    <p className="margin-none padding-top-35px padding-top-lg-50px text-30px font-barlow">
      We´re working on it.
    </p>
    <p className="text-30px font-barlow margin-bottom-none">
      Check back again soon
    </p>
  </div>
)

ProductOutOfStock.propTypes = {
  colorRef: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ProductOutOfStock
