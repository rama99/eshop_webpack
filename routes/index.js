var express = require('express');

var router = express.Router();


router.get('/' , function(req , res , next) {
   
     try 
    {
        req.session.test = req.session.test || [];
        console.log('/ Session ID ' , req.sessionID ,  req.session.test);  
        res.render('index.html');
    }
    catch(err) 
    {
        res.status(500).send(err);
    }
})



module.exports = router;