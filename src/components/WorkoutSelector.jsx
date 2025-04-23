import { useEffect, useState } from "react";

export default function WorkoutSelector({ rating, onSelectWorkout }) {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setWorkoutPlans(data))
      .catch((err) => console.error("Error fetching workouts:", err));
  }, []);

  useEffect(() => {
    if (rating) {
      const filtered = workoutPlans.filter(
        (workout) => workout.category.toLowerCase() === rating.toLowerCase()
      );
      setFilteredWorkouts(filtered);
    }
  }, [rating, workoutPlans]);

  return (
    <div>
      <h2>Recommended Workouts</h2>
      {rating && filteredWorkouts.length === 0 && (
        <p>No workouts available for the "{rating}" category.</p>
      )}

      {filteredWorkouts.length > 0 && (
        <ul>
          {filteredWorkouts.map((workout, index) => (
            <li key={index}>
              <strong>{workout.name}</strong>: {workout.description}
              <br />
              <button onClick={() => onSelectWorkout(workout)}>Save Workout</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
