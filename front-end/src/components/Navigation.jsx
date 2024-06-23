import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add-loan">Add Loan</Link></li>
      <li><Link to="/loan-list">Loan List</Link></li>
    </ul>
  </nav>
);

export default Navigation;
