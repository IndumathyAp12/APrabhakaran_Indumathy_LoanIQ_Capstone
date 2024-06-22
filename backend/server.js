// Requiring and configuring the .env file to access its variables
require('dotenv').config();

// Requiring necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Creating the express server and storing it inside the app variable
const app = express();

// Port on which the server will run
const PORT = process.env.PORT || 8000;

// Middleware to enable CORS
app.use(cors());

// Middleware to accept and parse JSON data
app.use(express.json());

// Custom Middleware for logging requests
app.use((req, res, next) => {
  console.log(`A ${req.method} request was made to ${req.url}`);
  next();
});

// Requiring routes
const loanRoutes = require('./routes/loanRoutes');
const userRoutes = require('./routes/userRoutes'); 

// Connecting the routers to the server
app.use('/api/loans', loanRoutes);
app.use('/api/users', userRoutes); 

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong.');
});

// Calling the listen function telling the server to listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
