import React from "react";

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

export default ControlButton;
