const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/', main.index);
router.get('/index', main.index);
router.get('/about', main.about);
router.get('/men', main.men);
router.get('/women', main.women);
router.get('/about', main.about);
router.get('/contact', main.contact);
router.get('/cart', main.cart);
router.get('/product-detail', main.product_detail);
router.get('/order-complete', main.product_detail);
router.get('/checkout', main.checkout);
router.get('/add-to-wishlist', main.add_to_wishlist);
module.exports = router;