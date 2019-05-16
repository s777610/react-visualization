import React, { useEffect } from "react";
import Welcome from "./Welcome";
import { togglePage, firstVisit } from "../../actions/index";
import { connect } from "react-redux";

const Setting = props => {
  useEffect(() => {
    savedSettings();
  });

  const savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      console.log("no cryptoDashData from localStorage");
      props.togglePage("Settings");
      props.firstVisit(true);
    } else {
      console.log("settings data found from localStorage");
    }
  };

  return <Welcome />;
};

export default connect(
  null,
  { togglePage, firstVisit }
)(Setting);
