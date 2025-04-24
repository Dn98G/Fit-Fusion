export default function SavedWorkouts({ saved }) {

  const buttonClicked = () => {
    removeWorkout()
   };

  const removeWorkout = () => {
    fetch("http://localhost:3002/savedworkouts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((workout) => removeWorkout(workout))
      .catch(err => console.error("Error loading saved workouts:", err));
   };

  return (
    <div>
      <h2>Saved Workouts</h2>
      {saved.length === 0 ? (
        <p>No workouts saved yet.</p>
      ) : (
        <ul>
          {saved.map((workout, index) => (
            <li key={index}>
              <strong>{workout.workout}</strong>: {workout.brief_description || workout.description}
              <button onClick={buttonClicked}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
