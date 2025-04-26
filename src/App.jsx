import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Calculator from "./components/Calculator";
import WorkoutSelector from "./components/WorkoutSelector";
import SavedWorkouts from "./components/SavedWorkouts";
import Home from "./components/Home";  // Import Home Page Component
import  ProgressBar from './components/ProgressBar';  // Import ProgressBar
import QuoteCarousel from './components/QuoteCarousel';  // Import QuoteCarousel

function App() {
  const [bmiRating, setBmiRating] = useState(""); // Track BMI Rating
  const [selectedIntensity, setSelectedIntensity] = useState("mild"); // Track workout intensity
  const [workouts, setWorkouts] = useState([]); // Store fetched workouts data
  const [savedWorkouts, setSavedWorkouts] = useState([]); // Store saved workouts
  const [progress, setProgress] = useState(0); // Track progress bar state

  // Fetch workouts data from JSON server
  useEffect(() => {
    fetch("http://localhost:3001/workouts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch workouts");
        return res.json();
      })
      .then((data) => setWorkouts(data)) // Set workouts data
      .catch((error) => console.error("Error fetching workouts:", error));
  }, []);

  // Handle BMI Rating Update
  const handleRatingUpdate = (rating) => {
    setBmiRating(rating);
  };

  // Filter workouts based on selected intensity
  const filteredWorkouts = workouts.filter(
    (workout) => workout.intensity === selectedIntensity
  );

  // Handle progress bar increment
  const handleProgress = () => {
    setProgress(progress + 10); // Increment progress by 10
  };

  return (
    <div>
      <NavBar /> {/* Navigation Bar Component */}
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <Home
              handleProgress={handleProgress} // Pass progress handler to Home
              progress={progress} // Pass progress state to Home
            />
          }
        />

        {/* Workouts Route */}
        <Route
          path="/workouts"
          element={
            <div>
              <h3>Recommended for: {bmiRating || "Not set"}</h3> {/* Show BMI Rating */}
              
              <label>Choose Intensity:</label>
              <select
                value={selectedIntensity}
                onChange={(e) => setSelectedIntensity(e.target.value)} // Update selected intensity
              >
                <option value="mild">Mild</option>
                <option value="medium">Medium</option>
                <option value="intense">Intense</option>
              </select>
              
              {/* WorkoutSelector component for displaying filtered workouts */}
              <WorkoutSelector
                workouts={filteredWorkouts}
                onSave={(workout) =>
                  setSavedWorkouts((prev) => [...prev, workout]) // Save selected workout
                }
              />
            </div>
          }
        />

        {/* Saved Workouts Route */}
        <Route
          path="/saved"
          element={
            <SavedWorkouts
              saved={savedWorkouts} // Pass saved workouts to SavedWorkouts component
              setSaved={setSavedWorkouts} // Pass setSaved function to update saved workouts
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
