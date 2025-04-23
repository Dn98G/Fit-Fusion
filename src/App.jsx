import { useState } from "react";
import Calculator from "./components/Calculator";
import WorkoutSelector from "./components/WorkoutSelector";
import SavedWorkouts from "./components/SavedWorkouts";

export default function App() {
  const [bmiRating, setBmiRating] = useState("");
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const handleBmiRating = (rating) => setBmiRating(rating);

  const handleSaveWorkout = (workout) => {
    setSavedWorkouts((prev) => [...prev, workout]);
  };

  return (
    <div>
      <h1>Fit Fusion App</h1>
      <Calculator onRatingUpdate={handleBmiRating} />
      <WorkoutSelector rating={bmiRating} onSaveWorkout={handleSaveWorkout} />
      <SavedWorkouts saved={savedWorkouts} />
    </div>
  );
}
