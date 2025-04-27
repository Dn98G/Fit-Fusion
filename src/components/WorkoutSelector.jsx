import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkoutCard = ({ workout, onSave }) => {
  const handleSave = () => {
    onSave(workout);
    toast.success("Workout saved successfully!");
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img
        src={workout.image_url || "/images/placeholder.jpg"}
        alt={workout.workout}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.src = "/images/placeholder.jpg";
        }}
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
          onClick={handleSave}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Workout
        </button>
        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm">
          Full Details
        </a>
      </div>
    </div>
  );
};

const WorkoutSelector = ({ workouts, onSave }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between mb-8">
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-800 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Home
        </Link>
        <Link
          to="/saved"
          className="text-indigo-600 hover:text-indigo-800 flex items-center"
        >
          Saved <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} onSave={onSave} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutSelector;
