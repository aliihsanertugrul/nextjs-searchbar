import React from "react";
import "./productCard.scss";

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
  return (
    <>
      {data.map((item) => (
        <div className="col" key={item.id}>
          <div className="card">
            <div className="card-body">
              <div className="card-title">{item.ad}</div>
              <p>Model :{item.model}</p>
              <p>Fiyat :${item.price}</p>
              <p>
                {item.renk ? (
                  // Eğer item.renk varsa, renkleri göster
                  <span>Renk: {item.renk.join("-")}</span>
                ) : (
                  
                  ""
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
