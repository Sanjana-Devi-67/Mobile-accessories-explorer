const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id: 'YOUR_KEY_ID',
    key_secret: 'YOUR_KEY_SECRET'
});

// Create an order
module.exports.createOrder = async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, // Amount in paisa
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        const order = await instance.orders.create(options);
        res.json(order);
    } catch (err) {
        res.status(500).send(err);
    }
};
