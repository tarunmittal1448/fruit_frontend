import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to FruitAI</h1>
      <div className="services">
        <Link to="/chat">Chat</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default HomePage;
