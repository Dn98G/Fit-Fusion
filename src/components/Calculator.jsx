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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">BMI Calculator</h2>

        <div className="flex justify-between gap-6 mb-6">
          {/* Weight Card */}
          <div className="flex-1 bg-purple-100 rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold text-purple-700 mb-4">Weight</h3>
            <div className="flex items-center justify-center space-x-4">
              <button
                className="w-10 h-10 rounded-full bg-purple-500 text-white text-xl flex items-center justify-center hover:bg-purple-600"
                onClick={decrementWeight}
                aria-label="Decrease weight"
              >
                -
              </button>
              <span className="text-lg font-medium">{weight} kg</span>
              <button
                className="w-10 h-10 rounded-full bg-purple-500 text-white text-xl flex items-center justify-center hover:bg-purple-600"
                onClick={incrementWeight}
                aria-label="Increase weight"
              >
                +
              </button>
            </div>
          </div>

          {/* Height Card */}
          <div className="flex-1 bg-purple-100 rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold text-purple-700 mb-4">Height</h3>
            <div className="flex items-center justify-center space-x-4">
              <button
                className="w-10 h-10 rounded-full bg-purple-500 text-white text-xl flex items-center justify-center hover:bg-purple-600"
                onClick={decrementHeight}
                aria-label="Decrease height"
              >
                -
              </button>
              <span className="text-lg font-medium">{height} cm</span>
              <button
                className="w-10 h-10 rounded-full bg-purple-500 text-white text-xl flex items-center justify-center hover:bg-purple-600"
                onClick={incrementHeight}
                aria-label="Increase height"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-lg font-medium">Your BMI: <span className="text-purple-600">{bmi}</span></p>
            <p className="text-lg font-medium">Rating: <span className="text-purple-600">{rating}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}
