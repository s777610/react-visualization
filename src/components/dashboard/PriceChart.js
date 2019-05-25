import React from "react";
import highchartsConfig from "./HighchartsConfig";
import ReactHighcharts from "react-highcharts";

const PriceChart = () => {
  return (
    <div className="tile">
      <ReactHighcharts config={highchartsConfig()} />
    </div>
  );
};

export default PriceChart;
