import React from 'react';

const LoanList = ({ loans }) => {
  return (
    <div>
      <h2>Loan List</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan._id}>
            Principal: {loan.principal}, Interest Rate: {loan.interestRate}%, Term: {loan.term} years,
            Monthly Payment: {loan.monthlyPayment.toFixed(2)}, Total Payment: {loan.totalPayment.toFixed(2)},
            Total Interest: {loan.totalInterest.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanList;
