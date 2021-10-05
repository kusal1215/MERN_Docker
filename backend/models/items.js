const mongoose = require("mongoose")

const Items = mongoose.Schema({
    product_name: {
        type: String,
    },
});

module.exports = mongoose.model("Items", Items);