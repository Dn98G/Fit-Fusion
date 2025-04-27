import React from "react";
import ProgressBar from "./ProgressBar";
import QuoteCarousel from "./QuoteCarousel";
import { FaArrowDown } from "react-icons/fa";

const Home = ({ handleProgress, progress }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen py-10 px-4">
      {/* Intro Section */}
      <section className="text-center mb-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">Welcome to Fit Fusion!</h1>
          <p className="text-lg text-gray-700">
            Your journey towards a healthier you starts here. Stay motivated, track your goals, and achieve success!
          </p>
        </div>
      </section>

      {/* Importance Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Why Fitness?</h2>
        <p className="text-md text-gray-700 max-w-xl mx-auto">
          Fitness helps improve overall health, boosts energy, and enhances mental well-being.
        </p>
      </section>

      {/* Goal Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Your Fitness Goals</h2>
        <p className="text-md text-gray-700 max-w-xl mx-auto mb-6">
          Set clear goals and stay on track with regular workouts. Every step counts!
        </p>
        <button
          className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition"
          onClick={handleProgress}
          aria-label="Start your fitness goal"
        >
          Start Goal
        </button>
      </section>

      {/* Progress Bar */}
      <section className="w-full max-w-2xl mb-12">
        <ProgressBar progress={progress} />
      </section>

      {/* Quote Carousel */}
      <section className="w-full max-w-2xl mb-12">
        <QuoteCarousel />
      </section>

      {/* Arrow Down */}
      <div className="animate-bounce mt-8" aria-label="Scroll down for more">
        <FaArrowDown size={40} className="text-purple-600" />
      </div>
    </div>
  );
};

export default Home;
