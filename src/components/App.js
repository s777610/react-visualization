import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HeadBar from "./layout/HeadBar";
import Setting from "./setting/Setting";
import Dashboard from "./dashboard/Dashboard";
import cc from "cryptocompare";
import { connect } from "react-redux";
import { setCoinList } from "../actions/index";

function App(props) {
  useEffect(() => {
    (async () => {
      let coinList = await cc.coinList();
      let Data = await coinList.Data;
      props.setCoinList(Data);
    })();
    console.log("fetchCoins from App");
  }, [props]);

  return (
    <div className="layout">
      <HashRouter basename="/">
        <HeadBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default connect(
  null,
  { setCoinList }
)(App);
