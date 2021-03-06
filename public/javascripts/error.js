var form_validator = require('./data_validation');

// Function returns an array with all the errors 
exports.error_finder = function(type, size, address, phone, qtty){

    let message = [];

    if(!form_validator.pizza_type_validator(type)){
        message.push('Invalid type of pizza');
    }

    if(!form_validator.phone_validator(phone)){
        message.push('Invalid phone number');
    }

    if(!form_validator.pizza_qtty_validator(qtty)){
        message.push('Invalid quantity of pizzas');
    }

    if(!form_validator.pizza_size_validator(size)){
        message.push('Invalid size of pizza');
    }

    if(!form_validator.pizza_address_validator(address)){
        message.push('Invalid address');
    }

    return message;
}