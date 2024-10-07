// import React from "react";
// import { Link } from "react-router-dom";
// import "./Adminlayout.css";

// const Adminlayout = ({ children }) => {
//   return (
//     <div className="container">
//       <div className="navbar">
//         <div className="menu">
//           <h3 className="logo">
//             Agri<span>Connect</span>
//           </h3>
//           <div className="hamburger-menu">
//             <div className="bar"></div>
//           </div>
//         </div>
//       </div>

//       <div className="links">
//         <ul>
//           <li className="active">
//             <Link to="/" style={{ "--i": "0.05s" }}>Home</Link>
//           </li>
//           <li>
//             <Link to="/adminsignin" style={{ "--i": "0.15s" }}>Sign In as Admin</Link>
//           </li>
//           <li>
//             <Link to="/farmersignin" style={{ "--i": "0.2s" }}>Sign In as Farmer</Link>
//           </li>
//           <li>
//             <Link to="/publicsignin" style={{ "--i": "0.25s" }}>Sign In as Public</Link>
//           </li>
//           <li>
//             <Link to="/expertsignin" style={{ "--i": "0.25s" }}>Sign In as Expert</Link>
//           </li>
//         </ul>
//       </div>

//       {/* This renders the main content of the page */}
//       <div className="content">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Adminlayout;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Adminlayout.css";

const Adminlayout = ({ children }) => {
  const [isActive, setIsActive] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle the active state
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

      <div className="links">
        <ul>
          <li className="active">
            <Link to="/" style={{ "--i": "0.05s" }}>Home</Link>
          </li>
          <li>
            <Link to="/adminsignin" style={{ "--i": "0.15s" }}>Sign In as Admin</Link>
          </li>
          <li>
            <Link to="/farmersignin" style={{ "--i": "0.2s" }}>Sign In as Farmer</Link>
          </li>
          <li>
            <Link to="/publicsignin" style={{ "--i": "0.25s" }}>Sign In as Public</Link>
          </li>
          <li>
            <Link to="/expertsignin" style={{ "--i": "0.25s" }}>Sign In as Expert</Link>
          </li>
        </ul>
      </div>

      {/* This renders the main content of the page */}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Adminlayout;
