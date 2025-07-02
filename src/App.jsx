import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import DisplayQuotes from "./DisplayQuotes";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

export default function App() {
  // const [fetchedQuotes, setFetchedQuotes] = useState([]);
  // useEffect(() => {
  //   async function fetchQuotes() {
  //     try {
  //       const response = await fetch("https://api.quotable.io/quotes");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setFetchedQuotes(data.results);
  //       if (data.results.length > 0) {
  //         setQuote(data.results[0]);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch quotes:", error);
  //     }
  //   }

  //   fetchQuotes();
  // }, []);
  const [quote, setQuote] = useState(
    quotes[0] || {
      text: "Loading...",
      author: "Loading...",
    }
  );

  const [loading, setLoading] = useState(false);

  function getRandomQuote() {
    if (quotes.length === 0) return;

    setLoading(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="app-container">
      {!quote && <h1 className="app-title">Random Quote Generator</h1>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <DisplayQuotes quote={quote} />
      )}
      <button
        className="quote-button"
        onClick={getRandomQuote}
        disabled={loading}
      >
        Get New Quote
      </button>
    </div>
  );
}
