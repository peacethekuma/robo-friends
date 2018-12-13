import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='pa2'>
      <input className='ba b--silver bg-hot-pink pa2' type='search' placeholder='seach robots' onChange={props.searchChange}/>
    </div>
  )
}

export default SearchBar;