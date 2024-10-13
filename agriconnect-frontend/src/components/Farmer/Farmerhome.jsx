import React from 'react'
import Farmerlayout from './Farmerlayout'

const Farmerhome = () => {
  return (
   <Farmerlayout>
    <header className='farmer-header'>
        <div className="overlay">
          <h2 className="title">Welcome, Farmer!!</h2>
          <p className="description">Thank you for being an essential part of the AgriConnect community. Continue utilizing our platform, sharing your experiences, and making informed choices to enhance your farming practices.</p>
          {/* <a href="#" className="btn">
            Read More
          </a> */}
        </div>
      </header>
   </Farmerlayout>
    
  )
}

export default Farmerhome