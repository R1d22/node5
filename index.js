const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=test.txt");
    res.end('lvl2works');


    const imageStream = () => {
        const image = http.get('http://img2.akspic.ru/previews/0/3/2/5/6/165230/165230-mayak-voda-vyshka-drevesina-signalnaya_bashnya-550x310.jpg',
        (result) => {
            result.on('data', (chank) => {
                console.log('chank:', chank);
            });

            result.on('end',() => {
                console.log('all files has been delivered')
            }); 
        }
        );
    };


    imageStream()
}).listen(9000, function(){
    console.log("Server started at 9000");
});

