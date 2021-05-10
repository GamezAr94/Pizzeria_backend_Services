var express = require('express');
var router = express.Router();

const Order = require('../models/Order');


router.get('/', (req,res)=>{
  const order = new Order({
      pizza_type: "Detroit",
      pizza_size: "big",
      toppings: "Cheese",
      first_name: "123",
      last_name: "String",
      address: "String1",
      phone: "1234567890",
      qtty: "1",
  });

  order.save()
  .then((result)=>{
    res.send(result);
  })
  .catch((err) => {
    console.elog  (err);
  });
});


router.get('/', (req, res) => {
  Order.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
  });
});

router.get('/', (req, res) =>{
  Order.findById('6098acd939331723806b0574')
  .then((result) => {
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
  });
})

module.exports = router;
