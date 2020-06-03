require('dotenv').config();
const axios = require('axios');

const TMDB_KEY = process.env.TMDB_KEY

exports.getHome = (req, res) => {
  console.log(req.session.isLoggedIn)
  res.render('index', { pageTitle: 'Home' });
}

exports.getTrending = (req, res) => {
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
      res.render('trending', { pageTitle: 'Trending', movieData: movies });
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

exports.getMovieDetails = (req, res) => {
  const movie = {};
  axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${TMDB_KEY}`)
    .then(res => {
      movie.title = res.data.title;
      movie.movieId = res.data.id
      movie.description = res.data.overview;
      movie.releaseYear = res.data.release_date.split('-')[0]
    })
    .then(() => {
      res.render('movie-details', {
        pageTitle: `${movie.title} (${movie.releaseYear})`,
        movieData: movie
      })
    })
    .catch(err => console.log(err));
}