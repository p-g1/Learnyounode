var fs = require('fs')
var http = require('http')

http.get(process.argv[2], function callback(response){
    response.setEncoding('utf8').on("data", function (data) {
        console.log(data);
    })
})