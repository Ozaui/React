import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_Key = "fca_live_Ho7YtGe4XsBzqFkCq7nHKvueMhyOuLGfXL6y20NM";

function Currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const exchange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);`

    const response = await axios.get(
      `${BASE_URL}?apikey=${API_Key}&base_currency=${fromCurrency}`
    );
    setResult((response.data.data[toCurrency] * amount).toFixed(2));
  };

  return (
    <div className="currency-div">
      <div className="currency-title">
        <h3>Currency App</h3>
      </div>
      <div>
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="from-currency-option"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
        <FaRegArrowAltCircleRight
          style={{ fontSize: `25px`, marginRight: `10px` }}
        />
        <select
          className="to-currency-option"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
        <input type="number" className="result" value={result} readOnly />
      </div>
      <div>
        <button className="exchange-button" onClick={exchange}>
          Convert
        </button>
      </div>
    </div>
  );
}

export default Currency;
