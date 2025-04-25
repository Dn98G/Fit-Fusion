import React, { useState } from "react";


export default function WorkoutSelector({ workouts, onSave }) {
  const [selectedWorkout, setSelectedWorkout] = useState(null)

  const handleSelect = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleSave = () => {
    if (selectedWorkout && onSave) {
      onSave(selectedWorkout);
      setSelectedWorkout(null);
    }
  };

  return (
    <div>
      <h2>Recommended Workouts</h2>
      <ul>
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <li key={workout.id}>
              <h4>{workout.workout}</h4>
              <p>Focus: {workout.muscle_focus}</p>
              <p>{workout.description}</p>
              {workout.image_url && (
                <img src={workout.image_url} alt={workout.workout} />
              )}
              <button onClick={() => handleSelect(workout)}>
                Select workout
              </button>
              <button onClick={handleSave}>Save plan</button>
            </li>
          ))
        ) : (
          <p>No workouts available for the selected intensity.</p>
        )}
      </ul>

      {selectedWorkout && (
        <div>
          <h3>Selected Workout</h3>
          <h4>{selectedWorkout.workout}</h4>
          <p>Focus: {selectedWorkout.muscle_focus}</p>
          <p>{selectedWorkout.brief_description}</p>
          {selectedWorkout.image_url && (
            <img
              src={selectedWorkout.image_url}
              alt={selectedWorkout.workout}
            />
          )}
        </div>
      )}
    </div>
  );
}

