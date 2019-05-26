import React from "react";
import { connect } from "react-redux";
import { setCurFavorite } from "../../../actions/index";

const PriceTile = ({ price, index, currentFavorite, setCurFavorite }) => {
  const sym = Object.keys(price)[0];
  const data = price[sym]["USD"];
  const priceChange24hr = data.CHANGEPCT24HOUR.toFixed(2);

  const getColor = () => {
    if (priceChange24hr > 0) {
      return "green";
    } else if (priceChange24hr < 0) {
      return "red";
    }
  };

  const setCurrentFavorite = sym => {
    setCurFavorite(sym);
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentFavorite: sym
      })
    );
  };

  return (
    <div
      className={`selectableTile ${
        currentFavorite === sym ? "currentFavorite" : null
      }`}
      onClick={() => setCurrentFavorite(sym)}
    >
      <div className="coinHeaderGrid">
        <div>{sym} </div>
        <div className={`priceGrid__24hr ${getColor()}`}>
          {" "}
          {priceChange24hr} %
        </div>
      </div>
      <div className="tickerPrice">${data.PRICE.toFixed(2)}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentFavorite: state.coin.currentFavorite
  };
};

export default connect(
  mapStateToProps,
  { setCurFavorite }
)(PriceTile);
