import React, { useState } from 'react'

const Cities = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState([])

  if (selectedCity.length > 0 && cities.length <= 0) {
    return <h3 className="text-center">No stores in this state</h3>
  }

  if (selectedCity.length >= 1) {
    return (
      <ul className="d-flex flex-wrap stores">
        {selectedCity.map((store, index) => (
          <li
            className={`flex-50 ${
              selectedCity.length - 1 === index
                ? 'margin-bottom-none'
                : 'padding-bottom-15px'
            }`}
          >
            <strong className="text-20px margin-bottom-5px">
              {store.name}
            </strong>
            <address className="font-style-normal text-20px">
              {store.address}
            </address>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="text-center">
      {cities.map(({ city, stores }) => (
        <li>
          <h2
            key={city}
            onClick={() => setSelectedCity(stores)}
            className="margin-bottom-20px city-link primary-link text-24px font-medium d-inline"
          >
            {city}
          </h2>
        </li>
      ))}
    </ul>
  )
}

export default Cities
