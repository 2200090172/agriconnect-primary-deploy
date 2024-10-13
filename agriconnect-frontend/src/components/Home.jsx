

import React, { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import "./Home.css";

// import backgroundImage from '../assets/images/background.jpg'; 


const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  
  return (
    
    <div className={`container ${isActive ? "active" : ""}`}
    // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">
            Agri<span>Connect</span>
          </h3>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="main">
          <header className="home-header">
            <div className="overlay">
              <h2 className="title">Empowering Farmers for a Sustainable Future</h2>
              <p className="description">
                “Together, we can cultivate success and resilience through knowledge, innovation, and community.”
              </p>
              {/* <a href="#" className="btn">
                Read More
              </a> */}
            </div>
          </header>
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
      <div className="links">
        <ul>
          <li >
            <a href="/" style={{ "--i": "0.05s" }}>
              Home
            </a>
          </li>
          {/* <li>
            <a href="#" style={{ "--i": "0.1s" }}>
              About
            </a>
          </li> */}
          <li>
            <Link to="/adminlogin" style={{ "--i": "0.15s" }}>
              Sign In as Admin
            </Link>
          </li>
          <li>
            <Link to="/farmerlogin" style={{ "--i": "0.2s" }}>
              Sign In as Farmer
            </Link>
          </li>
          <li>
            <Link to="/publiclogin" style={{ "--i": "0.25s" }}>
              Sign In as Public
            </Link>
          </li>
          <li>
            <Link to="/expertlogin" style={{ "--i": "0.25s" }}>
              Sign In as Expert
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
    
  );
};

export default Home;