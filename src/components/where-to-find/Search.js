import React, { useState, useEffect } from 'react'
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

  // Hide existing results after new search query
  useEffect(() => {
    handleState('')
  }, [isLoading])

  const getState = async id => {
    const { result } = await getPlaceDetails(id)

    const state = result?.address_components.find(item =>
      item.types.includes('administrative_area_level_1')
    )

    handleState(state.long_name)
    setAddress('')
  }

  return (
    <>
      <input
        className="padding-left-30px padding-right-30px width-100"
        type="text"
        onChange={e => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      {address && results.status === 'OK' && (
        <ul className="bg-white margin-bottom-none search-results">
          {error && <p>An error has occurred. Please try again</p>}
          {isLoading ? (
            <p className="padding-left-30px padding-right-30px margin-bottom-10px padding-bottom-20px padding-top-15px">
              Searching...
            </p>
          ) : (
            results?.predictions.map(({ description, place_id }) => (
              <li
                key={place_id}
                onClick={() => getState(place_id)}
                className="margin-bottom-none padding-left-30px padding-right-30px padding-bottom-15px padding-top-15px search-item"
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
