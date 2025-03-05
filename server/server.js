// const express = require('express');
// const dotenv = require('dotenv');

// const authRoutes = require('./routes/authRoutes.js');
// const userRoutes = require('./routes/userRoutes.js');
// const masterRoutes = require('./routes/masterRoutes.js');

// require('./models/index.js');

// dotenv.config();
// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/auth', authRoutes);
// app.use('/users', userRoutes);
// app.use('/masters', masterRoutes);

// // Error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import masterRoutes from './routes/masterRoutes.js';

import './models/index.js'; // Import models

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/masters', masterRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
