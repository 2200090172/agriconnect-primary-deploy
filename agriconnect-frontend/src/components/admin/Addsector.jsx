import React, { useState } from 'react';
import Adminlayout from './Adminlayout';
import './Addsector.css'; // Include your form styling here

const sectors = [
  'Financial Services',
  'Agricultural Suppliers',
  'Education',
  'Research and Development',
  'Technology',
  'Healthcare',
  'Market Access',
  'Others',
];

const AddSector = () => {
  const [sector, setSector] = useState({
    sectorName: '',
    description: '',
    servicesOffered: '',
    contactPerson: '',
    contactEmail: '',
    sectorLocation: '',
    websiteUrl: '', // Updated to use textarea
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSector({
      ...sector,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sector added successfully");
    console.log(sector);
    setSector({
      sectorName: '',
      description: '',
      servicesOffered: '',
      contactPerson: '',
      contactEmail: '',
      sectorLocation: '',
      websiteUrl: '', // Resetting the new field
    });
  };

  return (
    <Adminlayout>
      <div className="addsector-container">
        <div className="addsector-overlay">
          <form className="addsector-form" onSubmit={handleSubmit}>
            <h2>Add Sector</h2>
            <div>
              <label>Sector Name:</label>
              <select name="sectorName" value={sector.sectorName} onChange={handleChange} required>
                <option value="">Select a sector</option>
                {sectors.map((sec, index) => (
                  <option key={index} value={sec}>{sec}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Description:</label>
              <textarea name="description" value={sector.description} onChange={handleChange} required />
            </div>
            <div>
              <label>Services Offered:</label>
              <input type="text" name="servicesOffered" value={sector.servicesOffered} onChange={handleChange} />
            </div>
            <div>
              <label>Contact Person:</label>
              <input type="text" name="contactPerson" value={sector.contactPerson} onChange={handleChange} required />
            </div>
            <div>
              <label>Contact Email:</label>
              <input type="email" name="contactEmail" value={sector.contactEmail} onChange={handleChange} required />
            </div>
            <div>
              <label>Sector Location:</label>
              <input type="text" name="sectorLocation" value={sector.sectorLocation} onChange={handleChange} />
            </div>
            {/* <div>
              <label>Website URL:</label>
              <textarea name="websiteUrl" value={sector.websiteUrl} onChange={handleChange} rows="3" required /> 
            </div> */}
            <button type="submit">Add Sector</button>
          </form>
        </div>
      </div>
    </Adminlayout>
  );
};

export default AddSector;
