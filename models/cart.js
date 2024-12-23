const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("../models/product.js");
const User=require("./user.js");

const cartSchema = new Schema({
    productId: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },
    items: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        },
    ],
});

module.exports = mongoose.model("Cart", cartSchema);
