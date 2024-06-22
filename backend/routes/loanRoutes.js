const express = require('express');
const { createLoan, getLoans } = require('../controllers/loanController');
const router = express.Router();

router.post('/', createLoan);
router.get('/', getLoans);

module.exports = router;
