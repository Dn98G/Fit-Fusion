import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SavedWorkouts = ({ saved, setSaved }) => {
  const handleRemove = (id) => {
    const updated = saved.filter(workout => workout.id !== id);
    setSaved(updated);
  };

  return (
    <div>
      <div className="navigation-arrows">
        <Link to="/workouts"><FaArrowLeft /> Back to Workouts</Link>
      </div>

      <h2>Saved Workouts</h2>

      <div className="workout-selector">
        {saved.length === 0 ? (
          <p>No workouts saved yet! Start saving 💪</p>
        ) : (
          saved.map((workout) => (
            <div key={workout.id} className="workout-card">
              <img src={workout.imageUrl} alt={workout.name} className="workout-image" />
              <div className="workout-details">
                <h3>{workout.name}</h3>
                <p>{workout.description}</p>
                <button onClick={() => handleRemove(workout.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>🏋️ Keep pushing your limits! Feedback? Drop us a message 🚀</p>
      </footer>
    </div>
  );
};

export default SavedWorkouts;
