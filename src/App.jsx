import React, { useState } from "react";
import Calculator from "./components/Calculator";
import SavedWorkouts from "./components/SavedWorkouts";

export default function App() {
  const [workouts, setWorkouts] = useState([]);

  const saveWorkout = (workoutData) => {
    setWorkouts(prev => [...prev, workoutData]);
  };

  return (
    <div>
      <h1>Fit Fusion App</h1>
      <Calculator onSaveWorkout={saveWorkout} />
      <SavedWorkouts workouts={workouts} />
    </div>
  );
}
