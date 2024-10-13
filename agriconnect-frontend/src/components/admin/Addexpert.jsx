import React, { useState } from 'react';
import Adminlayout from './Adminlayout';
import './Addexpert.css'; // Include your form styling here

const Addexpert = () => {
  const [expert, setExpert] = useState({
    fullname: '',
    email: '',
    phone: '',
    experience: '',
    fieldofexpertise: '',
    qualification: '',
    languagesSpoken: '',
    certifications: '', // New field for certifications
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpert({
      ...expert,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Expert added successfully");
    console.log(expert);
    setExpert({
      fullname: '',
      email: '',
      phone: '',
      experience: '',
      fieldofexpertise: '',
      qualification: '',
      languagesSpoken: '',
      certifications: '', // Clear the certifications field on submit
    });
  };

  return (
    <Adminlayout>
      <div className="addexpert-container">
        <div className="addexpert-overlay">
          <form className="addexpert-form" onSubmit={handleSubmit}>
            <h2>Expert Sign-up</h2>
            <div>
              <label>Full Name:</label>
              <input type="text" name="fullname" value={expert.fullname} onChange={handleChange} required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={expert.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Phone:</label>
              <input type="tel" name="phone" value={expert.phone} onChange={handleChange} required />
            </div>
            <div>
              <label>Experience (in years):</label>
              <input type="text" name="experience" value={expert.experience} onChange={handleChange} required />
            </div>
            <div>
              <label>Field of Expertise:</label>
              <input type="text" name="fieldofexpertise" value={expert.fieldofexpertise} onChange={handleChange} required />
            </div>
            <div>
              <label>Qualification:</label>
              <input type="text" name="qualification" value={expert.qualification} onChange={handleChange} required />
            </div>
            <div>
              <label>Languages Spoken:</label>
              <input type="text" name="languagesSpoken" value={expert.languagesSpoken} onChange={handleChange} required />
            </div>
            {/* <div>
              <label>Certifications:</label>
              <input type="text" name="certifications" value={expert.certifications} onChange={handleChange} />
            </div> */}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </Adminlayout>
  );
};

export default Addexpert;
