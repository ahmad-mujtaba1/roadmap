import React, { Component } from "react";
import Counter from "./counter";
const Counters = ({ onReset, onDelete, onDelete1, onIncreament, counters }) => {
  return (
    <div className="container">
      <button onClick={onReset} className="btn1 btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
          counter={counter}
          onDelete={onDelete}
          onIncreament={onIncreament}
          onDelete1={onDelete1}
        />
      ))}
    </div>
  );
};

export default Counters;
