require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 5000;
const TMDB_ID = process.env.TMDB_KEY

app.use('/', (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${TMDB_ID}`)
    .then(result => res.send(result.data.title))
    .catch(err => console.log(err))
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});