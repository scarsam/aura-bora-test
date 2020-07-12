import React, { useState } from 'react'
import City from './City'
import Store from './Store'
import BackButton from '../../images/where-to-find/where-to-find-back.svg'

const Modal = ({ state, cities, handleCloseModal, innerModalRef }) => {
  const [selectedCity, setSelectedCity] = useState(null)

  const renderSelectedCity = () => {
    const city = cities.find(({ city }) => city === selectedCity)
    return city?.stores.map(({ name, address }) => (
      <Store key={name} name={name} address={address} />
    ))
  }

  const backButton = () => {
    setSelectedCity(null)
  }

  const renderCities = () => {
    if (cities.length <= 0) {
      return <h3 className="text-center">No stores in this state</h3>
    }

    return cities.map(({ city }) => (
      <li key={city} onClick={() => setSelectedCity(city)}>
        <City city={city} />
      </li>
    ))
  }

  return (
    <div className="modal">
      <div className="modal-content height-100 relative">
        <div className="container padding-top-20px height-100">
          <div className="row padding-bottom-30px">
            <div
              ref={innerModalRef}
              className="col-12 col-md-10 offset-md-1 margin-bottom-60px"
            >
              <section className="padding-none d-flex justify-content-center align-items-center text-center modal-title z-index-1 padding-left-60px padding-right-50px">
                <h2 className="margin-bottom-none text-30px absolute">
                  {selectedCity ? selectedCity : state}
                </h2>
                {selectedCity && (
                  <button
                    className="text-20px back-button padding-none d-flex align-items-center"
                    onClick={backButton}
                  >
                    <img
                      className="margin-none padding-right-10px"
                      src={BackButton}
                    />
                    Back
                  </button>
                )}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleCloseModal}
                  onKeyDown={handleCloseModal}
                  className="close-icon d-block"
                />
              </section>
              <section className="bg-white padding-top-30px padding-bottom-25px">
                <ul className="text-center">
                  {selectedCity ? renderSelectedCity() : renderCities()}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
