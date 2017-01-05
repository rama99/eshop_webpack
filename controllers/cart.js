var db;
const  MongoClient = require('mongodb').MongoClient;
const  ObjectID = require('mongodb').ObjectID;
const config = require('../config/config.json');
const wrap = require('co-express');


module.exports.order = wrap(function *(req , res , next) {

    db = yield connect();
    req.body.items = req.session.cart;
    yield db.collection("orders").insertOne(req.body);

});

function connect() {
    return MongoClient.connect(config.db.connection);
}