import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/w.png";

const HeadBar = () => {
  return (
    <div className="bar">
      <img className="logo" src={logo} alt="logo" />
      <div />
      <NavLink
        className="controlButton"
        exact
        activeClassName="controlBtnActive"
        to="/"
      >
        Dashboard
      </NavLink>
      <NavLink
        exact
        className="controlButton"
        activeClassName="controlBtnActive"
        to="/setting"
      >
        Settings
      </NavLink>
    </div>
  );
};

export default HeadBar;
