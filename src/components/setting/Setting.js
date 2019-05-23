import React, { useEffect } from "react";
import Welcome from "./Welcome";
import { firstVisit, setFavorites, setCoinList } from "../../actions/index";
import { connect } from "react-redux";

import CoinGrid from "./CoinGrid";
import ConfirmButton from "../ui/ConfirmButton";
import Search from "./Search";
import MySpinner from "../ui/Spinner";

const Setting = props => {
  /////////////////////////////////////////
  //getDataFromLocalStorage: just one time
  /////////////////////////////////////////
  useEffect(() => {
    console.log("getDataFromLocalStorage()");
    const getDataFromLocalStorage = () => {
      let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

      if (!cryptoDashData) {
        props.firstVisit(true);
      } else {
        let { favorites } = cryptoDashData;
        props.firstVisit(false);

        props.setFavorites(favorites);
      }
    };
    getDataFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { coinList, filteredCoins } = props;

  const SettingContent = (
    <React.Fragment>
      <Welcome />
      <CoinGrid coinList={coinList} topSection />
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
    filteredCoins: state.coin.filteredCoins
  };
};

export default connect(
  mapStateToProps,
  { firstVisit, setFavorites, setCoinList }
)(Setting);
