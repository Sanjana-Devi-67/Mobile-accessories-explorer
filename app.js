if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mongo_url = "mongodb://127.0.0.1:27017/website";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Product=require("./models/product.js")
const productRouter = require("./routes/product.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const cartRouter = require("./routes/cart.js");
const buyRouter = require("./routes/buy.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.get("/", (req, res) => {
    res.send("Root is working");
});


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(mongo_url);
}

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Routes
app.use("/products", productRouter);
app.use("/products/:id/reviews", reviewRouter);
app.use("/", userRouter);
app.use("/cart", cartRouter);
app.use("/checkout",buyRouter);

// Wrong route error
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!!"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).render("error.ejs", { message });
});

app.listen(8080, () => {
    console.log("Server is listening on port: 8080");
});
