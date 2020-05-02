import React from 'react'
import PropTypes from 'prop-types'
import NoStock from '../images/products/out_of_stock.svg'

const ProductOutOfStock = ({ colorRef, name }) => (
  <div
    className={`bg-${colorRef}-i text-center d-flex flex-column justify-content-between out-of-stock c-black`}
  >
    <h2 className="padding-bottom-none margin-none text-30px padding-bottom-50px font-barlow">
      {name} <span className="d-block">is out of stock</span>
    </h2>
    {/* <img alt="" src={NoStock} className="product-image margin-none" /> */}
    <div className="text-24px">
      <p className="margin-none">
        We´re harvesting more.
        <span className="d-block">Check back again soon.</span>
      </p>
    </div>
  </div>
)

ProductOutOfStock.propTypes = {
  colorRef: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ProductOutOfStock
