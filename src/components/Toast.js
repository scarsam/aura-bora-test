import React from 'react'

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
