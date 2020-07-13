import React, { useState } from 'react'
import useGoogleAutocomplete from 'use-google-autocomplete'

const Search = ({ handleState }) => {
  const [address, setAddress] = useState(null)

  const { results, isLoading, error, getPlaceDetails } = useGoogleAutocomplete({
    apiKey: 'AIzaSyBWECI7Ct9Ga3j-47eLEQfgGmjwJ2FevJY',
    query: address,
    options: {
      types: 'address',
    },
  })

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
      />
      {address && (
        <ul className="bg-white padding-left-30px padding-right-30px padding-top-30px padding-bottom-20px">
          {isLoading ? (
            <p className="margin-bottom-5px">Searching...</p>
          ) : (
            results?.predictions.map(({ id, description, place_id }) => (
              <li
                key={id}
                onClick={() => getState(place_id)}
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
