/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import cc from "cryptocompare";
import hisory from "../../history";
import {
  setFavorites,
  firstVisit,
  setPrices,
  setCurFavorite
} from "../../actions/index";
import PriceGrid from "./coin/PriceGrid";
import MySpinner from "../ui/Spinner";
import CoinSpotligh from "./coin/CoinSpotligh";
import PriceChart from "./chart/PriceChart";

const Dashboard = props => {
  /////////////////////////////////////////
  //getDataFromLocalStorage: just one time
  /////////////////////////////////////////

  useEffect(() => {
    const getDataFromLocalStorage = () => {
      let cryptoDashData = JSON.parse(
        localStorage.getItem("cryptoDash__ewfbkwlejf")
      );
      if (!cryptoDashData) {
        props.firstVisit(true);
        hisory.push("/setting");
      } else {
        let { favorites, currentFavorite } = cryptoDashData;
        props.firstVisit(false);
        props.setCurFavorite(currentFavorite);
        props.setFavorites(favorites);
      }
    };
    getDataFromLocalStorage();
  }, []);

  //////////////////////////////////////
  // fetchPrice hook: just one time
  //////////////////////////////////////
  useEffect(() => {
    const { favorites } = props;

    const fetchPrice = async () => {
      let returnData = [];

      if (props.favorites) {
        for (let i = 0; i < favorites.length; i++) {
          try {
            let priceData = await cc.priceFull(favorites[i], "USD");
            returnData.push(priceData);
          } catch (err) {
            console.warn("Fetch price error: ", err);
          }
        }
      }

      props.setPrices(returnData);
    };

    fetchPrice();
  }, [props.favorites]);

  return props.prices.length > 0 ? (
    <React.Fragment>
      <PriceGrid prices={props.prices} />
      <div className="chartGrid">
        <CoinSpotligh currentFavorite={props.currentFavorite} />
        <PriceChart currentFavorite={props.currentFavorite} />
      </div>
    </React.Fragment>
  ) : (
    <MySpinner />
  );
};

const mapStateToProsp = state => {
  return {
    favorites: state.coin.favorites,
    firstVisit: state.page.firstVisit,
    prices: state.coin.prices,
    currentFavorite: state.coin.currentFavorite
  };
};

export default connect(
  mapStateToProsp,
  { setFavorites, firstVisit, setPrices, setCurFavorite }
)(Dashboard);
