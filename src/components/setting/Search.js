import React, { useState } from "react";
import { connect } from "react-redux";
import { setFilteredCoins } from "../../actions/index";
import fuzzy from "fuzzy";
import _ from "lodash";

const Search = ({ coinList, setFilteredCoins }) => {
  const [inputVal, setInputVal] = useState("");

  const onChangeInput = e => {
    setInputVal(e.target.value);
    handleFilter(inputVal, coinList, setFilteredCoins);
  };

  const handleFilter = (inputVal, coinList, setFilteredCoins) => {
    // Get all the coin symbols
    const coinSymbols = Object.keys(coinList); // coinList is an object

    // Get all the coin names, map symbol to name
    const coinNames = coinSymbols.map(sym => coinList[sym].CoinName);

    const allStringsToSearch = [...coinSymbols, ...coinNames];

    const fuzzyResults = fuzzy
      .filter(inputVal, allStringsToSearch, {})
      .map(result => result.string);

    const filteredCoins = _.pickBy(coinList, (result, key) => {
      return (
        _.includes(fuzzyResults, key) ||
        _.includes(fuzzyResults, result.CoinName)
      );
    });

    setFilteredCoins(filteredCoins);
  };

  return (
    <div className="search">
      <h2>Search all coins:</h2>
      <input
        className="search__input"
        value={inputVal}
        onChange={e => onChangeInput(e)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filteredCoins: state.coin.filteredCoins,
    coinList: state.coin.coinList
  };
};

export default connect(
  mapStateToProps,
  { setFilteredCoins }
)(Search);
