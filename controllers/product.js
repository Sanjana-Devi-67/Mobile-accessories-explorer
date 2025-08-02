const Product=require("../models/product");

module.exports.index=async (req,res)=>{
    const allProducts=await Product.find({});
    res.render("products/index.ejs",{allProducts});
}

module.exports.renderNewForm=(req,res)=>{
    res.render("products/new.ejs");
 }

 module.exports.showProducts=async (req,res)=>{
    let {id}=req.params;
    const product= await Product.findById(id).
    populate({path:"reviews",
        populate:{
            path:"author"
        },
    }).populate("owner");
    if(!product){
        req.flash("error","Product does not exist!");
        res.redirect("/products")
    }
    console.log(product); 
    res.render("products/show.ejs",{product});
}

module.exports.createProduct = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newProduct = new Product(req.body.product);
    newProduct.owner = req.user._id;
    newProduct.image = { url, filename };
    await newProduct.save();
    req.flash("success", "New Product Created!!");
    res.redirect("/products");
}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        req.flash("error", "Product does not exist!");
        return res.redirect("/products");
    }
    let originalImageURL = product.image.url;
    originalImageURL = originalImageURL.replace("/upload", "/upload/w_250");
    res.render("products/edit.ejs", { product, originalImageURL });
}

module.exports.updateProduct = async (req, res) => {
    let { id } = req.params;
    let product = await Product.findByIdAndUpdate(id, { ...req.body.product });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        product.image = { url, filename };
        await product.save();
    }
    req.flash("success", "Product Updated!!");
    res.redirect(`/products/${id}`);
}

module.exports.destroyProduct = async (req, res) => {
    let { id } = req.params;
    let deletedProduct = await Product.findByIdAndDelete(id);
    // console.log(deletedProduct);
    req.flash("success", "Product Deleted!!");
    res.redirect("/products");
}