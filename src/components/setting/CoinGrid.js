import React from "react";

const CoinGrid = props => {
  return (
    <div className="coinGrid">
      {Object.keys(props.coinList).map(coinKey => {
        return <div key={coinKey}>{coinKey}</div>;
      })}
    </div>
  );
};

export default CoinGrid;
