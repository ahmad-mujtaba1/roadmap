import React, { Component } from "react";
import { useState } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
const App = () => {
  const [state, setState] = useState({
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  });

  const handleDeleteCounter = (counter_id) => {
    const counters = state.counters.filter((c) => c.id !== counter_id);
    setState({ counters });
  };
  const handleReset = () => {
    const counters = state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    setState({ counters });
  };
  const handleIncreament = (counter) => {
    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    // counters[index]={...counter} ;
    counters[index].value++;
    setState({ counters });
  };
  const handleDelete = (counter) => {
    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    setState({ counters });
  };
  return (
    <div className="fullbody">
      <Navbar
        totalcounters={state.counters.filter((c) => c.value > 0).length}
      />
      <main className="container">
        <Counters
          onDelete={handleDeleteCounter}
          onIncreament={handleIncreament}
          onDelete1={handleDelete}
          onReset={handleReset}
          counters={state.counters}
        />
      </main>
    </div>
  );
};

export default App;
