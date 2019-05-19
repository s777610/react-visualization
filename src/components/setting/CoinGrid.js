import React from "react";
import CoinTile from "./CoinTile";

const CoinGrid = ({ coinList, topSection }) => {
  const getCoinsToDisplay = (coinList, topSection) => {
    return Object.keys(coinList).slice(0, topSection ? 10 : 100);
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

export default CoinGrid;
