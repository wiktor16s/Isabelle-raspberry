class Io {
    io: any;
    constructor(server) {
        this.io = require('socket.io')(server);
    }

    startIo() {
        this.io.on('connection', function(socket){
            socket.on('turnOn', function(device){
                console.log("zapalam "+ device);
              });

              socket.on('turnOff', function(device){
                console.log("gaszę "+ device);
              });
          });
    }

}

export default Io;