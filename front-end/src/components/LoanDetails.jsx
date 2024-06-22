import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LoanDetails = () => {
  const { id } = useParams();
  const [loan, setLoan] = useState(null);

  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/loans/${id}`);
        setLoan(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLoan();
  }, [id]);

  if (!loan) return <div>Loading...</div>;

  return (
    <div>
      <h2>Loan Details</h2>
      <p>Principal: {loan.principal}</p>
      <p>Interest Rate: {loan.interestRate}%</p>
      <p>Term: {loan.term} years</p>
      <p>Monthly Payment: {loan.monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: {loan.totalPayment.toFixed(2)}</p>
      <p>Total Interest: {loan.totalInterest.toFixed(2)}</p>
    </div>
  );
};

export default LoanDetails;
