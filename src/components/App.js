import React, { useEffect } from "react";
import HeadBar from "./layout/HeadBar";
import Setting from "./setting/Setting";
import cc from "cryptocompare";
import { setCoinList } from "../actions/index";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    const fetchCoins = async () => {
      let coinList = await cc.coinList();
      let Data = await coinList.Data;
      props.setCoinList(Data);
    };
    fetchCoins();
    console.log("fetchCoins from App");
  });

  return (
    <div className="layout">
      <HeadBar />
      <Setting />
    </div>
  );
}

export default connect(
  null,
  { setCoinList }
)(App);
