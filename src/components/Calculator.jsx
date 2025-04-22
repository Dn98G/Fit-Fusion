import { useState } from "react";

export default function Calculator() {

  useState('') 


  fetch(
    "https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${}&height= ${}"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h2>BMI Calculator</h2>
      <h4>Enter your weight and height to get your current BMI</h4>
      <form>
        <input type="number" placeholder="Enter your height(cm)" name="height"/>
        <input type="number" placeholder="Enter your weight(kg)" name="weight"/>
        <button type="submit">GET BMI!</button>
      </form>
    </div>
  );
}
