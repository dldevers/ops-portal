const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Start the server
app.listen(port, () => {
  console.log(`User Subscription Portal listening at http://localhost:${port}`);
});

// Routing:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'ops-portal',
    version: '0.1.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
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
