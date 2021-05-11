const pizza_builder = require('../../pizza_builder.json');


// function to validate if the argument passed is a valid phone
exports.phone_validator = function (phone) {

    if (phone == undefined || phone.trim().length != 10 || isNaN(phone)) {

        return false

    }
    else {

        return true;

    }

}

// Function to validate the type of argument passed is a valid argument, return a boolean
exports.pizza_type_validator = function (pizza_type) {

    for (var types of pizza_builder.Pizza_types) {

        if (types.pizza_type == pizza_type) {
            return true;
        }

    }

    return false;

}

// Function to validate the type of argument passed is a valid argument, return a boolean
exports.pizza_size_validator = function (pizza_size) {

    for (var size of pizza_builder.Sizes) {
        if (size.size == pizza_size) {
            return true;
        }
    }
    return false;

}


// Function to validate the argument passed is a valid argument, return a boolean
exports.pizza_qtty_validator = function (qtty) {

    if (qtty <= 0 || qtty >= 100 || isNaN(qtty)) {

        return false;

    }

    return true;

}


// Function to validate the argument passed is a valid argument, return a boolean
exports.pizza_address_validator = function (address) {

    if (address == undefined || address.trim().length == 0) {

        return false;

    }

    return true;

}