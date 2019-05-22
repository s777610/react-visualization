import React from "react";
import PriceTile from "./PriceTile";

const PriceGrid = ({ prices }) => {
  return (
    <div className="priceGrid">
      {prices.map((price, index) => {
        return <PriceTile key={index} price={price} index={index} />;
      })}
    </div>
  );
};

export default PriceGrid;
