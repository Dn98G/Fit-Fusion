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
    }, 5000); 

    return () => clearInterval(quoteInterval); 
  }, []);

  return (
    <div className="quote-carousel flex justify-center items-center h-32 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-lg p-6 mx-4 mt-8">
      <p className="text-white text-xl font-semibold text-center italic">{quotes[currentQuote]}</p>
    </div>
  );
};

export default QuoteCarousel;
