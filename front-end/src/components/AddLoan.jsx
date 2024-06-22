import React from 'react';
import LoanForm from './LoanForm';

const AddLoan = ({ onAddLoan }) => (
  <div>
    <h2>Add Loan</h2>
    <LoanForm onAddLoan={onAddLoan} />
  </div>
);

export default AddLoan;
