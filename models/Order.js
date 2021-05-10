
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    toppings: [String],
    first_name: String,
    last_name: String,
    address: String,
    phone: {
        type: String,
        required: true
    },
    qtty: String,
    createdOn: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


/*
module.exports = class Order {
    constructor(pizza_type, pizza_size, toppings, first_name, last_name, address, phone, qtty) {
        this.pizza_type = pizza_type;
        this.pizza_size = pizza_size;
        this.toppings = toppings;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.phone = phone;
        this.qtty = qtty;
    }
}


*/