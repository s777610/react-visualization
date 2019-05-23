import React from "react";
import { connect } from "react-redux";

const CoinSpotligh = ({ currentFavorite, coinList }) => {
  const coin = coinList[currentFavorite];
  return (
    <div className="chartGrid__tile">
      <h2>{coin.CoinName}</h2>

      <img
        className="coinImage__spotligh"
        alt="coin"
        src={`http://cryptocompare.com/${coin.ImageUrl}`}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    coinList: state.coin.coinList
  };
};

export default connect(mapStateToProps)(CoinSpotligh);
