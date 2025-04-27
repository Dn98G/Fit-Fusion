import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SavedWorkouts = ({ saved, setSaved }) => {
  const handleRemove = (id) => {
    const updated = saved.filter((workout) => workout.id !== id);
    setSaved(updated);
  };

  return (
    <div className="saved-workouts-container p-6">
      {/* Navigation back */}
      <div className="navigation-arrows mb-4">
        <Link
          to="/workouts"
          className="text-blue-500 hover:text-blue-700 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Workouts
        </Link>
      </div>

      {/* Title */}
      <h2 className="saved-title text-3xl font-semibold text-center mb-6">
        Saved Workouts
      </h2>

      {/* Saved Workouts */}
      <div className="workout-selector grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saved.length === 0 ? (
          <p className="empty-message text-center text-xl text-gray-500">
            No workouts saved yet! Start saving 💪
          </p>
        ) : (
          saved.map((workout) => (
            <div key={workout.id} className="workout-card bg-white p-4 rounded-lg shadow-md">
              <img
                src={workout.imageUrl}
                alt={workout.name}
                className="workout-image w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="workout-details">
                <h3 className="text-xl font-semibold">{workout.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{workout.description}</p>
                <button
                  className="remove-button mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                  onClick={() => handleRemove(workout.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <footer className="footer text-center mt-8 text-gray-500 text-sm">
        <p>🏋️ Keep pushing your limits! Feedback? Drop us a message 🚀</p>
      </footer>
    </div>
  );
};

export default SavedWorkouts;
