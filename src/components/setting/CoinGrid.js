import React from "react";
import Tile from "../ui/Tile";

const CoinGrid = props => {
  return (
    <div className="coinGrid">
      {Object.keys(props.coinList).map(coinKey => {
        return (
          <div className="tile" key={coinKey}>
            {coinKey}
          </div>
        );
      })}
    </div>
  );
};

export default CoinGrid;
