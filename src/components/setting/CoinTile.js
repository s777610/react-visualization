import React from "react";
import { connect } from "react-redux";
import { addCoin, removeCoin } from "../../actions/index";

const MAX_FAVORITES = 10;

const CoinTile = ({ coin, topSection, addCoin, removeCoin, favorites }) => {
  const { CoinName, Symbol, ImageUrl } = coin;

  const changeFavorite = symbol => {
    return topSection ? removeCoin(symbol) : addCoin(symbol);
  };

  return (
    <div
      className={
        topSection
          ? "deleteableTile"
          : `selectableTile ${
              favorites.has(Symbol) ||
              Array.from(favorites).length >= MAX_FAVORITES
                ? "disableTile"
                : null
            }`
      }
      onClick={() => changeFavorite(Symbol)}
    >
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

const mapStateToProps = state => {
  return {
    favorites: state.coin.favorites
  };
};

export default connect(
  mapStateToProps,
  { addCoin, removeCoin }
)(CoinTile);
