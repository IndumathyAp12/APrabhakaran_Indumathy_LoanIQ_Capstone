import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';
import './App.css'; 

const App = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/loans');
        setLoans(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLoans();
  }, []);

  const addLoan = (loan) => {
    setLoans([...loans, loan]);
  };

  return (
    <div>
      <h1>Loan IQ</h1>
      <LoanForm onAddLoan={addLoan} />
      <LoanList loans={loans} />
    </div>
  );
};

export default App;
