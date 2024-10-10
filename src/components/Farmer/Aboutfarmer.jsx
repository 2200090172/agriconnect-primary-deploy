

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Farmerlayout.css";
// import backgroundImage from '../assets/images/background.jpg'; 

const Farmerlayout = ({ children }) => {
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
          {children} {/* This will render the child component */}
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="/farmerhome" style={{ "--i": "0.25s" }}>
                My Home
              </Link>
            </li>
            <li>
              <Link to="/sendrequest" style={{ "--i": "0.15s" }}>
                Send Suggestion Request
              </Link>
            </li>
            <li>
              <Link to="/responses" style={{ "--i": "0.25s" }}>
                My Responses
              </Link>
            </li>
            <li>
              <Link to="/connectwithsectors" style={{ "--i": "0.2s" }}>
                Connect with Sectors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Farmerlayout;
