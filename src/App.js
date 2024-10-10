import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Adminsignin from './components/signin/Adminsignin.jsx';
import Farmersignin from './components/signin/Farmersignin.jsx';
import Publicsignin from './components/signin/Publicsignin.jsx';
import Expertsignin from './components/signin/Expertsignin.jsx';
// import Adminhome from './components/admin/Adminhome.jsx';
import Adminhome from './components/admin/NewAdminhome.jsx';
import Addfarmer from './components/admin/Addfarmer.jsx';
import Addexpert from './components/admin/Addexpert.jsx';
import AddSector from './components/admin/Addsector.jsx';
import Viewallfarmers from './components/admin/Viewallfarmers.jsx';
import ViewallExperts from './components/admin/Viewallexperts.jsx';
import Viewallsectors from './components/admin/Viewallsectors.jsx';
import About from './components/Public/About.jsx'; 
import FarmerLogin from './components/Farmer/Farmerlogin.jsx'; 
import Aboutfarmer from './components/Farmer/Aboutfarmer.jsx'; 
import ExpertsLogin from './components/Experts/Expertslogin.jsx'; 
import Expertdashboard from './components/Experts/Expertdashboard.jsx'; 
import PublicLogin from './components/Public/PublicLogin.jsx'; 
import Farmerhome from './components/Farmer/Farmerhome.jsx';
import Experthome from './components/Experts/Experthome.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminsignin" element={<Adminhome />} />
        <Route path="/farmersignin" element={<Farmersignin />} />
        <Route path="/publicsignin" element={<Publicsignin />} />
        <Route path="/expertsignin" element={<Expertsignin />} />
        <Route path="/adminhome" element={<Adminhome />} />
        <Route path='/addfarmer' element={<Addfarmer />} />
        <Route path='/addexpert' element={<Addexpert />} />
        <Route path='/addsector' element={<AddSector />} />
        <Route path='/viewallfarmers' element={<Viewallfarmers />} />
        <Route path='/viewallexperts' element={<ViewallExperts />} />
        <Route path='/viewallsectors' element={<Viewallsectors />} />
        {/* <Route path="/About" element={<About/>}/>  */}
        <Route path="/farmerlogin" element={<FarmerLogin/>}/> 
       <Route path="/aboutfarmer" element={<Aboutfarmer/>}/> 
       <Route path="/expertlogin" element={<ExpertsLogin/>}/> 
       <Route path="/expertdashboard"element={<Expertdashboard/>}/> 
       <Route path="/publiclogin" element={<PublicLogin/>}/> 
       <Route path="/farmerhome" element={<Farmerhome />}/> 
       <Route path="/experthome" element={<Experthome />}/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
