import React from "react";
import ProgressBar from './ProgressBar'; // Progress Bar Component
import QuoteCarousel from './QuoteCarousel'; // Motivational Quotes Carousel

const Home = ({ handleProgress, progress }) => {
  return (
    <div className="home">
      <div className="intro-section">
        <div className="intro-content">
          <h1>Welcome to Fit Fusion!</h1>
          <p>Your journey towards a healthier you starts here. Stay motivated, track your goals, and achieve success!</p>
        </div>
      </div>

      <div className="importance-section">
        <h2>Why Fitness?</h2>
        <p>Fitness helps improve overall health, boosts energy, and enhances mental well-being.</p>
      </div>

      <div className="goal-section">
        <h2>Your Fitness Goals</h2>
        <p>Set clear goals and stay on track with regular workouts. Every step counts!</p>
        <button className="start-goal-button" onClick={handleProgress}>Start Goal</button>
      </div>

      <div className="progress-bar-container">
        <ProgressBar progress={progress} />
      </div>

      <QuoteCarousel />
    </div>
  );
};

export default Home;
