import React from "react";

const ChartSelect = ({ changeChartSelect }) => {
  return (
    <select
      className="chartSelect"
      defaultValue="months"
      onChange={e => changeChartSelect(e)}
    >
      <option value="days">Days</option>
      <option value="weeks">Weeks</option>
      <option value="months">Months</option>
    </select>
  );
};

export default ChartSelect;
