const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateProduct } = require("../middleware.js");
const buyController = require("../controllers/buy.js");

router.route("/:productId")
      .get(isLoggedIn, wrapAsync(buyController.buy));

module.exports=router;