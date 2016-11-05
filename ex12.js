var fs = require('fs');
var http = require('http');
var map = require('through2-map'); 


     var serve = map(function (chunk) {  
       return chunk.toString().toUpperCase();  
     });
     
     var server = http.createServer(function(request, response){
         if (request.method =='POST') request.pipe(serve).pipe(response);
     })

server.listen(process.argv[2]);