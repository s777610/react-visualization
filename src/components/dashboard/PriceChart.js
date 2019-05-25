import React from "react";
import highchartsConfig from "./HighchartsConfig";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighChartTheme";

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
  return (
    <div className="tile">
      <ReactHighcharts config={highchartsConfig()} />
    </div>
  );
};

export default PriceChart;
