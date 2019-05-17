import React, { useEffect } from "react";
import Welcome from "./Welcome";
import { firstVisit } from "../../actions/index";
import { connect } from "react-redux";
import Spinner from "react-spinkit";

const Setting = props => {
  useEffect(() => {
    savedSettings();
  });

  const savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      console.log("no cryptoDashData from localStorage");

      props.firstVisit(true);
    } else {
      console.log("settings data found from localStorage");
    }
  };

  const spinner = <Spinner name="ball-pulse-sync" color="orange" />;
  const SettingContent = <Welcome />;

  return props.coinList ? SettingContent : spinner;
};

const mapStateToProps = state => {
  return {
    coinList: state.coinList.coinList
  };
};

export default connect(
  mapStateToProps,
  { firstVisit }
)(Setting);
