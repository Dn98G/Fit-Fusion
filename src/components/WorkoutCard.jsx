import React from "react";
import "./WorkoutCard.css"; 

function WorkoutCard({ workout, onSelect }) {
  return (
    <div className="workout-card">
      <img
        src={workout.image}
        alt={workout.name}
        className="workout-image"
      />
      <div className="workout-details">
        <h3 className="workout-title">{workout.name}</h3>
        <p className="workout-focus"><strong>Focus:</strong> {workout.focus}</p>
        <p className="workout-description">{workout.description}</p>
        <button
          className="select-button"
          onClick={() => onSelect(workout)}
        >
          Save Workout
        </button>
      </div>
    </div>
  );
}

export default WorkoutCard;
