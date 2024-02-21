"use client";
import React from "react";
import "./price-input.scss";
import data from "../helpers/data.json";

const PriceInput = ({ setMaxPrice, setMinPrice, setColor ,setSorted}) => {
  const handleColor = (e) => {
    setColor(e.target.innerText);
  };

  const uniqueNamesSet = [...new Set(data.flatMap((item) => item.renk))];

  const handleMax = (e) => {
    setMaxPrice(e.target.value);
  };
  const handleMin = (e) => {
    setMinPrice(e.target.value);
  };
  return (
    <div className="container price-container">
      <input
        type="number"
        className="price min"
        placeholder="Min price..."
        onChange={(e) => handleMin(e)}
      />
      <input
        type="number"
        className="price max"
        placeholder="Max price..."
        onChange={(e) => handleMax(e)}
      />
      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Colors
        </button>
        <ul className="dropdown-menu">
          {uniqueNamesSet.map((color, index) => (
            <li key={index}>
              <span onClick={(e) => handleColor(e)}>{color}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn btn-sort  " onClick={()=>setSorted("asc")}>Asc</button>
      <button className="btn btn-sort  " onClick={()=>setSorted("desc")}>desc</button>

    </div>
  );
};

export default PriceInput;
