const http = require('http');

http.createServer((res, req) => {
    console.log('it works');
}).listen(9000);