import React from "react";
import data from "../helpers/data.json";
import ProductCard from "./product-card";

const ProductPage = ({filtered,maxPrice,minPrice,color}) => {
   
    let filteredData;
    if(!filtered){
        filteredData=data;
    }else{

        filteredData=data.filter((item)=>item.ad.toLowerCase().includes(filtered.toLowerCase()))
    }

    if (minPrice && maxPrice) {
        // Hem minPrice hem de maxPrice dolu ise filtreleme yap
        filteredData = filteredData.filter((item) => item.price >= Number(minPrice) && item.price <= Number(maxPrice));
    } else if (minPrice) {
        // Sadece minPrice dolu ise filtreleme yap
        filteredData = filteredData.filter((item) => item.price >= Number(minPrice));
    } else if (maxPrice) {
        // Sadece maxPrice dolu ise filtreleme yap
        filteredData = filteredData.filter((item) => item.price <= Number(maxPrice));
    }
// console.log(filteredData.map((item)=>item?.renk).join(","))

    if(color){
        filteredData=filteredData.filter((item)=>item?.renk?.join(",").toLowerCase().includes(color.toLowerCase()))
    }

   
  return (
    <div className="container">
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        <ProductCard data={filteredData}/>
      </div>
    </div>
  );
};

export default ProductPage;
