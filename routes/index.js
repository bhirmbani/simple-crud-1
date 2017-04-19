var express = require('express');
var router = express.Router();
var db = require('../models');
let helper = require('../helper/helper');

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
  let rating = req.body.rating;
  db.Movie.create({'title': title, 'description': description, 'rating': rating})
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

router.get('/delete/:id', (req, res, next) => {
  let movieId = req.params.id;
  db.Movie.findById(movieId)
  .then(movie => {
    res.render('delete', {title: `Delete ${movie.title} Movie`, movie: movie, helper: helper});
  })
});

router.get('/delete/confirm/:id', (req, res, next) => {
  let movieId = req.params.id;
  db.Movie.destroy({where: {id: movieId}})
  .then(() => {
    res.redirect('/');
  })
  .catch((err) => {
    res.send(err.message);
  })
});

router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  db.Movie.findById(movieId)
  .then(movie => {
    res.render('movies', {title: movie.title, movie: movie, helper: helper})
  })
  .catch((err) => {
    res.render(err.message);
  })
});

router.get('/signup', (req, res, next) => {
  res.render('signup', {title: 'Sign Up'});
});

router.post('/signup', (req, res, next) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  db.Movier.create({'first_name': firstname, 'last_name': lastname, 'email': email, 'username': username, 'password': password})
  .then(() => {
    res.redirect('/moviers');
  })
  .catch(err => {
    console.log(err.message);
  })
});

// login
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login Form'});
});

router.post('/login', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  
  //cek password
  db.Movier.findOne({ where: { username: username }})
      .then(movier => {
        if (movier) {
          if (password === movier.password) {
            req.session.username = username
            req.session.userid = movier.userid
            res.redirect('/')
          } else {
            res.send('Password is not match')
          }
        } else {
          res.send('Client not found')
        }
      })
      .catch(err => res.send(err.message))

});

module.exports = router;
