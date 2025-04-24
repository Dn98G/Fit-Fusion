import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";
import WorkoutSelector from "./components/WorkoutSelector";

function App() {
  const [bmiRating, setBmiRating] = useState("");
  const [selectedIntensity, setSelectedIntensity] = useState("mild");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  const handleRatingUpdate = (rating) => {
    setBmiRating(rating);
  };

  const filteredWorkouts = workouts.filter(
    (workout) => workout.intensity === selectedIntensity
  );

  return (
    <div>
      <h1>Fit Fusion</h1>
      <Calculator onRatingUpdate={handleRatingUpdate} />

      {bmiRating && (
        <>
          <h3>Recommended for: {bmiRating}</h3>

          <label>Choose Intensity:</label>
          <select
            value={selectedIntensity}
            onChange={(e) => setSelectedIntensity(e.target.value)}
          >
            <option value="mild">Mild</option>
            <option value="medium">Medium</option>
            <option value="intense">Intense</option>
          </select>

          <WorkoutSelector workouts={filteredWorkouts} />
        </>
      )}
    </div>
  );
}

export default App;
