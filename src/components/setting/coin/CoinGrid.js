import React from "react";
import CoinTile from "./CoinTile";
import { connect } from "react-redux";

const CoinGrid = ({ coinList, topSection, favorites }) => {
  const getCoinsToDisplay = (coinList, topSection) => {
    return topSection ? favorites : Object.keys(coinList).slice(0, 100);
  };

  let content =
    favorites && favorites.length === 0 && topSection ? null : (
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

  return content;
};

const mapStateToProps = state => {
  return {
    favorites: state.coin.favorites
  };
};

export default connect(mapStateToProps)(CoinGrid);
