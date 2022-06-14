import "./App.css";
import NoteState from "./notes/noteState";
import About from "./components/about";
import Home from "./components/home";

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
