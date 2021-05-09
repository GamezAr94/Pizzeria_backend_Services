var express = require('express');
var router = express.Router();


const pizza_builder = require('../pizza_builder.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bongiorno Pizzeria',  pizza_builder});
});

module.exports = router;
