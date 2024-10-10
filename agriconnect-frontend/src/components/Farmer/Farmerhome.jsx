import React from 'react'
import Farmerlayout from './Farmerlayout'

const Farmerhome = () => {
  return (
   <Farmerlayout>
    <header className='farmer-header'>
        <div className="overlay">
          <h2 className="title">Welcome, Farmer!!</h2>
          <p className="description">Thank you for being a vital part of the AgriConnect community. Continue managing resources, guiding users, and driving impactful decisions to support farming excellence</p>
          {/* <a href="#" className="btn">
            Read More
          </a> */}
        </div>
      </header>
   </Farmerlayout>
    
  )
}

export default Farmerhome