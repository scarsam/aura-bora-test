import React, { useState } from 'react'
import useGoogleAutocomplete from 'use-google-autocomplete'

const Search = ({ handleState }) => {
  const [address, setAddress] = useState('')

  const { results, isLoading, error, getPlaceDetails } = useGoogleAutocomplete({
    apiKey: 'AIzaSyBWECI7Ct9Ga3j-47eLEQfgGmjwJ2FevJY',
    query: address,
    options: {
      types: 'address',
    },
  })

  const formatState = description => {
    const arrayDescription = description.split(',')
    const state = arrayDescription[arrayDescription.length - 2]
    handleState(state.trim())
    setAddress('')
  }

  return (
    <>
      <input
        className="padding-left-30px padding-right-30px width-100"
        type="text"
        onChange={e => setAddress(e.target.value)}
      />
      {address && (
        <ul className="bg-white padding-left-30px padding-right-30px padding-top-30px padding-bottom-20px">
          {isLoading ? (
            <p className="margin-bottom-5px">Searching...</p>
          ) : (
            results?.predictions.map(({ id, description }) => (
              <li
                key={id}
                onClick={() => formatState(description)}
                className="padding-bottom-5px"
              >
                {description}
              </li>
            ))
          )}
        </ul>
      )}
    </>
  )
}

export default Search
