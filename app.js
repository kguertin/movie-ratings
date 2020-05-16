require('dotenv').config();
const express = require('express');
const fetch = require('fetch');

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});