import QuoteBox from './QuoteBox';
import './App.css';
import { useState } from 'react';

function App() {
  //const [quote, setQuote] = useState({quote: 'something', author: 'Jason'});

  return (
    <div id="wrapper">
      <QuoteBox />
      <div className="footer">
        <p>by <a href="https://github.com/JayX97">JayX97</a></p>
      </div>
    </div>
  );
}

export default App;
