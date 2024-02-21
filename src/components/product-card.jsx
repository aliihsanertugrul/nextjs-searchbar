"use client"
import React from "react";
import "./productCard.scss";
import { useRouter } from "next/navigation";

const ProductCard = ({ data }) => {
  const [
    id,
    ad,
    marka,
    model,
    renk,
    cozunurluk,
    video_kapasitesi,
    price,
    pil_suresi,
    islemci,
    uyumlu_cihazlar,
    kapasite,
  ] = data;
  const router=useRouter()
  const handleCard = (item) => {
    router.push(`/${item.id}`)
    console.log(item)
  }
  return (
    <>
    
      {data.map((item) => (
        <div className="col" key={item.id} onClick={()=>handleCard(item)} >
          
          <div className="card">
            <div className="card-body">
              <div className="card-title fw-bold">{item.ad}</div>
              <p>Marka :{item.marka}</p>
              <p>Model :{item.model}</p>
             
              <p>
                {item.renk ? (
                  // Eğer item.renk varsa, renkleri göster
                  <span>Renk: {item.renk.join("-")}</span>
                ) : (
                  
                  ""
                )}
              </p>
              <span className="badge text-bg-warning p-2">Fiyat : ${item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
