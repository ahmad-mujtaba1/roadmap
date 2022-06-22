import React from "react";
import { useDispatch } from "react-redux";

import { bindActionCreators } from "@reduxjs/toolkit";
const Shop = () => {
  const dispatch = useDispatch();
  const triggerplus = () => {};
  const triggerdec = () => {
    dispatch({ type: "withdraw", payload: { amount: 10 } });
  };
  return (
    <>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "deposit", payload: { amount: 10 } })}
      >
        +
      </button>
      updateBalance
      <button className="btn btn-primary m-2" onClick={triggerdec}>
        -
      </button>
    </>
  );
};

export default Shop;
