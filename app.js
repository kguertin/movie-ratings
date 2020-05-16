const express = require('express');
const fetch = require('fetch');

const PORT = 5000;
const app = express();

app.use('/', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});