import React, { useEffect } from "react";
import Welcome from "./Welcome";
import { firstVisit, setFavorites } from "../../actions/index";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import CoinGrid from "./CoinGrid";
import ConfirmButton from "../ui/ConfirmButton";

const Setting = props => {
  useEffect(() => {
    savedSettings();
  });

  const savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      console.log("no cryptoDashData from localStorage");
      props.firstVisit(true);
    } else {
      console.log("settings data found from localStorage");
      let { favorites } = cryptoDashData;
      props.setFavorites(favorites);
    }
  };

  const { coinList } = props;
  const spinner = <Spinner name="ball-pulse-sync" color="orange" />;
  const SettingContent = (
    <React.Fragment>
      <Welcome />
      <CoinGrid coinList={coinList} topSection />
      <ConfirmButton />
      <CoinGrid coinList={coinList} />
    </React.Fragment>
  );

  return coinList ? SettingContent : spinner;
};

const mapStateToProps = state => {
  return {
    coinList: state.coin.coinList
  };
};

export default connect(
  mapStateToProps,
  { firstVisit, setFavorites }
)(Setting);
