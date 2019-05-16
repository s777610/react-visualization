import React from "react";
import { togglePage, firstVisit } from "../../actions/index";
import { connect } from "react-redux";

const ConfirmButton = props => {
  const confirmFavorites = () => {
    props.togglePage("Dashboard");
    props.firstVisit(false);
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        test: "hello"
      })
    );
  };

  return (
    <div className="centerDiv">
      <div className="confirmButton" onClick={confirmFavorites}>
        Confirm Favorites
      </div>
    </div>
  );
};

export default connect(
  null,
  { togglePage, firstVisit }
)(ConfirmButton);
