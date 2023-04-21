const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require('./utils/messages');
const {
    userJoin, getCurrentUser, userLeave,
    getRoomUsers } = require('./utils/users');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botname = "bernard boom";

io.on('connection', socket => {
    socket.on('joinRoom', ({username, room }) => {

        const user = userJoin(socket.id, username, room);
        socket.join(user.room);


        socket.emit('message', formatMessage(botname,'kom maar lekker chillen makker!'));

        socket.broadcast.to(user.room).emit('message', formatMessage(botname,`beestje ${user.username} is aanwezig!`));
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users:getRoomUsers(user.room)
    });
    });



socket.on('chatMessage', (msg)=> {
 const user = getCurrentUser(socket.id);
 
    io.to(user.room).emit('message', formatMessage(user.username, msg));
});

socket.on('disconnect', () => {
   
    const user = userLeave(socket.id);
    if(user) {
        io.to(user.room).emit(
            'message', formatMessage(botname,`het beestje ${user.username} is het bos ingerend`));
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users:getRoomUsers(user.room)
        });
    }
});

});
// Set static folder
app.use(express.static(path.join(__dirname, "public")));
    app.use(express.static(__dirname + '/views'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));