import React from "react";
import ControlButton from "../ui/ControlButton";

const HeadBar = () => {
  return (
    <div className="bar">
      <div className="logo">CryptoBash </div>
      <div />
      <ControlButton name="Dashboard" />
      <ControlButton name="Settings" active />
    </div>
  );
};

export default HeadBar;
