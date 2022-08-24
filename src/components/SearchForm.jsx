import React, { useRef, useEffect } from 'react'
import {useGlobalContext} from '../utils/context'
import {FaSearch} from 'react-icons/fa'

const SearchForm = () => {
  const {setsearchItem} = useGlobalContext();
  const searchValue = useRef(null);

  useEffect(() => {
    searchValue.current.focus();
  }, [])

  const searchNews = () => {
    setsearchItem(searchValue.current.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="form">
      <FaSearch />
      <form onSubmit={handleSubmit}>
        <input type="text"
        name='name'
        id='searchvalue'
        ref={searchValue}
        onChange={searchNews}
        placeholder='Search'
        />
      </form>
    </div>
  )
}

export default SearchForm