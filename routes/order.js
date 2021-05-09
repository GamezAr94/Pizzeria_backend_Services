var express = require('express');
var router = express.Router();
const price_calculator = require('../public/javascripts/price_calculator')
const pizza_builder = require('../pizza_builder.json');

var Order = require('../models/Order');
var phoneFormatter = require('phone-formatter');

var error = require('../public/javascripts/error');

let fullName;

/* POST order page. */
router.post('/', function (req, res, next) {

    let order = new Order(req.body.type, req.body.size, req.body.toppings, req.body.first_name, req.body.last_name, req.body.address, phoneFormatter.normalize(req.body.phone), req.body.qtty);

    let error_messages = error.error_finder(order.pizza_type, order.pizza_size, order.address, order.phone, order.qtty);

    if (error_messages.length > 0) {

        res.render('index', { title: 'Bongiorno Pizzeria', error: error_messages, pizza_builder });

    } else {

        fullName = order.first_name + " " + order.last_name;

        let topping_price = price_calculator.topping_price(order.toppings);
        let size_price = price_calculator.size_price(order.pizza_size);

        let total_price = order.qtty * price_calculator.total_price(topping_price, size_price);

        res.render('order', {
            title: 'Bongiorno Pizzeria',
            pizza_type: order.pizza_type,
            pizza_size: order.pizza_size,
            toppings: order.toppings,
            fullName: fullName,
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
    minutes = minutes - (Math.floor(minutes / 60)*60)
console.log(fullName);
    res.render('order', {
        title: 'Bongiorno Pizzeria',
        full_name: fullName,
        order_received: "Order received ",
        info_order: "Your order will be ready at ",
        time: hours + ":" + minutes
    });
});



module.exports = router;
