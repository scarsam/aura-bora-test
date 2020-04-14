import React from 'react'
import smileIcon from 'images/smile-icon.svg'

const values = [
  '0 Sugar',
  '0 Calories',
  'Vegan',
  'Non GMO',
  'Paleo',
  'Gluten free',
  'Caffeine free',
  'No artificial flavors',
  '1% for the planet',
]

const ValueProps = () => {
  return (
    <section className="bg-lightYellow">
      <div className="container">
        <div className="row">
          {values.map(valueProp => (
            <div className="col-6 col-md-4 mb-3 align-items-center d-flex">
              <img
                className="value-props-icon mr-3"
                src={smileIcon}
                alt="Happy smiling face"
              />
              <p className="font-barlow mb-0 text-large">{valueProp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProps
