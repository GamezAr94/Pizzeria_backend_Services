
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