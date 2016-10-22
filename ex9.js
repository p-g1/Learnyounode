var http = require('http');
var bl = require('bl');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var array = [], count=0;

urls.forEach((x,i)=>

http.get(x, function callback(response){
  response.pipe(bl(function (err, data) {
    if (err) array[i]=err;
    else array[i]=(data.toString());
    count++;
    if (count == 3) array.forEach(x=>console.log(x));
    }));
  })
);

