const PORT = 4000;

const app = require('express');
const socket = require('socket.io');
const randomstring = require('randomstring');

const express = app();

const server = express.listen(PORT,()=>{
  console.log(`server started at http://localhost:${PORT}`);
})

const io=socket(server, {
  cors: {
    origin: '*',
  }
});

//ALL player info
let players = {};

let connections = 0;

//GAME VARIABLES
let choice1 = "";
let choice2 = "";

io.on("connection",(socket)=>{
    connections++;
    console.log("connection established", connections);

    //Create Game Listener
    socket.on('createRoom',(data) =>{
      const roomID = randomstring.generate({length: 4});
      socket.join(roomID);
      players[roomID]=data.name;
      socket.emit("newGame",{roomID:roomID});
    })

    //Join Game Listener
    socket.on('joinGame', (data) => {
        console.log('server data: ', data)
        socket.join(data.roomID);
        socket.to(data.roomID).emit("player2Joined",{p2name: data.name,p1name:players[data.roomID]});
        socket.emit("player1Joined",{p2name:players[data.roomID],p1name:data.name});
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