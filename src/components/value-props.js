import React from 'react'
import PropTypes from 'prop-types'
import smileIcon from 'images/smile-icon.svg'

const valuesOne = ['0 Sugar', '0 Calories', 'Vegan']
const valuesTwo = ['Non GMO', 'Paleo', 'Gluten free', 'Caffeine free']
const valuesThree = ['No artificial flavors', '1% for the planet']

const ValueProp = ({ valueProp }) => (
  <div className="d-flex">
    <img
      className="value-props-icon"
      src={smileIcon}
      alt="Happy smiling face"
    />
    <p className="font-barlow margin-bottom-none text-20px">{valueProp}</p>
  </div>
)

const ValueProps = () => {
  return (
    <section className="bg-lightYellow">
      <div className="container padding-bottom-none padding-bottom-md-30px">
        <div className="row">
          <div className="col-12 align-items-center padding-bottom-15px justify-content-center d-flex value-props-row">
            {valuesOne.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
          <div className="col-12 align-items-center padding-bottom-15px justify-content-center d-flex value-props-row">
            {valuesTwo.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
          <div className="col-12 align-items-center  justify-content-center d-flex value-props-row">
            {valuesThree.map((valueProp, index) => (
              <ValueProp valueProp={valueProp} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

ValueProp.propTypes = {
  valueProp: PropTypes.string.isRequired,
}

export default ValueProps
