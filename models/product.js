const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js")
const User=require("./user.js");
const productSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        url:String,
        filename:String
    },
    price:{
        type:Number,
        required:true
    },
    reviews:
    [{
        type: Schema.Types.ObjectId,
        ref:"Review"
    }],
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
});

productSchema.post("findOneAndDelete",async(product)=>{
   if(product){
    await Review.deleteMany({_id:{$in:product.reviews}});
   }
})



const Product=mongoose.model("Product",productSchema);
module.exports=Product;
