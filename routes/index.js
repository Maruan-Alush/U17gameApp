var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/easy', function (req, res, next) {
  //This renders the easy page
  res.render('LevelScreen', {title: "easy"});
});

router.get('/medium', function (req, res, next) {

  res.render('LevelScreen', {title: "medium"})
});

router.get('/hard', function (req, res, next) {

  res.render('LevelScreen', {title: "hard"})
});


module.exports = router;
