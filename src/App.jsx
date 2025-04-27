import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Calculator from "./components/Calculator";
import WorkoutSelector from "./components/WorkoutSelector";
import SavedWorkouts from "./components/SavedWorkouts";
import Home from "./components/Home";
import ProgressBar from "./components/ProgressBar";
import QuoteCarousel from "./components/QuoteCarousel";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleSaveWorkout = (workout) => {
    const alreadySaved = savedWorkouts.some((w) => w.id === workout.id);
    if (alreadySaved) {
      toast.info("Workout already saved!");
    } else {
      setSavedWorkouts((prev) => [...prev, workout]);
      toast.success("Workout saved successfully!");
    }
  };

  return (
    <div className="app-container bg-gray-50 min-h-screen flex flex-col">
      <NavBar />
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-page container mx-auto py-8 px-4">
              <Home handleProgress={handleProgress} progress={progress} />
              <ProgressBar progress={progress} />
              <QuoteCarousel />
            </div>
          }
        />

        <Route
          path="/calculator"
          element={<Calculator onRatingUpdate={handleRatingUpdate} />}
        />

        <Route
          path="/workouts"
          element={
            <div className="workout-selector-page container mx-auto py-8 px-4">
              <h3 className="text-xl font-semibold mb-4">
                Recommended for: {bmiRating || "Not set"}
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Choose Intensity:
                </label>
                <select
                  value={selectedIntensity}
                  onChange={(e) => setSelectedIntensity(e.target.value)}
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                >
                  <option value="mild">Mild</option>
                  <option value="medium">Medium</option>
                  <option value="intense">Intense</option>
                </select>
              </div>

              <WorkoutSelector
                workouts={filteredWorkouts}
                onSave={handleSaveWorkout}
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
