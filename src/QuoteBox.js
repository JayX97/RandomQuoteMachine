import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

const QuoteBox = (props) => {
    //const quote = quotesData.quotes[0];
    const quote = props.quote;
    const randomQuote = props.randomQuote;
    const twitterLink = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote.quote) + " - " + encodeURIComponent(quote.author) + "&hashtags=quote"; // used to encode quote for Twitter Tweet intent

    return (
        <div id="quote-box" className="card">
            <div className="quote-text">
                <span id="text">{quote.quote}</span>
            </div>
            <div className="quote-author">
                <span id="author">- {quote.author}</span>
            </div>
            <div className="buttons">
                <a id="tweet-quote" className="btn btn-secondary" href={twitterLink} target="_blank">Tweet</a>
                <button id="new-quote" className="btn btn-secondary" onClick={randomQuote}>New Quote</button>
            </div>
        </div>
    );
};

export default QuoteBox;