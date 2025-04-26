import React from "react";

const SavedWorkouts = ({ saved, setSaved }) => {
  const handleDelete = (id) => {
    setSaved(saved.filter((workout) => workout.id !== id));
  };

  return (
    <div className="saved-workouts">
      <h3>Your Saved Workouts:</h3>
      {saved.length === 0 ? (
        <p>No workouts saved yet.</p>
      ) : (
        saved.map((workout) => (
          <div key={workout.id} className="saved-workout-card">
            <h4>{workout.title}</h4>
            <p>{workout.description}</p>
            <button onClick={() => handleDelete(workout.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedWorkouts;
