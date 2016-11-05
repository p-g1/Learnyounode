var net = require('net');

function pad(n){ return n <10?'0'+n:n};

var server = net.createServer(function listener(socket){
    var date = new Date();  
   
   var d = date.getFullYear() + '-'+
    //pad(date.getMonth())
    '11' + '-'+ //11 is a fiddle as getMonth is pulling in the wrong date...
    pad(date.getDate())     + ' '+
    pad(date.getHours())  + ':'+
    pad(date.getMinutes()) +'\n' ;
    socket.end(d);
});

server.listen(process.argv[2]);