const express = require('express');
const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
const port = 3000;
const hostname = '127.0.0.1';
// Start the server
app.listen(port, () => {
  console.log(`User Subscription Portal listening at http://localhost:${port}`);
});

// Routing:
app.get('/', (req, res) => {
  res.send('<h1>Ops Portal</h1>');
});
app.get('/health', (req, res) => {
res.send(JSON.stringify({status: "ok"}));
});
    
