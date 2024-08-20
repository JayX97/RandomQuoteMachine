const QuoteBox = () => {
    const quote = {
        quote: 'something',
        author: 'Jason'
    }

    return (
        <div id="quote-box">
            <div className="quote-text">
                <span id="text">{quote.quote}</span>
            </div>
            <div className="quote-author">
                <span id="author">- {quote.author}</span>
            </div>
            <div className="buttons">
                <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
                <button id="new-quote" target="_blank">New Quote</button>
            </div>
        </div>
    );
};

export default QuoteBox;