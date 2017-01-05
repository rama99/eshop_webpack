const express = require('express');
const cluster = require('cluster');
// number of cpus in the server
const numCPUs = require('os').cpus().length;
const app = express();

/*if(cluster.isMaster) {
    console.log('Fork %s worker(s) from master' , numCPUs);

    for(var idx = 0 ; idx < numCPUs ; idx++) {
        cluster.fork();
    }

    cluster.on('online' , function(worker) {
        console.log('Worker is running on %s pid', worker.process.pid);
    })

    cluster.on('exit' , function(worker , code , signal) {
        console.log('Worker with %s is closed ' , worker.process.pid);
    })

}
else {*/

    // express configuration
    require('./express')(app);

    let port = process.env.port || 3000;
      
    app.listen(port , () => {
     //console.log('Worker (%s) is now listining to http://localhost:%s' , cluster.worker.process.pid , port); 
     console.log('Worker  is now listining to http://localhost:%s'  , port);
    })
//}