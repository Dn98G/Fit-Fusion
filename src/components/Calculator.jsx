import { useState } from "react";

export default function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "8ab63daca0msh9c815df56893c6bp1631b2jsn4cd4eed15c78",
        },
      }
    )
      .then((res) => res.json())
      .then((bmi) => {
        setBmi(bmi);
        setRating(getBmiRating(bmi));
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const getBmiRating = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    if (bmi >= 30.0) return "Obese";
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <h4>Enter your weight and height to get your current BMI</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter your height(cm)"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your weight(kg)"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">GET BMI!</button>
      </form>

      <div>
        <h4>Your BMI:{bmi.toFixed(2)}</h4>
        <h3>Rating:{rating }</h3>
      </div>
    </div>
  );
}
