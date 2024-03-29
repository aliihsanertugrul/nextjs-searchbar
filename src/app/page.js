"use client"
import PriceInput from '@/components/price-input'
import ProductPage from '@/components/product-page'
import SearchBar from '@/components/search-bar'
import Spacer from '@/components/spacer'
import React, { useState } from 'react'

const Home = () => {
  const [filtered, setFiltered] = useState("")
  const [maxPrice, setMaxPrice] = useState()
    const [minPrice, setMinPrice] = useState()
    const [color, setColor] = useState()
    const [sorted, setSorted] = useState("")
  
  return (
    <>
  <SearchBar setFiltered={setFiltered}/>
  <Spacer height={"25px"}/>
  <PriceInput setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} setColor={setColor} setSorted={setSorted}/>
  <Spacer height={"50px"}/>
  <ProductPage filtered={filtered} minPrice={minPrice} maxPrice={maxPrice} color={color} sorted={sorted}/>
  <Spacer height={"50px"}/>
    </>
  )
}

export default Home