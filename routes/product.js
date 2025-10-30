const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Product = require("../models/product.js");
const { isLoggedIn, isOwner, validateProduct } = require("../middleware.js");
const productController = require("../controllers/product.js");


router.route("/")
    .get(wrapAsync(productController.index))
    .post(isLoggedIn,
        validateProduct,
        wrapAsync(productController.createProduct)
    );

// new route
router.get("/new", isLoggedIn,productController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(productController.showProducts))
    .put(isLoggedIn, isOwner, validateProduct, wrapAsync(productController.updateProduct))
    // .delete(isLoggedIn, isOwner, wrapAsync(productController.destroyProduct));

// edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(productController.renderEditForm));

module.exports = router;
