import React from 'react';
import './App.css';

function App() {
  // Office space data
  const offices = [
    {
      name: "Beach View workplace",
      rent: 50000,
      address: "Technopark pharse III Ganga 8th floor",
      image: "office1.webp" // Replace with actual image URL
    },
    {
      name: "Tech Park Office",
      rent: 70000,
      address: "Technopark pharse III Yamuna 1st floor",
      image: "office2.webp" // Replace with actual image URL
    },
    {
      name: "River View Workspace",
      rent: 60000,
      address: "Technopark pharse III Yamuna 1st floor",
      image: "office3.jpg" // Replace with actual image URL
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>
      
      <div className="office-list">
        {offices.map((office, index) => (
          <div key={index} className="office-card">
            <img src={office.image} alt={office.name} className="office-image" />
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p>
              <strong>Rent:</strong> 
              <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
                ₹{office.rent.toLocaleString()}/month
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;