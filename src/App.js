import "./style/style.css";

import React, { useEffect, useState } from "react";

import QuoteCard from "./components/QuoteCard";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        "https://simpsons-quotes-api.herokuapp.com/quotes"
      );
      console.log(data);
      setData(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
      <button onClick={() => fetchData()}>New Quote</button>
      <QuoteCard {...data[0]} />
    </div>
  );
};

export default App;
