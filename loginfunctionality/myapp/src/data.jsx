import React, { useState, useEffect } from "react";
import LoadSpinner from "./loadSpinner/loadSpinner";
import "./loadSpinner/loadspinner.css";
import "./style.css";

const DATA = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products?limit=5");

    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <React.Fragment>
          <div className="load-container">
            <LoadSpinner />
          </div>
        </React.Fragment>
      ) : (
        products.map(({ image, title, price, id }) => (
          <div key={id} className="container">
            <img src={image} alt="store" />
            <p>{title}</p>
            <p>{price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DATA;
