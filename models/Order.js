

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
