var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET Home */
router.get('/home', function(req, res, next) {
	res.render('home');
});

/* GET About */
router.get('/about', function(req, res, next) {
	res.render('about');
});

/* GET Portfolio */
router.get('/portfolio', function(req, res, next) {
	res.render('portfolio');
});

/* GET Contact */
router.get('/contact', function(req, res, next) {
	res.render('contact');
});
