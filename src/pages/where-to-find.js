import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Results from 'components/where-to-find/Results'
import Search from 'components/where-to-find/Search'
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

  const innerResults = useRef()
  const [showResults, setShowResults] = useState(false)
  const [state, setState] = useState('')

  const handleStateSelection = event => {
    const state = event.target.id || event.target.parentNode.id
    if (!state) return

    setState(state)
    addSelection(state)
    setShowResults(true)
  }

  const filterState = state =>
    stores
      .filter(store => store.state === state.toLowerCase())
      .map(state => state)

  const closeResults = () => {
    clearSelection(state)
    setState('')
    setShowResults(false)
  }

  const handleCloseResultsClick = e => {
    if (innerResults.current && !innerResults.current.contains(e.target)) {
      closeResults()
    }
  }

  const handleCloseResultsKey = e => {
    if (e.keyCode === 27) {
      closeResults()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseResultsKey, false)
    document.addEventListener('mousedown', handleCloseResultsClick, false)

    return () => {
      document.removeEventListener('keydown', handleCloseResultsKey, false)
      document.removeEventListener('mousedown', handleCloseResultsClick, false)
    }
  }, [showResults, handleCloseResultsKey, handleCloseResultsClick])

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
          <div className="row d-md-none mobile-search">
            <div className="col-12">
              <Search handleState={setState} />
              {state && (
                <Results mobile state={state} cities={filterState(state)} />
              )}
            </div>
          </div>
          <div className="row padding-bottom-50px d-none d-md-flex">
            <div className="col-12">
              <USMap
                className="width-100 height-auto"
                onClick={handleStateSelection}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="d-none d-md-block">
        {showResults && (
          <Results
            state={state}
            cities={filterState(state)}
            handleCloseResults={closeResults}
            innerResultsRef={innerResults}
          />
        )}
      </div>
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
