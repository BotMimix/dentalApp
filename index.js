const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
  <h2>Pedro is the cutest baby</h2>
  <p>i love my scooby</p>
  `)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));