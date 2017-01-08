const express = require('express');

// express middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favIcon = require('serve-favicon');
const logger = require('morgan');
const responseTime = require('response-time');
const compression = require('compression');
const session = require('express-session');
const csurf = require('csurf');
const timeout = require('connect-timeout');
const helmet = require('helmet');
const expressValidator = require('express-validator');
const methodOverride = require('method-override');
//const json = require('json');

//var csrfProtection = csurf();

// view engine
const ejs = require('ejs');

// routes
const index = require('./routes/index');
const category = require('./routes/category');
const cart = require('./routes/cart');
const orders = require('./routes/orders');
const products = require('./routes/products');


// core module path
const path = require('path');


module.exports = function(app) {   
    
    //app.disable('etag');
    
    // compression middleware , size in kb at which to start compression
    app.use(compression({threshold: 1}));

    // methodOverride  middleware configuration
    app.use(methodOverride('X-HTTP-Method-override'));
    app.use(methodOverride('_method'));

    // helemet middleware , for adding security related headers to http response
    app.use(helmet());

    app.use(favIcon(path.join(__dirname , '/client/favicon.png')));

    // cookie parser
    app.use(cookieParser());

    // express session middleware , this should be after cookie parser
    app.use(session({secret:'clickclick'}));

    app.use(session({ 
    secret: 'clickclick',
    cookie: {
        path:'/',
        httpOnly:true,
        maxAge:null
    }
    }));

    // csurf should be after express session middleware
    // app.use(csurf());

    // CORS middleware
    app.use(function(req, res, next) {
                        res.header("Access-Control-Allow-Origin", "*");
                        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                        next();
    });

    // set view engine
    app.set('view engine' , ejs);

    // set views path
    app.set('views' , './views');

    app.engine('html' , require('ejs').renderFile);

    // static files path
    app.use(express.static('node_modules')); 
    
    // static files path
    app.use(express.static('client'));  

   

    // body parsing
    app.use(bodyParser.json());
    app.use(bodyParser(bodyParser.urlencoded({extended: false})));

    // middleware response time, sets  X-RESPONSE-TIME response header
    //app.use(responseTime({digits:4}));

    // Disable X-Powered-By , for security
    app.set('x-powered-by', false);

    // logger
    console.log('Environment ==>', app.get('env'));
    app.use(logger('dev'));

    // routes
    app.use(['/acategories/:id/products/:pid', '/acategories/:id/products' , '/acart' , '/about' ,'/aorders', '/' ] , index);
           
    app.use(['/categories'] , category);

    app.use('/cart' , cart);

    app.use('/orders' , orders);

    app.use('/products' , products);

    // 404 route
    app.use( function( req , res , next) {
        console.log(req.url);
         res.render('404.html');
    })

    // error handling
    app.use( (err , req , res , next) => {
        res.send(err.stack);
    })

}