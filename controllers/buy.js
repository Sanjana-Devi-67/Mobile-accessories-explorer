const Product = require("../models/product.js");
module.exports.buy=async (req,res)=>{
        const  { productId } = req.params;
        const product = await Product.findById(productId);
        res.render("buy/buy.ejs", { product });
}