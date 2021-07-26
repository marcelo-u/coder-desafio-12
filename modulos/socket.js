/**
 * Clase con la implementación de socket.io
 * para desacoplarla al server
 */
socketIO = require("socket.io");
class Socket {
  io;
  constructor(server) {
    this.io = socketIO(server);
  }
  broadcast(data) {
    this.io.on("connection", (socket) => {
      console.log("new connection", socket.id);
      /**
       * hago un io.sockets.emit para asegurarme que cualquier
       * cliente nuevo recibe la lista de todos los productos
       */
      this.io.sockets.emit("list:products", data);
    });
  }
  emit(data) {
    this.io.emit("list:products", data);
  }
}

module.exports = Socket;
