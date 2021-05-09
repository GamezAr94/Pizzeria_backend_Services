var express = require('express');
var router = express.Router();
const price_calculator = require('../public/javascripts/price_calculator')
const pizza_builder = require('../pizza_builder.json');

var Order = require('../models/Order');
var phoneFormatter = require('phone-formatter');

var error = require('../public/javascripts/error');

let order;

/* POST order page. */
router.post('/', function (req, res, next) {

    order = new Order(req.body.type, req.body.size, req.body.toppings, req.body.first_name, req.body.last_name, req.body.address, phoneFormatter.normalize(req.body.phone), req.body.qtty);

    let error_messages = error.error_finder(order.pizza_type, order.pizza_size, order.address, order.phone, order.qtty);

    if (error_messages.length > 0) {

        res.render('index', { title: 'Bongiorno Pizzeria', error: error_messages, pizza_builder });

    } else {

        let topping_price = price_calculator.topping_price(order.toppings);
        let size_price = price_calculator.size_price(order.pizza_size);

        let total_price = order.qtty * price_calculator.total_price(topping_price, size_price);

        res.render('order', {
            title: 'Bongiorno Pizzeria',
            pizza_type: order.pizza_type,
            pizza_size: order.pizza_size,
            toppings: order.toppings,
            first_name: order.first_name,
            last_name: order.last_name,
            address: order.address,
            phone: phoneFormatter.format(order.phone, "NNN-NNN-NNNN"),
            qtty: order.qtty,
            total: (Math.round(total_price * 100) / 100).toFixed(2)
        });

    }
});

router.get('/', function (req, res, next) {
    var date = new Date();
    var minutes = date.getMinutes()+30;
    var hours = date.getHours() + Math.floor(minutes / 60);

    res.render('order', {
        title: 'Bongiorno Pizzeria',
        order_received: "Order received " + order.first_name + " " + order.last_name,
        info_order: "Your order will be ready at ",
        time: hours + ":" + minutes
    });
});



module.exports = router;
