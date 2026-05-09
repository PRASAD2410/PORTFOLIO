const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize Express app
const app = express();

// Environment variables
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Request logging
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio API Server Running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/home', require('../routes/home'));
app.use('/api/about', require('../routes/about'));
app.use('/api/skills', require('../routes/skills'));
app.use('/api/projects', require('../routes/projects'));
app.use('/api/education', require('../routes/education'));
app.use('/api/internship', require('../routes/internship'));
app.use('/api/achievements', require('../routes/achievements'));
app.use('/api/contact', require('../routes/contact'));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║   Portfolio Backend Server Started        ║
╠═══════════════════════════════════════════╣
║   Server: http://localhost:${PORT}           ║
║   Environment: ${NODE_ENV.padEnd(25)} ║
║   Timestamp: ${new Date().toISOString()}  ║
╚═══════════════════════════════════════════╝
  `);
});
