import React, { useState, useEffect } from 'react'
import City from './City'
import Store from './Store'
import BackButton from '../../images/where-to-find/where-to-find-back.svg'

const Results = ({
  mobile,
  state,
  cities,
  handleCloseResults,
  innerResultsRef,
}) => {
  const [selectedCity, setSelectedCity] = useState(null)

  useEffect(() => {
    setSelectedCity(null)
  }, [state])

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
    <div className="results">
      <div className="results-content relative">
        <div className="row">
          <div
            ref={innerResultsRef}
            className="col-12  margin-top-30px margin-top-md-none"
          >
            {selectedCity && mobile && (
              <button
                className="text-20px back-button padding-none d-flex align-items-center margin-bottom-15px"
                onClick={backButton}
              >
                <img
                  className="margin-none padding-right-10px"
                  src={BackButton}
                />
                Back
              </button>
            )}
            <section className="padding-none d-flex justify-content-md-center align-items-center text-md-center results-title z-index-1 padding-left-20px padding-right-20px padding-left-md-60px padding-right-md-50px">
              <h2 className="margin-bottom-none text-30px absolute">
                {selectedCity ? selectedCity : state}
              </h2>
              {selectedCity && !mobile && (
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
              {!mobile && (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleCloseResults}
                  onKeyDown={handleCloseResults}
                  className="close-icon d-block"
                />
              )}
            </section>
            <section className="bg-white">
              <ul className="text-center-md result-list margin-bottom-none padding-bottom-20px padding-top-20px">
                {selectedCity ? renderSelectedCity() : renderCities()}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
