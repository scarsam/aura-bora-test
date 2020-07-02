import React, { useReducer } from 'react'
import { Context, initialState, reducer } from 'store'
import PropTypes from 'prop-types'

// Used this guide to set up the global store correctly for Gatsby
// https://codebushi.com/gatsbyjs-global-state/

const ContextWrapper = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  )
}

ContextWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContextWrapper
