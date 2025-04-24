export default function SavedWorkouts({ saved }) {
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
