// WorkoutCard.jsx

import React from 'react';

const WorkoutCard = ({ workout, onSave }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img
        className="w-full h-64 object-cover"
        src={workout.image_url || "https://via.placeholder.com/300"} 
        alt={workout.workout}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
          {workout.workout}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {workout.description}
        </p>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{workout.intensity}</span>
          <span>{workout.focus_area}</span>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => onSave(workout)}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Workout
        </button>
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-800 text-sm"
        >
          Full Details
        </a>
      </div>
    </div>
  );
};

export default WorkoutCard;
