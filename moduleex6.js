var fs = require('fs')

module.exports = function(div, ext, callback){
    fs.readdir(div, function(err, list){
    if (err) return callback(err);
    else {
        var data = list.filter(x=>x=x.slice(x.length-(ext.length+1))=='.'+ext);
        callback(null, data);
    }
  });
  
}