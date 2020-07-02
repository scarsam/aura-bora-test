import React from 'react'
import PropTypes from 'prop-types'

const Toast = ({ text }) => {
  return (
    <div className="toast bg-black c-white text-center fixed z-index-1">
      {text}
    </div>
  )
}

export default Toast

Toast.propTypes = {
  text: PropTypes.string.isRequired,
}
