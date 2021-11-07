const PORT = 4000;

const app = require('express');
const socket = require('socket.io');
const randomstring = require('randomstring');

const express = app();

const server = express.listen(PORT,()=>{
  console.log(`server started at http://localhost:${PORT}`);
})

const io = socket(server, {
  cors: {
    origin: '*',
  }
});

//ALL player info
let players = {room: '', player1: '', player2: ''};
let connections = 0; //I have to delete this one

//GAME VARIABLES
let choice1 = "";
let choice2 = "";

io.on("connection",(socket)=>{
    connections++;
    console.log("connection established", connections);

    //Create Game Listener
    socket.on('createRoom',({name}) =>{
      const roomID = randomstring.generate({length: 4});
      socket.join(roomID);
      players.room = roomID
      players.player1 = name
      socket.emit('newGame', {roomID});
    })

    //Join Game Listener
    socket.on('joinGame', ({name, roomID}) => {
        if (Object.values(players).includes(roomID)) {
          socket.join(roomID);
          players.player2 = name;
          io.to(roomID).emit('startGame', players)
        } else {
          socket.emit('wrongRoom', roomID);
        }
    });
})












// const express = require("express");
// const { createServer } = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: '*',
//   }
// });

// io.on("connection", (socket) => {
//   console.log('connected');
// });

// httpServer.listen(4000);