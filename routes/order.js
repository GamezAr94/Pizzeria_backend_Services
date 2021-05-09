var express = require('express');
var router = express.Router();

/* POST order page. */
router.post('/', function(req, res, next) {
  res.render('order', { title: 'Bongiorno Pizzeria' });
});

module.exports = router;
