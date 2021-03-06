var express = require('express');
var router = express.Router();
var db = require('../models');
let helper = require('../helper/helper');


// Authentication and Authorization Middleware
function checkAuth(req, res, next) {
  if (!req.session.username) {
    res.send('You are not authorized to view this page');
    res.redirect('/login');
  } else {
    next();
  }
}

/* GET home page. */
router.get('/', checkAuth, function(req, res, next) {
  let username = req.session.username;
  db.Movie.findAll({include:[{model: db.Movier}], order: '"id" ASC'})
  .then(movies => {
    res.render('index', { title: 'MovieRent', movies: movies });
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
  let movierId = req.session.userid;
  // db.Comment.findAll({where: {movie_id: movieId}})
  // .then(comments => {
  //   db.Movie.findById(movieId)
  //   .then(movie => {
  //     db.Moviers.findAll()
  //     .then(moviers => {
  //       res.render('movies', {title: movie.title, comments:comments, movie: movie, movieId: movieId, moviers: moviers, movierId: movierId})
  //     })
      
  //   })
    
  // })
  db.Movie.findById(movieId)
  .then(movie => {
    db.Comment.findAll()
    .then(comments => {
      movie.getComments()
      .then(commentMovie => {
        let movierId = comments.movier_id;
        db.Movier.findAll()
        .then(moviers => {
        // res.send(commentMovie);
        res.render('movies', {title: movie.title, movie: movie, helper: helper, comments: comments, moviers: moviers, commentMovie: commentMovie});
      })
      })
      
    })
    .catch(err => {
      console.log(err);
    })
    
  })
  .catch((err) => {
    res.render(err.message);
  })
});

router.post('/add-comment/:id', (req, res, next) => {
  let content = req.body.content;
  let movierId = req.session.userid;
  let movieId = req.params.id;

  db.Comment.create({
    'content': content,
    'movier_id': movierId,
    'movie_id': movieId,
  })
  .then(() => {
    // create movier_id untuk commentmovie di sini
    res.redirect('/')
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
  let image_url = req.body.image_url;

  db.Movier.create({
    'first_name': firstname,
    'last_name': lastname,
    'email': email,
    'username': username,
    'password': password,
    'image_url': image_url})
  .then(() => {
    res.redirect('/login');
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
  
  // cek password
  db.Movier.findOne({ where: { username: username }})
    .then(movier => {
      if (movier) {
        if (password === movier.password) {
          req.session.username = username
          req.session.userid = movier.id
          res.redirect('/');
        } else {
          res.send('Password is not match');
        }
      } else {
        res.send('Client not found');
      }
    })
    .catch(err => res.send(err.message))
});

router.get('/logout', function(req, res) {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

router.get('/moviers/:id', function(req, res, next) {
  let id = req.params.id;
  db.Movier.findById(id)
  .then(movier => {
    db.Movie.findAll()
    .then(movies => {
      // res.send(movies)
      res.render('movier-page', {title: `${movier.username} Page`, movier: movier, movies: movies});
    })
    
  })
  
})

router.get('/add/:id', (req, res, next) => {
  let movieId = req.params.id;
  db.Movie.findById(movieId)
  .then(rent => {
    res.render('add', {title: `Rent Movie Page`, rent: rent});  
  })
})

router.post('/add/:id', (req, res, next) => {
  let id = req.params.id;
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  db.Rent.create({
    'title': title,
    'description': description,
    'price': price,
  })
  .then(() => {
    res.redirect('/');
  })
});

router.get('/rent', (req, res, next) => {
  db.Rent.findAll({order: '"createdAt" DESC'})
  .then(rents => {
    res.render('rent', {title: `Daftar Film yang Disewa`, rents: rents});
  })
});

module.exports = router;
