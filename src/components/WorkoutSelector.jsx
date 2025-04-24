import React from "react";

export default function WorkoutSelector({ workouts }) {
  return (
    <div>
      <h2>Recommended Workouts</h2>
      <ul>
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <li key={workout.id} style={styles.workoutItem}>
              <h4>{workout.workout}</h4>
              <p><strong>Focus:</strong> {workout.muscle_focus}</p>
              <p>{workout.brief_description || workout.description}</p>
              <img
                src={workout.image_url}
                alt={workout.workout}
                style={styles.image}
              />
            </li>
          ))
        ) : (
          <p>No workouts available for the selected intensity.</p>
        )}
      </ul>
    </div>
  );
}

const styles = {
  workoutItem: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "200px",
    height: "auto",
    borderRadius: "8px",
    marginTop: "10px",
  },
};
