var express = require('express');
var wrap = require('co-express');

// controllers
var category = require('../controllers/category');

var router = express.Router();

router.get('/' , wrap(function *(req , res , next) {

    try 
    {
        let categories = yield category.getCategories(req , res , next);
        res.send(categories);
    }
    catch(err) 
    {
        res.status(500).send(err);
    }

}));

router.get('/:id/products/:pid' ,  wrap(function *(req , res , next) {

    try 
    {
        console.log('url' , req.url);
        let product = yield category.getProduct(req , res , next);
        res.send(product);
    }
    catch(err) 
    {
        res.status(500).send(err);
    }

}))

router.get('/:id/products' , wrap(function *(req , res , next) {

    try 
    {
        console.log('/categories/:id/products');
        let products = yield category.getProducts(req , res , next);        
       console.log('After Products');
        res.send(products);
    }
    catch(err) 
    {
        
        res.status(500).send(err);
    }
}))



module.exports = router;
