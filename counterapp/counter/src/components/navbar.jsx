import React, { Component } from "react";

const Navbar = ({ totalcounters }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge bg-pill bg-secondary">{totalcounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
