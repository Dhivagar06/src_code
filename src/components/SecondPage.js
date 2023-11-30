// SecondPage.js

import React, { useEffect, useState } from 'react';
import './SecondPage.css'; // Import the stylesheet

const SecondPage = ({ selectedButtons }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating data fetching
    // You can replace this with an actual API call in a real application
    if (selectedButtons.length > 0) {
      // Simulated data structure: [{ name, age, course, mark, total }]
      const simulatedData = selectedButtons.map((buttonData) => ({
        name: `Name ${buttonData}`,
        age: 20 + buttonData,
        course: `Course ${buttonData}`,
        mark: Math.floor(Math.random() * 100) + 1,
        total: 100,
      }));
      setData(simulatedData);
    } else {
      setData([]); // If no buttons are selected, clear the data
    }
  }, [selectedButtons]);

  return (
    <div className="second-page">
      <h1>Second Page</h1>
      {/* Second Page Content */}
      <h2>Data from Selected Buttons:</h2>
      {data.length > 0 ? (
        <table className="custom-table">
          <thead>
            <tr>
              <th className="column-header">Name</th>
              <th className="column-header">Age</th>
              <th className="column-header">Course Name</th>
              <th className="column-header">Mark</th>
              <th className="column-header">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.course}</td>
                <td>{row.mark}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data-message">You have not selected any button.</p>
      )}
    </div>
  );
};

export default SecondPage;
