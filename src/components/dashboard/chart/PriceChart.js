import React, { useEffect, useState } from "react";
import moment from "moment";
import highchartsConfig from "./HighchartsConfig";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighChartTheme";
import cc from "cryptocompare";
import ChartSelect from "./ChartSelect";

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);
const TIME_UNITS = 10;

const PriceChart = ({ currentFavorite }) => {
  const [historical, setHistorical] = useState([]);
  const [timeIntervel, setTimeIntervel] = useState("months");

  useEffect(() => {
    setHistorical([]);
    const fetchHistorical = async () => {
      let results = await historical();
      let historicalData = [
        {
          name: currentFavorite,
          data: results.map((ticker, index) => [
            moment()
              .subtract({ [timeIntervel]: TIME_UNITS - index })
              .valueOf(),
            ticker.USD
          ])
        }
      ];

      setHistorical(historicalData);
    };

    const historical = () => {
      let promises = [];
      for (let i = TIME_UNITS; i > 0; i--) {
        promises.push(
          cc.priceHistorical(
            currentFavorite,
            ["USD"],
            moment()
              .subtract({ [timeIntervel]: i })
              .toDate()
          )
        );
      }
      return Promise.all(promises);
    };

    fetchHistorical();
  }, [currentFavorite, timeIntervel]);

  const changeChartSelect = e => {
    setTimeIntervel(e.target.value);
  };

  return (
    <div className="tile">
      <ChartSelect changeChartSelect={changeChartSelect} />
      <ReactHighcharts config={highchartsConfig(historical)} />
    </div>
  );
};

export default PriceChart;
