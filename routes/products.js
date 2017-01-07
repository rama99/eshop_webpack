const express = require('express');
const router = express.Router();
const wrap = require('co-express');

const productsCtrl = require('../controllers/products');

router.get('/' , wrap(function * (req , res , next) 
{
   try 
   {
        let products =  yield productsCtrl.Getproducts(req , res , next);
        res.json(products);
   }
    catch(err) 
    {        
        res.status(500).send(err);
    }

}))

module.exports = router;