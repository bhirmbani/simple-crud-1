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

module.exports = router;
