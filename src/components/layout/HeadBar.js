import React, { useState } from "react";
import ControlButton from "../ui/ControlButton";

const HeadBar = () => {
  const [page, setPage] = useState("dashboard");

  const togglePage = name => {
    if (name === "Dashboard") {
      setPage("dashboard");
    } else {
      setPage("settings");
    }
  };

  return (
    <div className="bar">
      <div className="logo">CryptoBash </div>
      <div />
      <ControlButton
        name="Dashboard"
        togglePage={togglePage}
        active={page === "dashboard"}
      />
      <ControlButton
        name="Settings"
        togglePage={togglePage}
        active={page === "settings"}
      />
    </div>
  );
};

export default HeadBar;
