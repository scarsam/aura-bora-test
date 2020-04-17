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
          {values.map((valueProp, index) => (
            <div key={index} className="col-4 mb-3 align-items-center d-flex">
              <img
                className="value-props-icon"
                src={smileIcon}
                alt="Happy smiling face"
              />
              <p className="font-barlow mb-0 text-20px">{valueProp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProps
