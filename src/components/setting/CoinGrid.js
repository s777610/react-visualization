import React from "react";
import CoinTile from "./CoinTile";
import { connect } from "react-redux";

const CoinGrid = ({ coinList, topSection, favorites }) => {
  const getCoinsToDisplay = (coinList, topSection) => {
    return topSection
      ? Array.from(favorites)
      : Object.keys(coinList).slice(0, 100);
  };

  return (
    <div className="coinGrid">
      {getCoinsToDisplay(coinList, topSection).map(coinKey => {
        return (
          <CoinTile
            topSection={topSection}
            key={coinKey}
            coin={coinList[coinKey]}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.coin.favorites
  };
};

export default connect(mapStateToProps)(CoinGrid);
