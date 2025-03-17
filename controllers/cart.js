const User = require("../models/user");
const Product = require("../models/product");  // Correct import
const Cart = require("../models/cart");
const user = require("../models/user");

module.exports.add=async (req,res)=> {
    const userId = req.user._id;
    const productId = req.params.productId;

    // Find or create a cart for the user
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
        cart = new Cart({ user: userId, items: [] });
    }

    // Check if the product already exists in the cart
    const existingItem = cart.items.find(item => item.product.equals(productId));

    if (existingItem) {
        existingItem.quantity += 1; // Increment the quantity if it exists
    } else {
        cart.items.push({ product: productId, quantity: 1 }); // Add a new product
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
    const userId = req.user._id; // Assuming req.user contains authenticated user data
    // Fetch or initialize the user's cart
    let cart = await Cart.findOne({user: userId});
    if (!cart) {
        cart = new Cart({ user: userId, items: [] });
    }

    // Check if the product already exists in the cart
    const existingItem = cart.items.find(item => item.product.toString() === productId);
    if (existingItem) {
        existingItem.quantity -= 1; // Increment quantity if already in cart
        if(existingItem.quantity==0){
            cart.items=cart.items.filter(item => item.product.toString() != productId);
        }
    }

   
    // } else {
    //     cart.items.push({ product: productId, quantity: 1 }); // Add new product
    // }

    await cart.save();
    res.redirect("/cart")
}
