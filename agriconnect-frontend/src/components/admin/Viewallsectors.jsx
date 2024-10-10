import React from 'react';
import './Viewallsectors.css';

const sectorsData = [
  { name: 'Financial Services', description: 'Banking and investment services.', services: 'Loans, Investments' },
  { name: 'Agricultural Suppliers', description: 'Suppliers of seeds and fertilizers.', services: 'Seeds, Fertilizers' },
  { name: 'Education', description: 'Educational services and institutions.', services: 'Tutoring, Online Courses' },
];

const Viewallsectors = () => {
  return (
    <div className="sectors-container">
      <h2>View All Sectors</h2>
      <table>
        <thead>
          <tr>
            <th>Sector Name</th>
            <th>Description</th>
            <th>Services Offered</th>
          </tr>
        </thead>
        <tbody>
          {sectorsData.map((sector, index) => (
            <tr key={index}>
              <td>{sector.name}</td>
              <td>{sector.description}</td>
              <td>{sector.services}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewallsectors;
