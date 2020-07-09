import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import heroImage from 'images/where-to-find/where-to-find-header.svg'
import USMap from 'images/where-to-find/where-to-find-map.inline.svg'

const clearSelection = state => {
  const previousSelected = document.getElementById(state)
  if (previousSelected) {
    previousSelected.classList.remove('selected-state')
  }
  document.querySelector('html').classList.remove('overflow-hidden')
}

const addSelection = state => {
  document.getElementById(state).classList.add('selected-state')
  document.querySelector('html').classList.add('overflow-hidden')
}

const WhereToFind = ({ data }) => {
  const stores = data?.allMarkdownRemark?.edges.map(
    ({ node: { frontmatter } }) => frontmatter
  )

  const innerModal = useRef()
  const [showModal, setShowModal] = useState(false)
  const [filteredState, setFilteredState] = useState([])
  const [state, setState] = useState('')

  const handleStateSelection = event => {
    const state = event.target.id || event.target.parentNode.id
    if (!state) return

    setState(state)
    addSelection(state)
    setShowModal(true)
    filterState(state)
  }

  const closeModal = () => {
    clearSelection(state)
    setState('')
    setFilteredState([])
    setShowModal(false)
  }

  const handleCloseModalClick = e => {
    if (innerModal.current && !innerModal.current.contains(e.target)) {
      closeModal()
    }
  }

  const handleCloseModalKey = e => {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModalKey, false)
    document.addEventListener('mousedown', handleCloseModalClick, false)

    return () => {
      document.removeEventListener('keydown', handleCloseModalKey, false)
      document.removeEventListener('mousedown', handleCloseModalClick, false)
    }
  }, [showModal])

  const filterState = state => {
    const filteredList = stores
      .filter(store => store.state === state.toLowerCase())
      .map(state => state)

    if (!filteredList) return setFilteredState([])
    setFilteredState(filteredList)
  }

  const renderList = () => {
    if (filteredState.length < 1) {
      return <p>No stores in this state</p>
    }
    return filteredState.map(state => (
      <h2 className="margin-bottom-20px city-link primary-link text-24px font-medium">
        {state.city}
      </h2>
    ))
  }

  return (
    <Layout>
      <SEO title="Where to find" />
      <section className="where-to-find">
        <div className="container padding-top-20px">
          <div className="row">
            <div className="col-12">
              <div className="text-center padding-bottom-lg-55px hero">
                <img alt="Where to find us" src={heroImage} />
              </div>
            </div>
            <div className="col-10 offset-1 col-md-8 offset-md-2">
              <p className="text-24px">
                Looking for Aura Bora in the wild?{' '}
                <span className="d-md-block">Click on your state below.</span>
              </p>
            </div>
          </div>
          <div className="row padding-bottom-50px">
            <div className="col-12">
              <USMap
                className="width-100 height-auto"
                onClick={handleStateSelection}
              />
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="modal">
          <div className="modal-content height-100 relative">
            <div className="container padding-top-20px height-100">
              <div className="row padding-bottom-30px">
                <div
                  ref={innerModal}
                  className="col-12 col-md-10 offset-md-1 padding-bottom-60px"
                >
                  <section className="padding-none d-flex justify-content-center align-items-center text-center modal-title z-index-1">
                    <h2 className="margin-bottom-none text-30px absolute">
                      {state}
                    </h2>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={closeModal}
                      onKeyDown={closeModal}
                      className="close-icon d-block"
                    />
                  </section>
                  <section className="bg-white padding-top-30px padding-bottom-25px">
                    <ul className="d-inline-flex align-items-center width-100 flex-column">
                      {renderList()}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default WhereToFind

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            state
            city
            stores {
              name
              address
            }
          }
        }
      }
    }
  }
`
