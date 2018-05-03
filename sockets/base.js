module.exports = function (io) {
  io.on('connection', function(socket) {
       console.log('-- a user is connected --');
       socket.on('chat msg', function (msg) {
         io.emit('chat message', msg);
       })
   });
}
