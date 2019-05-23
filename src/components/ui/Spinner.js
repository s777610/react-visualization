import React from "react";
import Spinner from "react-spinkit";

const MySpinner = () => {
  return (
    <div className="spinnerCenter">
      <Spinner name="ball-pulse-sync" color="orange" />
    </div>
  );
};

export default MySpinner;
