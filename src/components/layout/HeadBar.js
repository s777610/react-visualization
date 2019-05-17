import React from "react";
import { NavLink } from "react-router-dom";

const HeadBar = () => {
  return (
    <div className="bar">
      <div className="logo">CryptoBash </div>
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
