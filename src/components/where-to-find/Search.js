import React, { useState, useEffect } from 'react'
import { USStates } from './States'

// Fix selecting a unsupported state issue

const Search = ({ handleState }) => {
  const [searchQuery, setSearchQuery] = useState('')

  // Hide existing results after new search query
  useEffect(() => {
    filteredStates()
  }, [searchQuery])

  const filteredStates = () =>
    USStates.filter(state =>
      state.toLowerCase().startsWith(searchQuery) ? true : false
    )

  const selectState = state => {
    handleState(state)
    setSearchQuery('')
  }

  return (
    <>
      <input
        className="padding-left-30px padding-right-30px width-100"
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Enter your state"
      />
      {searchQuery.length > 1 && (
        <ul className="bg-white margin-bottom-none search-results">
          {filteredStates().map(state => (
            <li
              key={state}
              onClick={() => selectState(state)}
              className="margin-bottom-none padding-left-30px padding-right-30px padding-bottom-15px padding-top-15px search-item"
            >
              {state}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Search
