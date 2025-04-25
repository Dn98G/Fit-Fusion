import React from "react";

export default function SavedWorkouts({ saved, setSaved }) {
  const removeWorkout = (id) => {
    fetch(`http://localhost:3001/sorkouts.json/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete workout");
        setSaved(saved.filter((workout) => workout.id !== id));
      })
      .catch((err) => console.error("Error deleting workout:", err));
  };
    
  return (
    <div>
      <h2>Saved Workouts</h2>

      {saved && saved.length > 0 ? (
        <ul>
          {saved.map((workout) => (
            <li key={workout.id}>
              <div>
                <strong>{workout.workout}</strong>:{" "}
                {workout.brief_description || workout.description}
              </div>
              <button onClick={() => removeWorkout(workout.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No workouts saved yet.</p>
      )}
    </div>
  );
}
