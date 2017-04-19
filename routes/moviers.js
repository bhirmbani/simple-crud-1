var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Movier.findAll({order: '"id" ASC'})
  .then(moviers => {
    res.render('moviers', {title: 'Moviers Page', moviers: moviers});
  })
  .catch(err => {
    console.log(err.message);
  })
});

module.exports = router;
