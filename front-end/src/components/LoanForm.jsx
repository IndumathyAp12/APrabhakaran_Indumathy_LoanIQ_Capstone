import React, { useState } from 'react';
import axios from 'axios';

const LoanForm = ({ onAddLoan }) => {
  const [formData, setFormData] = useState({
    principal: '',
    interestRate: '',
    term: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/loans', formData);
      onAddLoan(response.data);
      setFormData({ principal: '', interestRate: '', term: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Principal</label>
        <input type="number" name="principal" value={formData.principal} onChange={handleChange} required />
      </div>
      <div>
        <label>Interest Rate (%)</label>
        <input type="number" name="interestRate" value={formData.interestRate} onChange={handleChange} required />
      </div>
      <div>
        <label>Term (years)</label>
        <input type="number" name="term" value={formData.term} onChange={handleChange} required />
      </div>
      <button type="submit">Calculate Loan</button>
    </form>
  );
};

export default LoanForm;
