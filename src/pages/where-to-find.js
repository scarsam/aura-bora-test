import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Modal from 'components/where-to-find/Modal'
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
  const [state, setState] = useState('')

  const handleStateSelection = event => {
    const state = event.target.id || event.target.parentNode.id
    if (!state) return

    setState(state)
    addSelection(state)
    setShowModal(true)
  }

  const filterState = state =>
    stores
      .filter(store => store.state === state.toLowerCase())
      .map(state => state)

  const closeModal = () => {
    clearSelection(state)
    setState('')
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
        <Modal
          state={state}
          cities={filterState(state)}
          handleCloseModal={closeModal}
          innerModalRef={innerModal}
        />
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
