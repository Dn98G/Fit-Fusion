import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Calculator from "./components/Calculator";
import WorkoutSelector from "./components/WorkoutSelector";
import SavedWorkouts from "./components/SavedWorkouts";

function App() {
  const [bmiRating, setBmiRating] = useState("");
  const [selectedIntensity, setSelectedIntensity] = useState("mild");
  const [workouts, setWorkouts] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch workouts");
        return res.json();
      })
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
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Calculator onRatingUpdate={handleRatingUpdate} />}
        />

        <Route
          path="/workouts"
          element={
            <div>
              <h3>Recommended for: {bmiRating || "Not set"}</h3>

              <label>Choose Intensity:</label>
              <select
                value={selectedIntensity}
                onChange={(e) => setSelectedIntensity(e.target.value)}
              >
                <option value="mild">Mild</option>
                <option value="medium">Medium</option>
                <option value="intense">Intense</option>
              </select>
              
              <WorkoutSelector
                workouts={filteredWorkouts}
                onSave={(workout) =>
                  setSavedWorkouts((prev) => [...prev, workout])
                }
              />
            </div>
          }
        />

        <Route
          path="/saved"
          element={
            <SavedWorkouts
              saved={savedWorkouts}
              setSaved={setSavedWorkouts}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
