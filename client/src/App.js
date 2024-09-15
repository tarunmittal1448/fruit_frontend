import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import FAQsPage from './Pages/FAQsPage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
