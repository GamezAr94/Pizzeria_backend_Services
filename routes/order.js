var express = require('express');
var router = express.Router();
const pizza_builder = require('../pizza_builder.json');

var Order = require('../models/Order');
var phoneFormatter = require('phone-formatter');

var error = require('../public/javascripts/error');

let order;

router.post('/', function (req, res, next) {
    res.render('order', { order_received: "Order received", info_order : order.first_name + " " + order.last_name});
});


/* POST order page. */
router.get('/', function (req, res, next) {

    order = new Order(req.query.type, req.query.size, req.query.toppings, req.query.first_name, req.query.last_name, req.query.address, phoneFormatter.normalize(req.query.phone), req.query.qtty);
    
    console.log("order fn", order.first_name);
    console.log("order ln", order.last_name);

    let error_messages = error.error_finder(order.pizza_type, order.pizza_size, order.address, order.phone, order.qtty);
    if (error_messages.length > 0) {
        res.render('index', { title: 'Bongiorno Pizzeria', error: error_messages, pizza_builder });
    } else {
        res.render('order', {
            title: 'Bongiorno Pizzeria',
            pizza_type: order.pizza_type,
            pizza_size: order.pizza_size,
            toppings: order.toppings,
            first_name: order.first_name,
            last_name: order.last_name,
            address: order.address,
            phone: order.phone,
            qtty: order.qtty,
            total: 0
        });
    }
});

module.exports = router;
