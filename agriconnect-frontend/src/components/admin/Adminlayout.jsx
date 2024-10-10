// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import "./Adminlayout.css";
// import backgroundImage from '../../assets/images/admin-home.jpg'; // Import the image

// const AdminLayout = ({ children }) => {
//   const [isMenuActive, setIsMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuActive(!isMenuActive);
//   };

//   return (
   
//     <div className={`admin-container ${isMenuActive ? "menu-active" : ""}`}
//     style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="admin-navbar">
//         <div className="admin-menu">
//           <h3 className="admin-logo">
//             Agri<span>Connect</span>
//           </h3>
//           <div className="admin-hamburger-menu" onClick={toggleMenu}>
//             <div className="admin-bar"></div>
//           </div>
//         </div>
//       </div>
//       <div className="admin-main-container">
//         <div className="admin-main">
//           {children} {/* This will render the child component */}
//         </div>
//         <div className="admin-shadow one"></div>
//         <div className="admin-shadow two"></div>
//       </div>
//       <div className="admin-links">
//         <ul>
//           <li className="active">
//             <a href="/adminhome" style={{ "--i": "0.05s" }}>
//               Admin Home
//             </a>
//           </li>
//           <li>
//             <Link to="/addfarmer" style={{ "--i": "0.15s" }}>
//               Add Farmer
//             </Link>
//           </li>
//           <li>
//             <Link to="/viewallfarmers" style={{ "--i": "0.2s" }}>
//               View All Farmers
//             </Link>
//           </li>
//           <li>
//             <Link to="/addexpert" style={{ "--i": "0.25s" }}>
//               Add Expert
//             </Link>
//           </li>
//           <li>
//             <Link to="/viewallexperts" style={{ "--i": "0.25s" }}>
//               View All Experts
//             </Link>
//           </li>
//           <li>
//             <Link to="/addsector" style={{ "--i": "0.25s" }}>
//               Add Sector
//             </Link>
//           </li>
//           <li>
//             <Link to="/viewallsectors" style={{ "--i": "0.25s" }}>
//               View All Sectors
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
    
//   );
// };

// export default AdminLayout;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Adminlayout.css";
import backgroundImage from '../../assets/images/admin-home.jpg'; // Import the image

const AdminLayout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`}
        //  style={{ backgroundImage: `url(${backgroundImage})` }}
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
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="/adminhome" style={{ "--i": "0.05s" }}>
              Admin Home
            </a>
          </li>
          <li>
            <Link to="/addfarmer" style={{ "--i": "0.15s" }}>
              Add Farmer
            </Link>
          </li>
          <li>
            <Link to="/viewallfarmers" style={{ "--i": "0.2s" }}>
              View All Farmers
            </Link>
          </li>
          <li>
            <Link to="/addexpert" style={{ "--i": "0.25s" }}>
              Add Expert
            </Link>
          </li>
          <li>
            <Link to="/viewallexperts" style={{ "--i": "0.25s" }}>
              View All Experts
            </Link>
          </li>
          <li>
            <Link to="/addsector" style={{ "--i": "0.25s" }}>
              Add Sector
            </Link>
          </li>
          <li>
            <Link to="/viewallsectors" style={{ "--i": "0.25s" }}>
              View All Sectors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
