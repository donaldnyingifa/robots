import React from 'react'
import './search-box.css'

const SearchBox =({searchChange, placeholder})=> {
  return (
      <input
      className='search'
      type='search'
      placeholder= { placeholder }
      onChange={searchChange}
      />
  )
}
export default SearchBox
