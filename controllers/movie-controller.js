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
      res.data.results.forEach(result => {
        movies.push({
          title: result.title,
          movieId: result.id,
          description: result.overview,
          releaseYear: result.release_date.split('-')[0]
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
  const movies = [];

  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${query}`)
    .then(res => {
      res.data.results.forEach(result => {
        movies.push({
          title: result.title,
          movieId: result.id,
          description: result.overview,
          releaseYear: result.release_date.split('-')[0]
        })
      })
    })
    .then(() => {
      res.render('search-results', {
        pageTitle: 'Search Results',
        movieData: movies
      });
    })
    .catch(err => console.log(err))
}