import React from 'react';
import Expertlayout from './Expertlayout';
import './Expertlayout.css';
// import './Experthome.css';


//background image for this expert will come from Adminlayout.css expert-header, dont ask why :)
const Experthome = () => {
  return (
    <Expertlayout>
      <header className="expert-header">
        <div className="overlay">
          <h2 className="title">Welcome, Expert!!</h2>
          <p className="description">
            Thank you for being a vital part of the AgriConnect community. Continue managing resources, guiding users, and driving impactful decisions to support farming excellence.
          </p>
        </div>
      </header>
    </Expertlayout>
  );
};

export default Experthome;
