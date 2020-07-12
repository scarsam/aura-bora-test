import React from 'react'

const Store = ({ name, address }) => {
  return (
    <>
      <strong className="text-20px margin-bottom-5px">{name}</strong>
      <address className="font-style-normal text-20px">{address}</address>
    </>
  )
}

export default Store
