import "./App.css";
import NoteState from "./notes/noteState";
import NoteContext from "./notes/noteContext";
import About from "./components/about";
import Home from "./components/home";
import {
  Routes, // instead of "Switch"
  Route,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NoteState>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
