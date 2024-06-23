import React from 'react';
import { Link } from 'react-router-dom';

const LoanList = ({ loans }) => (
  <div>
    <h2>Loan List</h2>
    <ul>
      {loans.map((loan) => (
        <li key={loan._id}>
          <Link to={`/loan/${loan._id}`}>
            {loan.principal} - {loan.term} years
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default LoanList;
