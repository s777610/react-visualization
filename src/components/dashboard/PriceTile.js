import React from "react";

const PriceTile = ({ price, index }) => {
  const sym = Object.keys(price)[0];
  const data = price[sym]["USD"];
  const priceChange24hr = data.CHANGEPCT24HOUR.toFixed(2);

  const getColor = () => {
    if (priceChange24hr > 0) {
      return "green";
    } else if (priceChange24hr < 0) {
      return "red";
    }
  };

  console.log(typeof data.PRICE);

  return (
    <div className="selectableTile">
      <div className="coinHeaderGrid">
        <div>{sym} </div>
        <div className={`priceGrid__24hr ${getColor()}`}>
          {" "}
          {priceChange24hr}
        </div>
      </div>
      <div className="tickerPrice">${data.PRICE.toFixed(2)}</div>
    </div>
  );
};

export default PriceTile;
