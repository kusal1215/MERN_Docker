const mongoose = require("mongoose")

const Items = mongoose.Schema({
    product_name: {
        type: String,
    },
    product_qty: {
        type: String,
    },
    product_price: {
        type: String,
    },
    product_des: {
        type: String,
    },
});

module.exports = mongoose.model("Items", Items);