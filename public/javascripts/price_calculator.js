const pizza_builder = require('../../pizza_builder.json');

//functions that receives an array of toppings
exports.topping_price = function (toppings_input) {

    let total = 0;


    if (toppings_input === undefined) { //check if the argument passed is not undefined
        return total;
    }

    for (var topping_input of toppings_input) {


        for (var toppings of pizza_builder.Toppings) { // loop to iterate the array in the pizza_builder.json file

            if (toppings.topping == topping_input) { // sum the price if the topping selected by the user is equals to the topping from the file

                total += toppings.price;

                break;

            }

        }

    }


    return total;

}

//function to retrieve the price of the size of the pizza
exports.size_price = function (pizza_size) {
    for (var sizes of pizza_builder.Sizes) {

        if (sizes.size == pizza_size) {
            return sizes.price;
        }
    }
}

//function to calculate the price of the pizza, toppings and size
exports.total_price = function (toppings_total, size_price) {
    return toppings_total + size_price;
}