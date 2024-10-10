import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./Farmerlayout.css";

const Farmerlayout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
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
          {children}
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>


      <div className="links">
        <ul>
          <li>
            <NavLink to="/farmerhome" activeClassName="active" style={{ "--i": "0.25s" }}>
              My Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/sendrequest" activeClassName="active" style={{ "--i": "0.15s" }}>
              Send Suggestion Request
            </NavLink>
          </li>
          <li>
            <NavLink to="/responses" activeClassName="active" style={{ "--i": "0.25s" }}>
              My Responses
            </NavLink>
          </li>
          <li>
            <NavLink to="/connectwithsectors" activeClassName="active" style={{ "--i": "0.2s" }}>
              Connect with Sectors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Farmerlayout;
