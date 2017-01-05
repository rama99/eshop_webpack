var db;
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config.json');

const wrap = require('co-express');


function connect() {
   return MongoClient.connect(config.db.connection);  
}

// Get All Categories
module.exports.getCategories =  wrap(function * (req , res , next) {

// TODO read this from MongoDB NoSQL database
let categories = [
{id:1, name:"Books" , image:'./images/categories/books.jpg'},
{id:2, name:"Laptops" , image:'./images/categories/laptops.jpg'}
];

return yield new Promise( function(resolve  , reject) {
    resolve(categories);
});

})

// Get all products for a given category
module.exports.getProducts = wrap (function *(req , res , next) {
    console.log('Before Products - 1');
    db = yield connect();

      if(!db) {
          console.log('second try');
        connect();
    }

    let id = req.params.id;
    console.log('Before Products - 2');
    return yield db.collection('products').find({category:id}).toArray();
})

// Get a given product by product id
module.exports.getProduct = wrap(function *(req , res , next) {
    db = yield connect();
    let pid = req.params.pid;
    return yield db.collection('products').findOne({"_id": ObjectID(pid)});
})