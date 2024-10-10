import React from 'react';
import './Viewallfarmers.css';

const farmersData = [
  { name: 'Rajesh Kumar', email: 'rajesh.kumar@example.com', phone: '9876543210', location: 'Pune', farmsize: '5 acres', crops: 'Wheat, Rice' },
  { name: 'Sunita Devi', email: 'sunita.devi@example.com', phone: '9876543211', location: 'Delhi', farmsize: '10 acres', crops: 'Sugarcane, Maize' },
  { name: 'Arjun Yadav', email: 'arjun.yadav@example.com', phone: '9876543212', location: 'Jaipur', farmsize: '7 acres', crops: 'Barley, Mustard' },
];

const Viewallfarmers = () => {
  return (
    <div className="farmers-container">
      <h2>View All Farmers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Farm Size</th>
            <th>Crops Grown</th>
          </tr>
        </thead>
        <tbody>
          {farmersData.map((farmer, index) => (
            <tr key={index}>
              <td>{farmer.name}</td>
              <td>{farmer.email}</td>
              <td>{farmer.phone}</td>
              <td>{farmer.location}</td>
              <td>{farmer.farmsize}</td>
              <td>{farmer.crops}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewallfarmers;
