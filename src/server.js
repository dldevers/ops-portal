const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`User Subscription Portal listening at http://localhost:${port}`);
});

// Routing:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/health', (req, res) => {
res.send(JSON.stringify({status: "ok"}));
});
    
