import React from "react";
import { firstVisit } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";

const ConfirmButton = props => {
  const confirmFavorites = () => {
    history.push("/");
    props.firstVisit(false);
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites: Array.from(props.favorites)
      })
    );
  };

  return (
    <div className="confirmButton">
      <Link to="/">
        <div onClick={confirmFavorites}>Confirm Favorites</div>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.coin.favorites
  };
};

export default connect(
  mapStateToProps,
  { firstVisit }
)(ConfirmButton);
