import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Calculator from "./components/Calculator";
import WorkoutSelector from "./components/WorkoutSelector";
import SavedWorkouts from "./components/SavedWorkouts";
import Home from "./components/Home";
import ProgressBar from "./components/ProgressBar";
import QuoteCarousel from "./components/QuoteCarousel";

function App() {
  const [bmiRating, setBmiRating] = useState(""); 
  const [selectedIntensity, setSelectedIntensity] = useState("mild"); 
  const [workouts, setWorkouts] = useState([]); 
  const [savedWorkouts, setSavedWorkouts] = useState([]); 
  const [progress, setProgress] = useState(0); 

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

  const handleProgress = () => {
    setProgress(progress + 10);
  };

  return (
    <div>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home handleProgress={handleProgress} progress={progress} />
              <ProgressBar progress={progress} />
              <QuoteCarousel />
            </div>
          }
        />

        <Route
          path="/calculator"
          element={
            <Calculator onRatingUpdate={handleRatingUpdate} />
          }
        />

        <Route
          path="/workouts"
          element={
            <div className="workout-page">
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
