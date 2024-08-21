import QuoteBox from './QuoteBox';
import './App.css';
import { useState } from 'react';
import quotesData from "./quotes.json";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const numPos = Math.floor(Math.random() * Object.keys(quotesData.quotes).length);
  const [quote, setQuote] = useState(quotesData.quotes[numPos]);

  const randomQuote = () => {
    const newPos = Math.floor(Math.random() * Object.keys(quotesData.quotes).length);
    setQuote(quotesData.quotes[newPos]);
  };

  return (
    <div id="wrapper">
      <QuoteBox quote={quote} randomQuote={randomQuote} />
      <div className="footer">
        <p>by <a id="author-link" href="https://github.com/JayX97" target="_blank">JayX97</a></p>
      </div>
    </div>
  );
}

export default App;
