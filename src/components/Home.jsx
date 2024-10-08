
// import React, { useState } from "react";
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import "./Home.css";
// import Adminsignin from "./signin/Adminsignin";
// import Farmersignin from "./signin/Farmersignin";
// import Publicsignin from "./signin/Publicsignin";
// import Expertsigin from "./signin/Expertsignin";

// const Home = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <BrowserRouter>
//       <div className={`container ${isActive ? "active" : ""}`}>
//         <div className="navbar">
//           <div className="menu">
//             <h3 className="logo">
//               Agri<span>Connect</span>
//             </h3>
//             <div className="hamburger-menu" onClick={toggleMenu}>
//               <div className="bar"></div>
//             </div>
//           </div>
//         </div>
//         <div className="main-container">
//           <div className="main">
//             <header>
//               <div className="overlay">
//                 <h2 className="title">Empowering Farmers for a Sustainable Future</h2>
//                 <p className="description">
//                   “Together, we can cultivate success and resilience through knowledge, innovation, and community.”
//                 </p>
//                 <a href="#" className="btn">
//                   Read More
//                 </a>
//               </div>
//             </header>
//           </div>
//           <div className="shadow one"></div>
//           <div className="shadow two"></div>
//         </div>
//         <div className="links">
//           <ul>
//             <li className="active">
//               <a href="#" style={{ "--i": "0.05s" }}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" style={{ "--i": "0.1s" }}>
//                 About
//               </a>
//             </li>
//             <li>
//               <Link to="/adminsignin" style={{ "--i": "0.15s" }}>
//                 Sign In as Admin
//               </Link>
//             </li>
//             <li>
//               <Link to="/farmersignin" style={{ "--i": "0.2s" }}>
//                 Sign In as Farmer
//               </Link>
//             </li>
//             <li>
//               <Link to="/publicsignin" style={{ "--i": "0.25s" }}>
//                 Sign In as Public
//               </Link>
//             </li>
//             <li>
//               <Link to="/expertsigin" style={{ "--i": "0.25s" }}>
//                 Sign In as Expert
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <Routes>
//         <Route path="/adminsignin" element={<Adminsignin />} />
//         <Route path="/farmersignin" element={<Farmersignin />} />
//         <Route path="/publicsignin" element={<Publicsignin />} />
//         <Route path="/expertsigin" element={<Expertsigin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Home;


import React, { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import "./Home.css";
import Adminsignin from "./signin/Adminsignin";
import Farmersignin from "./signin/Farmersignin";
import Publicsignin from "./signin/Publicsignin";
import Expertsigin from "./signin/Expertsignin";
import Landingpage from "./signin/Landingpage";

const Home = () => {
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
          <header>
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
          <li className="active">
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
            <Link to="/adminsignin" style={{ "--i": "0.15s" }}>
              Sign In as Admin
            </Link>
          </li>
          <li>
            <Link to="/farmersignin" style={{ "--i": "0.2s" }}>
              Sign In as Farmer
            </Link>
          </li>
          <li>
            <Link to="/publicsignin" style={{ "--i": "0.25s" }}>
              Sign In as Public
            </Link>
          </li>
          <li>
            <Link to="/expertsignin" style={{ "--i": "0.25s" }}>
              Sign In as Expert
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Home;