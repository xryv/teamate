// server/server.js
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log(`a user connected ${socket.id}`);
    socket.on('send-message', (msg) => {
        socket.broadcast.emit('receive_message',msg)
    },
    );
});

httpServer.listen(3001, () => {
    console.log('listening on *:3001');
});
