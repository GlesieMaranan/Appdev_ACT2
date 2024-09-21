const { checkout } = require("../routes/router");

const main = {
    index:(req, res) =>{
        res.render('index');
    },
    about:(req, res) =>{
        res.render('about');
    },
    men:(req, res) =>{
        res.render('men');
    },
    women:(req, res) =>{
        res.render('women');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contact:(req, res) =>{
        res.render('contact');
    },
    cart:(req, res) =>{
        res.render('cart');
    },
    product_detail:(req, res) =>{
        res.render('product_detail');
    },
    order_complete:(req, res) =>{
        res.render('order_complete');
    },
    checkout:(req, res) =>{
        res.render('checkout');
    },
    add_to_wishlist:(req, res) =>{
        res.render('checkout');
    },
}


module.exports = main;