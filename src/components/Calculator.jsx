import React, { useState } from 'react';

export default function Calculator() {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [rating, setRating] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(2));

    if (calculatedBMI < 18.5) setRating('Underweight');
    else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) setRating('Normal weight');
    else if (calculatedBMI >= 25 && calculatedBMI < 29.9) setRating('Overweight');
    else setRating('Obese');
  };

  return (
    <div className="bmi-container">
      <div className="card">
        <h2>BMI Calculator</h2>
        <div className="weight-age-container">
          <div className="counter-card">
            <h3>Weight</h3>
            <div className="counter-buttons">
              <button className="counter-button" onClick={() => setWeight(weight - 1)}>-</button>
              <span>{weight} kg</span>
              <button className="counter-button" onClick={() => setWeight(weight + 1)}>+</button>
            </div>
          </div>
          <div className="counter-card">
            <h3>Height</h3>
            <div className="counter-buttons">
              <button className="counter-button" onClick={() => setHeight(height - 1)}>-</button>
              <span>{height} cm</span>
              <button className="counter-button" onClick={() => setHeight(height + 1)}>+</button>
            </div>
          </div>
        </div>
        <button className="calculate-button" onClick={calculateBMI}>Calculate BMI</button>

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
