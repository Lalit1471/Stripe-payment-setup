const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res){
    res.write('Hello');
    res.end();
});

server.listen(port, function(error){
    if(error){
        console.log('The error is ', error);
    }
    else{
        console.log('listening to server', port);
    }
});