import React from 'react'
import PropTypes from 'prop-types'

const ProductInfo = ({
  colorRef,
  description,
  name,
  showInfoPane,
  setShowInfoPane,
}) => (
  <div
    className={`${
      showInfoPane ? 'product-info-show' : 'product-info-hide'
    } product-info font-barlow c-white bg-${colorRef}-i absolute z-index-3`}
  >
    <div
      className="info-close-icon absolute"
      role="button"
      tabIndex={0}
      onClick={() => setShowInfoPane(false)}
      onKeyDown={() => setShowInfoPane(false)}
    />

    <h2 className="margin-bottom-30px margin-bottom-lg-50px text-30px line-height-32px">
      {name &&
        name.split(' ').map((word, index) => <div key={index}>{word}</div>)}
    </h2>
    <div className="text-22px line-height-32px">
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
    <div className="padding-top-30px text-22px line-height-32px">
      <p className="margin-none">0 calories</p>
      <p className="margin-none">0 sugar</p>
      <p className="margin-none">0 sodium</p>
    </div>
  </div>
)

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  showInfoPane: PropTypes.bool.isRequired,
  setShowInfoPane: PropTypes.func.isRequired,
}

export default ProductInfo
