var express = require('express');
var router = express.Router();

var order = {};

/* POST order page. */
router.post('/', function(req, res, next) {

    order = {
        pizza_type: req.body.type,
        pizza_size: req.body.size,
        toppings: req.body.toppings,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        phone: req.body.phone,
        qtty: req.body.qtty,
    };

    res.render('order', { title : 'Bongiorno Pizzeria', 
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

module.exports = order;
module.exports = router;
