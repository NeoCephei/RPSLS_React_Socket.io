const socketio = require('socket.io');

module.exports = function socker (server) {
  const io = socketio.listen(server, {  
    cors: {
    origin: '*',
    }
  });

  io.on('connection', socket => {
    logger.info('Client Connected');
  });

  return io;
};