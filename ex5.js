var fs = require('fs')

    fs.readdir(process.argv[2], function callback(err, list) {  
        if (err) return console.error(err);
        else {
            list.filter(x=>x=x.slice(x.length-(process.argv[3].length+1))=='.'+process.argv[3]).forEach(x=>console.log(x));
        }
    })