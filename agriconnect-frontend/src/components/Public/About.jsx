// import React, { useState } from 'react';
// import './About.css'; // Add your custom CSS here
// import { Link } from 'react-router-dom'; // For routing to different sections

// const About = () => {
//   // Mocked login status (In real cases, this would come from context or authentication logic)
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div className="about-page">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">AGRI<span>CONNECT</span></div>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           {isLoggedIn ? (
//             <>
//               <li><Link to="/dashboard">Dashboard</Link></li>
//               <li><Link to="/logout">Logout</Link></li>
//             </>
//           ) : (
//             <>
//               <li><Link to="/PublicLogin">Login</Link></li>
//               <li><Link to="/PublicSignin">Sign Up</Link></li>
//             </>
//           )}
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-content">
//           {isLoggedIn ? (
//             <>
//               <h1>Welcome Back, Guys!</h1>
//               <p>
//                 "Thank you for being part of the AgriConnect community. Continue exploring resources, discussions, and tools to enhance your farming practices."
//               </p>
//               <Link to="/dashboard" className="hero-btn">Explore Dashboard</Link>
//             </>
//           ) : (
//             <>
//               <h1>Welcome  Guys!</h1>
//               <p>
//                 "Thank you for being part of the AgriConnect community. Continue exploring resources, discussions, and tools to enhance your farming practices."
//               </p>
//               <Link to="/learn-more" className="hero-btn">Read More</Link>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Dashboard Section (only for logged-in users) */}
//       {isLoggedIn && (
//         <div className="dashboard-container">
//           <h2>Explore the Dashboard</h2>
//           <div className="dashboard-links">
//             <Link to="/farming-resources" className="dashboard-item">
//               Importance of Farming
//             </Link>
//             <Link to="/learn-farming" className="dashboard-item">
//               Learn About Farming
//             </Link>
//             <Link to="/discussions" className="dashboard-item">
//               Join Discussions
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;
