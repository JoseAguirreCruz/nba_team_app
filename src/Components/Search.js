import React from 'react'

const Search = ({ handleSearch }) => {
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input type="text" placeholder="Search for a team" name="search" />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
