import { useState } from "react";

export default function Calculator({ onRatingUpdate }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [rating, setRating] = useState("");

  const getBmiRating = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    const bmiRating = getBmiRating(calculatedBmi);

    setBmi(calculatedBmi);
    setRating(bmiRating);
    onRatingUpdate(bmiRating);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <div>
          <h4>Your BMI: {bmi.toFixed(2)}</h4>
          <h3>Rating: {rating}</h3>
        </div>
      )}
    </div>
  );
}
