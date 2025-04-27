import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full max-w-md mx-auto text-center mt-8">
      <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden shadow-inner">
        <div
          className="bg-purple-600 h-full text-xs font-medium text-white text-center flex items-center justify-center transition-all duration-500"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
      <p className="mt-4 text-gray-700 font-semibold">{progress}% Progress</p>
    </div>
  );
};

export default ProgressBar;
