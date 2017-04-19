var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Movie.findAll({order: '"id" ASC'})
  .then(movies => {
    res.render('index', { title: 'Movie for Moviers', movies: movies });
  })
});

router.get('/add-movie', function(req, res, next) {
  res.render('add-movie', {title: 'Add new movie'});
});

router.post('/add-movie', function(req, res, next) {
  let title = req.body.title;
  let description = req.body.description;
  db.Movie.create({'title': title, 'description': description})
  .then(() => {
    res.redirect('/');
  })
  .catch(err => {
    console.log(err.message);
  })
});

router.get('/edit/:id', function(req, res, next) {
  let movieId = req.params.id;
  db.Movie.findById(movieId)
  .then(movie => {
    res.render('edit', {title: `Edit ${movie.title} Movie`, movie: movie});
  })
});

router.post('/edit/:id', function(req, res, next) {
  let movieId = req.params.id;
  db.Movie.update({title: req.body.title, description: req.body.description, rating:req.body.rating}, {where: {id: movieId}})
  .then(() => {
    res.redirect('/');
  })
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
