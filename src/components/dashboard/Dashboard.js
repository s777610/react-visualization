import React, { useEffect } from "react";
import { connect } from "react-redux";
import cc from "cryptocompare";
import hisory from "../../history";
import { setFavorites, firstVisit, setPrices } from "../../actions/index";

const Dashboard = props => {
  /////////////////////////////////////////
  //getDataFromLocalStorage: just one time
  /////////////////////////////////////////

  useEffect(() => {
    console.log("getDataFromLocalStorage()");
    const getDataFromLocalStorage = () => {
      let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
      if (!cryptoDashData) {
        props.firstVisit(true);
        hisory.push("/setting");
      } else {
        let { favorites } = cryptoDashData;

        props.firstVisit(false);
        props.setFavorites(favorites);
      }
    };
    getDataFromLocalStorage();
  }, []);

  //////////////////////////////////////
  // fetchPrice hook: just one time
  //////////////////////////////////////
  useEffect(() => {
    // if (props.firstVisit) return;

    const fetchPrice = async () => {
      let pricesData = await prices();
      // set the prices into redux store
      props.setPrices(pricesData);
    };

    const prices = async () => {
      let returnData = [];
      const favorites = Array.from(props.favorites);

      for (let i = 0; i < favorites.length; i++) {
        try {
          let priceData = await cc.priceFull(favorites[i], "USD");
          returnData.push(priceData);
        } catch (err) {
          console.warn("Fetch price error: ", err);
        }
      }

      return returnData;
    };

    console.log("fetchPrice();");
    fetchPrice();
  }, [props.favorites]);

  return props.prices.length > 0 ? (
    <h1>I got prices</h1>
  ) : (
    <h1>I am Dashboard</h1>
  );
};

const mapStateToProsp = state => {
  return {
    favorites: state.coin.favorites,
    firstVisit: state.page.firstVisit,
    prices: state.coin.prices
  };
};

export default connect(
  mapStateToProsp,
  { setFavorites, firstVisit, setPrices }
)(Dashboard);
