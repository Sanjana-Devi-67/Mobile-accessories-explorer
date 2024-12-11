const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Product = require("../models/product.js");
const { isLoggedIn, isOwner, validateProduct } = require("../middleware.js");
const cartController = require("../controllers/cart.js");


router.route("/")
   .get(isLoggedIn, wrapAsync(cartController.view));


router.route("/:productId")
   .post(isLoggedIn, wrapAsync(cartController.add))  
   .delete(isLoggedIn,wrapAsync(cartController.delete));


module.exports = router;