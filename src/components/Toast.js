import React from 'react'
import PropTypes from 'prop-types'

const Toast = ({ show, text }) => {
  return (
    <div
      className={`toast bg-black c-white text-center fixed z-index-1 ${
        show ? 'show' : ''
      }`}
    >
      {text}
    </div>
  )
}

export default Toast

Toast.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}
