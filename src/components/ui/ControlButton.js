import React from "react";

const ControlButton = props => {
  const { name, active } = props;

  return (
    <div className={`controlButton ${active ? `controlBtnActive` : ""}`}>
      {name}
    </div>
  );
};

export default ControlButton;
