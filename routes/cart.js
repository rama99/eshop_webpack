const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/cart');
const wrap = require('co-express');


// get all items in the cart
router.get('/' , function(req , res , next) {

     let cart = req.session.cart || [];
     console.log('Items in cart==>', cart);
     res.status(200).send(cart);

})

// add a item to cart
router.post('/add' , function(req , res , next) {  

    let cart = req.session.cart || [];
    cart.push(req.body);
    req.session.cart = cart;
    console.log(' Session ID ' , req.sessionID , req.session.cart);    
    res.status(200).send(req.session.cart);

})

// remove a item from cart
router.delete('/remove/:pid' , function(req , res , next) {

    let pid = req.params.pid;
    let cart = req.session.cart;    
    let pos = cart.map(function(e) { return e.pid; }).indexOf(pid);
    cart.splice(pos , 1);
    console.log(' Session ID ' , req.sessionID);  
    req.session.cart = cart;
    res.send({});
})

// place an order
router.post('/order', wrap(function *(req , res , next) {

    yield cartCtrl.order(req , res , next);
    req.session.cart = [];
    res.send({'created':'ok'}); 

}));



module.exports = router;