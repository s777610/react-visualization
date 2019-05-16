import React from "react";
import { togglePage } from "../../actions/index";
import { connect } from "react-redux";

const ControlButton = props => {
  const { name, active } = props;

  return (
    <div
      onClick={() => props.togglePage(name)}
      className={`controlButton ${active ? `controlBtnActive` : ""}`}
    >
      {name}
    </div>
  );
};

export default connect(
  null,
  { togglePage }
)(ControlButton);
