export default function DisplayQuotes({ quote }) {
  return (
    <div className="quote-container">
      <p className="quote-text">{quote.text}</p>
      <p className="quote-author">- {quote.author}</p>
    </div>
  );
}
