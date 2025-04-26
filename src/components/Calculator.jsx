import React, { useState } from 'react';

export default function Calculator({ onRatingUpdate }) {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [rating, setRating] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    const roundedBMI = calculatedBMI.toFixed(2);
    setBmi(roundedBMI);

    let ratingMessage = '';
    if (calculatedBMI < 18.5) ratingMessage = 'Underweight';
    else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) ratingMessage = 'Normal weight';
    else if (calculatedBMI >= 25 && calculatedBMI < 29.9) ratingMessage = 'Overweight';
    else ratingMessage = 'Obese';

    setRating(ratingMessage);
    onRatingUpdate(ratingMessage);
  };

  const incrementWeight = () => setWeight(prev => Math.min(prev + 1, 200));
  const decrementWeight = () => setWeight(prev => Math.max(prev - 1, 20));
  const incrementHeight = () => setHeight(prev => Math.min(prev + 1, 250));
  const decrementHeight = () => setHeight(prev => Math.max(prev - 1, 100));

  return (
    <div className="bmi-container">
      <div className="bmi-card">
        <h2>BMI Calculator</h2>
        <div className="weight-age-container">
          <div className="counter-card">
            <h3>Weight</h3>
            <div className="counter-buttons">
              <button
                className="counter-button"
                onClick={decrementWeight}
                aria-label="Decrease weight"
              >
                -
              </button>
              <span>{weight} kg</span>
              <button
                className="counter-button"
                onClick={incrementWeight}
                aria-label="Increase weight"
              >
                +
              </button>
            </div>
          </div>
          <div className="counter-card">
            <h3>Height</h3>
            <div className="counter-buttons">
              <button
                className="counter-button"
                onClick={decrementHeight}
                aria-label="Decrease height"
              >
                -
              </button>
              <span>{height} cm</span>
              <button
                className="counter-button"
                onClick={incrementHeight}
                aria-label="Increase height"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button className="calculate-button" onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="bmi-result">
            <p>Your BMI: {bmi}</p>
            <p>Rating: {rating}</p>
          </div>
        )}
      </div>
    </div>
  );
}
