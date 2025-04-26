import React, { useState } from "react";

export default function WorkoutSelector({ workouts, onSave }) {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  // Handles selecting a workout
  const handleSelect = (workout) => {
    setSelectedWorkout(workout);
  };

  // Handles saving the selected workout to the saved list
  const handleSave = () => {
    if (selectedWorkout && onSave) {
      onSave(selectedWorkout);
      setSelectedWorkout(null); // Clear selected workout after saving
    }
  };

  return (
    <div>
      <h2>Recommended Workouts</h2>
      <ul>
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <li key={workout.id} className="workout-item">
              <h4>{workout.workout}</h4>
              <p>Focus: {workout.muscle_focus}</p>
              <p>{workout.brief_description || workout.description}</p>
              {workout.image_url && (
                <img src={workout.image_url} alt={workout.workout} className="workout-image" />
              )}
              <button onClick={() => handleSelect(workout)} className="select-btn">
                Select workout
              </button>
              <button onClick={handleSave} className="save-btn">
                Save plan
              </button>
            </li>
          ))
        ) : (
          <p>No workouts available for the selected intensity.</p>
        )}
      </ul>

      {selectedWorkout && (
        <div className="selected-workout">
          <h3>Selected Workout</h3>
          <h4>{selectedWorkout.workout}</h4>
          <p>Focus: {selectedWorkout.muscle_focus}</p>
          <p>{selectedWorkout.brief_description}</p>
          {selectedWorkout.image_url && (
            <img
              src={selectedWorkout.image_url}
              alt={selectedWorkout.workout}
              className="selected-workout-image"
            />
          )}
        </div>
      )}
    </div>
  );
}
