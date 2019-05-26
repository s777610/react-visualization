import React from "react";
import { firstVisit } from "../../actions/index";
import { connect } from "react-redux";
import history from "../../history";

const ConfirmButton = ({ favorites, firstVisit }) => {
  const confirmFavorites = () => {
    if (favorites.length === 0) return;
    let currentFavorite = favorites[0];

    history.push("/");
    firstVisit(false);
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites,
        currentFavorite
      })
    );
  };

  return (
    <div className="confirmButton">
      <div onClick={confirmFavorites}>Confirm Favorites</div>
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
