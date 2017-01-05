const express = require('express');
const router = express.Router();
const wrap = require('co-express');

const ordersCtrl = require('../controllers/orders');


router.get('/', wrap(function *(req , res , next) {
   let orders = yield ordersCtrl.orders();
   res.send(orders);
}))

module.exports = router;