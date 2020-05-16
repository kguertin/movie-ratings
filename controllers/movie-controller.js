require('dotenv').config();
const axios = require('axios');

const TMDB_KEY = process.env.TMDB_KEY

exports.getHome = (req, res) => {
  res.render('index', { pageTitle: 'Home' });
}

exports.getPopular = (req, res) => {
  const movies = [];

  axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_KEY}`)
    .then(res => {
      res.data.results.forEach(item => {
        movies.push({
          title: item.title,
          description: item.overview
        })
      })
    })
    .then(() => {
      res.render('popular', { pageTitle: 'Popular', movieData: movies });
    })
    .catch(err => console.log(err));
}

exports.getSearchResults = (req, res) => {
  const query = req.query.title;
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${query}`)
    .then(res => console.log(res.data.results))
    .catch(err => console.log(err))
}