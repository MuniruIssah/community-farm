import React from 'react'
import './styles.scss'
import {FiSearch} from 'react-icons/fi'
const SearchBar = () => {
    return (
        <form className='searchBar'>
            <input type={'search'} placeholder='What are you looking for?' />
            <FiSearch className='searchIcon'/>
        </form>
    )
}

export default SearchBar
