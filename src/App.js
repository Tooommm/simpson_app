import "./style/style.css";

import React, { useState } from "react";

import QuoteCard from "./components/QuoteCard";

function App() {
  const [data, setData] = useState([
    {
      quote:
        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
      character: "Lisa Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
      characterDirection: "Right",
    },
  ]);

  return (
    <div className="container">
      <button>New Quote</button>
      {data.map((quote, index) => (
        <QuoteCard key={index} {...quote} />
      ))}
    </div>
  );
}

export default App;
