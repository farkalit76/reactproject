import React, { } from "react";

import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navigation:
      <span>&nbsp;&nbsp;
        <NavLink to="/">Layout</NavLink>&nbsp;&nbsp;
        <NavLink to="/archive">Archive</NavLink>&nbsp;&nbsp;
        <NavLink to="/feature">Feature</NavLink>&nbsp;&nbsp;
        <NavLink to="/setting">Settings</NavLink>&nbsp;&nbsp;
      </span>
    </div>
  );
};

export default Navbar;
