import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome to Loan IQ</h2>
    <Link to="/add-loan">Add Loan</Link>
    <Link to="/loan-list">Loan List</Link>
  </div>
);

export default Home;
