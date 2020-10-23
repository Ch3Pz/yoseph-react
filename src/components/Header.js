import React from "react";
import { NavLink } from "react-router-dom";


export default () => (
  <header className="header">
    <div className="container">
      <div className="header__left">
        <img className="header-icon" src="./img/icon2.png" alt="logo"/>
        &nbsp;
        <h2 className="header-text">CORESOME</h2>
      </div>
      <button className="hamburger" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
    {/*
    <h1 className="Header-h1">TEST</h1>
    <nav className="Header-nav">
      <NavLink
        exact
        to="/"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="Header-navLink"
        activeClassName="Header-isActive"
      >
        About
      </NavLink>
    </nav>
    */}
  </header>
);
