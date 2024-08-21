import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

const QuoteBox = (props) => {
    //const quote = quotesData.quotes[0];
    const quote = props.quote;
    const randomQuote = props.randomQuote;

    return (
        <div id="quote-box">
            <div className="quote-text">
                <span id="text">{quote.quote}</span>
            </div>
            <div className="quote-author">
                <span id="author">- {quote.author}</span>
            </div>
            <div className="buttons">
                <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
                <button id="new-quote" onClick={randomQuote}>New Quote</button>
            </div>
        </div>
    );
};

export default QuoteBox;