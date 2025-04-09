import React, { useState, useEffect } from "react";
import axios from "axios";
import randomColor from "randomcolor";
import Quote from "./Components/Quotes.js";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const newColor = randomColor({ luminosity: "dark" });
      const response = await axios.get("https://api.quotable.io/random");
      const { content, author } = response.data;
      setQuote({ text: content, author });
      setColor(newColor);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="quote-machine" style={{ backgroundColor: color }}>
      <Quote
        text={quote.text}
        author={quote.author}
        textColor={color}
        fetchNextQuote={fetchQuote}
      />
    </div>
  );
};

export default App;
