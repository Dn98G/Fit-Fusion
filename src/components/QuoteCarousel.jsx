import React, { useState, useEffect } from "react";

const QuoteCarousel = () => {
  const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success starts with self-discipline.",
    "The body achieves what the mind believes.",
    "The only bad workout is the one that didn’t happen.",
    "Don’t limit your challenges. Challenge your limits."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(quoteInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="quote-carousel">
      <p>{quotes[currentQuote]}</p>
    </div>
  );
};

export default QuoteCarousel;
