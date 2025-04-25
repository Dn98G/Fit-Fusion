import React from "react";

export default function SavedWorkouts({ saved, setSaved }) {
  const removeWorkout = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/savedWorkouts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete workout");
      }

      // Update local state after deletion
      const updatedSaved = saved.filter((workout) => workout.id !== id);
      setSaved(updatedSaved);
    } catch (err) {
      console.error("Error deleting workout:", err);
    }
  };

  return (
    <div>
      <h2>Saved Workouts</h2>

      {saved && saved.length > 0 ? (
        <ul>
          {saved.map((workout) => (
            <li key={workout.id}>
              <div>
                <strong>{workout.workout}</strong>: {workout.description}
              </div>
              <button
                className="button"
                onClick={() => removeWorkout(workout.id)}
              >
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
