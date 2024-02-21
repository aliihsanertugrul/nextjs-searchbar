import React from 'react'
import data from "../../helpers/data.json";
import ProductDetail from '@/components/product-detail';

const DetailPage = ({params}) => {
  
  return (
    <ProductDetail data={data}/>
  )
}

export default DetailPage