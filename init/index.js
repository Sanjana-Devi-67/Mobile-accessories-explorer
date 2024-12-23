const mongoose=require("mongoose");
const initData=require("./data.js");
const Product=require("../models/product.js");

const mongo_url="mongodb://127.0.0.1:27017/website"

main()
.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB=async()=>{
    await Product.deleteMany({});
    await Product.insertMany(initData.data);
    console.log("data was initialized")
}

initDB();
