import React from 'react'
import PropTypes from 'prop-types'
import NoStock from '../images/products/out_of_stock.svg'

const ProductOutOfStock = ({ colorRef, name }) => (
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
)

ProductOutOfStock.propTypes = {
  colorRef: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ProductOutOfStock
