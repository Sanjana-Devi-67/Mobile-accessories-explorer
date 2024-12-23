const User = require("../models/user");
const Product = require("../models/product");  // Correct import
const Cart = require("../models/cart");
const user = require("../models/user");

module.exports.add=async (req,res)=> {
    const userId = req.user._id;
    const productId = req.params.productId;

  
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
        cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.product.equals(productId));

    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.items.push({ product: productId, quantity: 1 }); 
    }

    await cart.save();
    res.redirect("/cart");

}

module.exports.view=async (req,res)=>{
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId }).populate("items.product");

    res.render("carts/cart.ejs", { cart: cart ? cart.items : [] });
}

module.exports.delete=async (req,res)=>{
    const { productId } = req.params;
    const userId = req.user._id; 
    let cart = await Cart.findOne({ userId });
    if (!cart) {
        cart = new Cart({ userId, items: [] });
    }
    const existingItem = cart.items.find(item => item.product.toString() === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({ product: productId, quantity: 1 }); 
    }

    await cart.save();
}
