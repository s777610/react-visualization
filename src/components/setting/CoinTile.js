import React from "react";

const CoinTile = ({ coin, topSection }) => {
  const { CoinName, Symbol, ImageUrl } = coin;

  return (
    <div className={topSection ? "deleteableTile" : "selectableTile"}>
      <div className="coinHeaderGrid">
        <div>{CoinName}</div>
        {topSection ? (
          <div className="deleteHeaderGrid">X</div>
        ) : (
          <div className="coinSymbol">{Symbol}</div>
        )}
      </div>
      <img
        className="coinImage"
        alt={Symbol}
        src={`http://cryptocompare.com/${ImageUrl}`}
      />
    </div>
  );
};

export default CoinTile;
