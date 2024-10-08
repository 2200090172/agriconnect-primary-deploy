import React, { useState } from 'react';
import './Expertdashboard.css'; // Custom CSS for Expert Dashboard
import { Link } from 'react-router-dom';

const ExpertDashboard = () => {
  // Mocked login status (In real cases, this would come from authentication or context logic)
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the expert is logged in for the dashboard

  return (
    <div className="expert-dashboard-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AGRI<span>CONNECT</span></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/expert-dashboard">Expert Dashboard</Link></li>
              <li><Link to="/Home">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/ExpertLogin">Login</Link></li>
              <li><Link to="/Expertsignup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome Back, Experts!</h1>
          <p>
            "Thank you for being part of AgriConnect's expert community. Your knowledge and guidance can help farmers enhance their agricultural practices and make a real impact."
          </p>
          <Link to="/create-content" className="hero-btn">Create Educational Content</Link>
        </div>
      </div>

      {/* Expert Dashboard Section */}
      <div className="expert-dashboard-container">
        <h2>Explore the Expert Dashboard</h2>
        <div className="dashboard-links">
          <Link to="/create-content" className="dashboard-item">
            Create Educational Content
          </Link>
          <Link to="/provide-guidance" className="dashboard-item">
            Provide Guidance to Farmers
          </Link>
          <Link to="/expert-discussions" className="dashboard-item">
            Join Expert Discussions
          </Link>
          <Link to="/review-farmer-progress" className="dashboard-item">
            Review Farmer Progress
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertDashboard;
