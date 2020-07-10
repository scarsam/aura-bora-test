import React, { useState, useEffect } from 'react'
import Cities from './Cities'

const Modal = ({ stores, state, handleCloseModal, innerModalRef }) => {
  const [filteredState, setFilteredState] = useState([])

  useEffect(() => {
    filterState(state)
  }, [state])

  const filterState = state => {
    const states = stores
      .filter(store => store.state === state.toLowerCase())
      .map(state => state)

    setFilteredState(states)
  }

  return (
    <div className="modal">
      <div className="modal-content height-100 relative">
        <div className="container padding-top-20px height-100">
          <div className="row padding-bottom-30px">
            <div
              ref={innerModalRef}
              className="col-12 col-md-10 offset-md-1 padding-bottom-60px"
            >
              <section className="padding-none d-flex justify-content-center align-items-center text-center modal-title z-index-1">
                <h2 className="margin-bottom-none text-30px absolute">
                  {state}
                </h2>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleCloseModal}
                  onKeyDown={handleCloseModal}
                  className="close-icon d-block"
                />
              </section>
              <section className="bg-white padding-top-30px padding-bottom-25px">
                <Cities cities={filteredState} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
