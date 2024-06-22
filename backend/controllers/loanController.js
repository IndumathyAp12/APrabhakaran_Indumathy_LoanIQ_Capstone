const Loan = require('../models/Loan');

const calculateLoanDetails = (principal, interestRate, term) => {
  const monthlyRate = interestRate / 100 / 12;
  const n = term * 12;
  const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - principal;

  return { monthlyPayment, totalPayment, totalInterest };
};

exports.createLoan = async (req, res) => {
  const { principal, interestRate, term } = req.body;
  const { monthlyPayment, totalPayment, totalInterest } = calculateLoanDetails(principal, interestRate, term);

  const newLoan = new Loan({
    principal,
    interestRate,
    term,
    monthlyPayment,
    totalPayment,
    totalInterest
  });

  try {
    const savedLoan = await newLoan.save();
    res.json(savedLoan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
