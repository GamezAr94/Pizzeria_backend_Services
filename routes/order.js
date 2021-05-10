var express = require('express');
var router = express.Router();
const price_calculator = require('../public/javascripts/price_calculator')
const pizza_builder = require('../pizza_builder.json');

const Order = require('../models/Order');
var phoneFormatter = require('phone-formatter');

var error = require('../public/javascripts/error');

let order;

/* POST order page. */
router.get('/', function (req, res, next) {
/**/
    let orderBody = req.query;

    order = new Order(orderBody);

    //let order = new Order(req.query.type, req.query.size, req.query.toppings, req.query.first_name, req.query.last_name, req.query.address, phoneFormatter.normalize(req.query.phone), req.query.qtty);

    let error_messages = error.error_finder(order.type, order.size, order.address, order.phone, order.qtty);

    if (error_messages.length > 0) {
        console.log(order.phone);
        res.render('index', { title: 'Bongiorno Pizzeria', error: error_messages, pizza_builder });

    } else {
        let fullName = order.first_name + " " + order.last_name;

        let topping_price = price_calculator.topping_price(order.toppings);

        console.log("topping price ", topping_price);
        let size_price = price_calculator.size_price(order.size);

        console.log("size price ", size_price);
        let total_price = order.qtty * price_calculator.total_price(topping_price, size_price);
        console.log("total price ", (Math.round(total_price * 100) / 100).toFixed(2));

        res.render('order', { title: 'Bongiorno Pizzeria', 
        order, 
        phone: phoneFormatter.format(order.phone, "NNN-NNN-NNNN"), 
        total: (Math.round(total_price * 100) / 100).toFixed(2),
        fullName: fullName });
/*
        res.render('order', {
            title: 'Bongiorno Pizzeria',
            pizza_type: order.type,
            pizza_size: order.size,
            toppings: order.toppings,
            fullName: fullName,
            address: order.address,
            phone: phoneFormatter.format(order.phone, "NNN-NNN-NNNN"),
            qtty: order.qtty,
            total: (Math.round(total_price * 100) / 100).toFixed(2)
        });
        */
    }
});

router.post('/', function (req, res, next) {
    var date = new Date();
    var minutes = date.getMinutes()+30;
    var hours = date.getHours() + Math.floor(minutes / 60);
    minutes = minutes - (Math.floor(minutes / 60)*60)
    res.render('order', {
        title: 'Bongiorno Pizzeria',
        full_name: order.first_name,
        order_received: "Order received ",
        info_order: "Your order will be ready at ",
        time: hours + ":" + minutes
    });
});



module.exports = router;
