import React from 'react';
import './Viewallexperts.css';
import AdminLayout from './Adminlayout';

const expertsData = [
  { name: 'Amit Sharma', email: 'amit.sharma@example.com', phone: '9876543213', experience: '10 years', field: 'Crop Management' },
  { name: 'Priya Singh', email: 'priya.singh@example.com', phone: '9876543214', experience: '5 years', field: 'Soil Health' },
  { name: 'Rohit Verma', email: 'rohit.verma@example.com', phone: '9876543215', experience: '8 years', field: 'Pest Control' },
];

const ViewallExperts = () => {
  return (
    <AdminLayout>
      <div className="viewallexperts-container">
        <div className="viewallexperts-overlay">
          <div className="viewallexperts-content">
            <h2>View All Experts</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Experience</th>
                  <th>Field of Expertise</th>
                </tr>
              </thead>
              <tbody>
                {expertsData.map((expert, index) => (
                  <tr key={index}>
                    <td>{expert.name}</td>
                    <td>{expert.email}</td>
                    <td>{expert.phone}</td>
                    <td>{expert.experience}</td>
                    <td>{expert.field}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ViewallExperts;
