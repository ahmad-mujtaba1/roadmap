import React, { Component } from "react";
import "./counter.css";
const Counter = ({ onIncreament, onDelete1, onDelete, counter }) => {
  const getbadges = () => {
    let clases = "badge bg-";
    clases += counter.value === 0 ? "warning" : "primary";
    return clases;
  };
  const formateCount = () => {
    const { value } = counter;
    return value === 0 ? "zero" : value;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <span className={getbadges()}>{formateCount()}</span>
        </div>
        <div className="col-2">
          <button
            onClick={() => onIncreament(counter)}
            className="btn btn-secondary btn-sm m-1"
          >
            +
          </button>
          <button
            onClick={() => onDelete1(counter)}
            className="btn btn-danger btn-sm "
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
