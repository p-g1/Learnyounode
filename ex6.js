var fs = require('fs')
var mymodule = require('./moduleex6.js') 
var div=process.argv[2];
var ext=process.argv[3];

//console.log(mymodule());
mymodule(div, ext, function(err, data){
    
if (err) console.log(err);
else data.forEach(x=>console.log(x));
});
        