/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Server } from 'socket.io';

const io = new Server(5001, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
});

let onlineUsers = [];

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    // écouté la connexion
    socket.on('addNewUser', (userId) => {
        if (!onlineUsers.some((user) => user.userId === userId)) {
            onlineUsers.push({ userId, socketId: socket.id });
        }
        console.log('onlineUsers', onlineUsers);
        io.emit('getOnlineUsers', onlineUsers);
    });

    // add new message
    socket.on('sendMessage', (message) => {
        const user = onlineUsers.find((u) => u.userId === message.recipientId);
        if (user !== undefined) {
            io.to(user.socketId).emit('getMessage', message);
        }
    });

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
        io.emit('getOnlineUsers', onlineUsers);
    });
});
