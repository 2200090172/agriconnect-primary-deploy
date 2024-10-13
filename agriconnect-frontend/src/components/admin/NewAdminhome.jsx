// Adminhome.js
import React from "react";
import Adminlayout from "./Adminlayout";

const Adminhome = () => {
  return (
    <Adminlayout>
      <header className="header">
        <div className="overlay">
          <h2 className="title">Welcome, Admin!!</h2>
          <p className="description">Thank you for being a vital part of the AgriConnect community. Continue managing resources, guiding users, and driving impactful decisions to support farming excellence</p>
          {/* <a href="#" className="btn">
            Read More
          </a> */}
        </div>
      </header>
    </Adminlayout>
  );
};

export default Adminhome;
