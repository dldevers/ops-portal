const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'ops-portal',
    version: '0.1.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/status', (req, res) => {
  res.status(200).json({
    service: 'ops-portal',
    environment: process.env.NODE_ENV || 'development',
    status: 'operational',
    checks: {
      api: 'ok',
      database: 'not_configured',
      queue: 'not_configured',
      external_dependencies: 'not_configured'
    },
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
