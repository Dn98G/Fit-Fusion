import React, { useState } from "react";
import SavedWorkouts from "./SavedWorkouts";

export default function WorkoutSelector({ workouts }) {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const buttonClick = (workout) => { //to be attached to the button
    setSelectedWorkout(workout);
  };
  
  const handleSave = () => {   //to be attached to the button
    if (selectedWorkout) {
      SavedWorkouts(selectedWorkout);
      setSelectedWorkout(null); //clears the selection after saving
    }
   };

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
            <button onClick={buttonClick}>Select workout</button>
            <button onClick={handleSave}>Save plan</button>
            </li>
          ))
        ) : (
          <p>No workouts available for the selected intensity.</p>
        )}
      </ul>

      {selectedWorkout && (
        <div>
          <h3>Selected Workouts</h3>
          <h4>{selectedWorkout.workout}</h4>
          <p><strong>Focus:</strong>{selectedWorkout.muscle_focus}</p>
          <p>{selectedWorkout.brief_description}</p>
          <img src={selectedWorkout.image_url} alt={selectedWorkout.workout} style={styles.image} />
        </div>
      )}
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
