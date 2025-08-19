import React from 'react';
import '../First.css';

const flowerlist = ['Rose', 'Lily', 'Tulip', 'Sunflower', 'Jasmine'];

const First = () => {
  return (
    <div className="first-container">
      <h2>Creating the Nursery Page</h2>
      <p>Welcome to our nursery landing page. Explore our flowers and choose your location!</p>

      <div className="dropdown-container">
        <select>
          <option value="vijayawada">Vijayawada</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="chennai" selected>
            Chennai
          </option>
          <option value="bangalore">Bangalore</option>
        </select>
      </div>

      <ul className="flower-list">
        {flowerlist.map((flower, index) => (
          <li key={index}>{flower}</li>
        ))}
      </ul>
    </div>
  );
};

export default First;
