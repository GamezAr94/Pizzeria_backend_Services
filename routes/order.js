var express = require('express');
var router = express.Router();
var Order = require('../models/Order')

var order = {};

router.get('/api/order', function(req, res, next) {
    console.log("AQUI ");
    res.render('index');
  });


router.post('/', function(req, res, next) {
    res.render('order',{ order_received : "Order received" });
  });

/* POST order page. */
router.get('/', function(req, res, next) {

    let order = new Order(req.query.type, req.query.size, req.query.toppings, req.query.first_name, req.query.last_name, req.query.address, req.query.phone, req.query.qtty);

    res.render('order', {title : 'Bongiorno Pizzeria', 
                                        pizza_type : order.pizza_type, 
                                        pizza_size : order.pizza_size,
                                        toppings : order.toppings, 
                                        first_name: order.first_name, 
                                        last_name : order.last_name,
                                        address : order.address,
                                        phone :  0,
                                        qtty : order.qtty,
                                        total : 0 });
});

module.exports = router;
