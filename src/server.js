const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Ops Portal listening at http://localhost:${port}`);
});
