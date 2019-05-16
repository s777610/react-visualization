import React from "react";
import ControlButton from "../ui/ControlButton";
import { connect } from "react-redux";

const HeadBar = props => {
  const { page } = props;

  return (
    <div className="bar">
      <div className="logo">CryptoBash </div>
      <div />
      <ControlButton name="Dashboard" active={page === "Dashboard"} />
      <ControlButton name="Settings" active={page === "Settings"} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    page: state.page.currentPage
  };
};

export default connect(mapStateToProps)(HeadBar);
