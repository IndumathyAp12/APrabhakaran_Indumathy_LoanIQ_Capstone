const mongoose = require('../config/db-connection.js');
const Loan = require('../models/Loan.js');
const User = require('../models/User.js');

// Sample data
const users = [
    {
        username: 'emma_smith',
        email: 'emma@example.com',
        password: '4ygbhwr8w'
    },
    {
        username: 'mike_jones',
        email: 'mike@example.com',
        password: 'w7h3gv23bd'
    },
    {
        username: 'lucy_wang',
        email: 'lucy@example.com',
        password: 'fnf9h3o12d'
    },
    {
        username: 'david_clark',
        email: 'david@example.com',
        password: 'vmdjs8fh3d'
    },
    {
        username: 'sarah_brown',
        email: 'sarah@example.com',
        password: 'hdm48fny8s'
    },
    {
        username: 'alex_jackson',
        email: 'alex@example.com',
        password: 'vfh3jkw9y4'
    },
    {
        username: 'olivia_garcia',
        email: 'olivia@example.com',
        password: 'pwr84vbm93'
    },
    {
        username: 'tom_wilson',
        email: 'tom@example.com',
        password: 'ncd8fmg7ej'
    },
    {
        username: 'emily_thomas',
        email: 'emily@example.com',
        password: 'wue48df3hb'
    },
    {
        username: 'kevin_lee',
        email: 'kevin@example.com',
        password: 'jcnw84f9dv'
    }
];

const loans = [
    {
        principal: 10000,
        interestRate: 5,
        term: 12,
        monthlyPayment: 855.78,
        totalPayment: 10269.36,
        totalInterest: 269.36
    },
    {
        principal: 15000,
        interestRate: 4.5,
        term: 24,
        monthlyPayment: 656.15,
        totalPayment: 15747.60,
        totalInterest: 747.60
    },
    {
        principal: 200000,
        interestRate: 3.75,
        term: 30,
        monthlyPayment: 926.23,
        totalPayment: 333843.48,
        totalInterest: 133843.48
    },
    {
        principal: 5000,
        interestRate: 6,
        term: 6,
        monthlyPayment: 763.47,
        totalPayment: 4580.82,
        totalInterest: 580.82
    },
    {
        principal: 30000,
        interestRate: 4,
        term: 48,
        monthlyPayment: 689.04,
        totalPayment: 33073.92,
        totalInterest: 3073.92
    },
    {
        principal: 250000,
        interestRate: 3.5,
        term: 15,
        monthlyPayment: 1782.25,
        totalPayment: 320804.50,
        totalInterest: 70804.50
    },
    {
        principal: 12000,
        interestRate: 5.25,
        term: 18,
        monthlyPayment: 769.01,
        totalPayment: 13842.18,
        totalInterest: 1842.18
    },
    {
        principal: 180000,
        interestRate: 4.2,
        term: 25,
        monthlyPayment: 974.17,
        totalPayment: 292251.00,
        totalInterest: 112251.00
    },
    {
        principal: 8000,
        interestRate: 7,
        term: 12,
        monthlyPayment: 698.22,
        totalPayment: 8378.64,
        totalInterest: 378.64
    },
    {
        principal: 100000,
        interestRate: 3.85,
        term: 20,
        monthlyPayment: 584.59,
        totalPayment: 140300.53,
        totalInterest: 40300.53
    }
];


async function seed() {
    try {
        await Loan.deleteMany({});
        await User.deleteMany({});

        const createdUsers = await User.create(users);
        console.log('Users: ', createdUsers);
        const createdLoans = await Loan.create(loans);
        console.log('Loans: ', createdLoans);

        await mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
}

seed();