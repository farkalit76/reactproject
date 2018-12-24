import React from "react";

import "./pages.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="styles">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink to="/">Home Layout</NavLink>
          </div>
         
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/apps">Common Apps</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/forms">Forms-1</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/forms2">Forms-2</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/https">Http Calls</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/employee">Employee</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/tictoe"> TicToe Game</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/auctions"> Auctions</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
