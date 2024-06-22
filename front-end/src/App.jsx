import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoanForm from './components/LoanForm';
import LoanList from './components/LoanList';
import Home from './components/Home.jsx';
import LoanDetails from './components/LoanDetails';
import AddLoan from './components/AddLoan';
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
    <Router>
      <div>
        <h1>Loan IQ</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-loan" element={<AddLoan onAddLoan={addLoan} />} />
          <Route path="/loan-list" element={<LoanList loans={loans} />} />
          <Route path="/loan/:id" element={<LoanDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
