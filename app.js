// app.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/library', { useNewUrlParser: true, useUnifiedTopology: true });

// Define middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');
const transactionRoutes = require('./routes/transactions');

// Define routes
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});