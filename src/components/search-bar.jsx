"use client"
import React from 'react'
import { FiSearch } from "react-icons/fi";
import "./searchbar.style.scss";

const SearchBar = ({setFiltered}) => {
const handleSearchBar = (e) => { 
  setFiltered(e.target.value)
 }
  return (
    <div className='container my-3'>
        <form className="d-flex" role="search">
           <div className='search-container'>
                <input placeholder='Search product..' type="text" className='searchInput' onChange={(e)=>handleSearchBar(e)}/>
                <span className='search-icon'>
                    <FiSearch/>
                </span>
                
                    <div className='searchMain search-1'></div>
                    <div className='searchMain search-2'></div>
                    <div className='searchMain search-3'></div>
                    <div className='searchMain search-4'></div>
                    <div className='searchMain search-5'></div>
                
           </div>
        </form>
    </div>
  )
}

export default SearchBar