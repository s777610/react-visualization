import React, { useEffect } from "react";
import Welcome from "./Welcome";
import { firstVisit, setFavorites, setCoinList } from "../../actions/index";
import { connect } from "react-redux";

import CoinGrid from "./coin/CoinGrid";
import ConfirmButton from "../ui/ConfirmButton";
import Search from "./Search";
import MySpinner from "../ui/Spinner";

const Setting = props => {
  /////////////////////////////////////////
  //getDataFromLocalStorage: just one time
  /////////////////////////////////////////
  useEffect(() => {
    const getDataFromLocalStorage = () => {
      let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

      if (!cryptoDashData) {
        props.firstVisit(true);
      } else {
        let { favorites } = cryptoDashData;
        if (favorites && favorites.length > 0) {
          props.firstVisit(false);
          props.setFavorites(favorites);
        } else {
          props.setFavorites([]);
        }
      }
    };
    getDataFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { coinList, filteredCoins, favorites } = props;

  const SettingContent = (
    <React.Fragment>
      {favorites && favorites.length > 0 ? (
        <CoinGrid coinList={coinList} topSection />
      ) : (
        <Welcome />
      )}
      <ConfirmButton />
      <Search />
      {!filteredCoins ? (
        <CoinGrid coinList={coinList} />
      ) : (
        <CoinGrid coinList={filteredCoins} />
      )}
    </React.Fragment>
  );

  return coinList ? SettingContent : <MySpinner />;
};

const mapStateToProps = state => {
  return {
    coinList: state.coin.coinList,
    filteredCoins: state.coin.filteredCoins,
    favorites: state.coin.favorites
  };
};

export default connect(
  mapStateToProps,
  { firstVisit, setFavorites, setCoinList }
)(Setting);
