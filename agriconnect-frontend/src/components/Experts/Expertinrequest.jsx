import React from 'react';
import Expertlayout from './Expertlayout';
import './Expertlayout.css';
import { useNavigate } from 'react-router-dom';
import './Expertinrequest.css';


//background image for this expert will come from Adminlayout.css expert-header, dont ask why :)
const Expertinrequest = () => {
    const navigate =useNavigate();

    const handleWeatherClick= () =>{
        navigate('/expertweather')
    }

  return (
    <Expertlayout>
      <header className="expert-header">
        <div className="overlay">
          {/* <h2 className="title">Expert Incoming requets</h2> */}
          <button onClick={handleWeatherClick}>Check Weather</button>
        </div>
      </header>
    </Expertlayout>
  );
};

export default Expertinrequest;
