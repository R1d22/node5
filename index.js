const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=test.txt");
    res.end('lvl2works')
}).listen(9000, function(){
    console.log("Server started at 9000");
});
