import "./App.css";
import { useState } from "react";
import { UserContext } from "./notes/UserContext";
import { About } from "./components/about";
import { Home } from "./components/home";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import React from "react";

function App() {
  const [value, setValue] = useState("hello");
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{ value, setValue }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
