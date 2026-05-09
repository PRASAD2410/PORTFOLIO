const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
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

// Serve frontend static files
const frontendPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendPath));

// API Routes (must be before fallback)
app.use('/api/home', require('../routes/home'));
app.use('/api/about', require('../routes/about'));
app.use('/api/skills', require('../routes/skills'));
app.use('/api/projects', require('../routes/projects'));
app.use('/api/education', require('../routes/education'));
app.use('/api/internship', require('../routes/internship'));
app.use('/api/achievements', require('../routes/achievements'));
app.use('/api/contact', require('../routes/contact'));

// Fallback to React Router - must be after all API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
    if (err) {
      res.status(404).json({ error: 'Page not found' });
    }
  });
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
