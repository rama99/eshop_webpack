var db;
const MongoClient = require('mongodb').MongoClient;
const ObjectId = MongoClient.ObjectId;
const config = require('../config/config.json');
const wrap = require('co-express');

function connect() {
   return MongoClient.connect(config.db.connection);
}

module.exports.Getproducts = wrap(function *(req , res , next) {
    db = yield connect();
    return yield db.collection('products').find({'name': {'$regex': req.query.search , $options: '-i'}}).toArray();
})