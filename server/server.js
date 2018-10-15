const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
let port = process.env.PORT||3000;
const publicPath = path.join(__dirname,"../public");

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicPath));
io.on("connection",(socket)=>{
    console.log("A new user is connected !");
    socket.on("disconnect",()=>{
        console.log("User Disconnected");
    }); 

    socket.emit("newMessage",{
        from:"admin",
        message:"Welcome To the chat room",
        createdAt:new Date().getTime(),
    });

    socket.broadcast.emit("newMessage",{
        from:"admin",
        text:"A new user joined",
    });

    socket.on("createMessage",(message)=>{
        console.log("createMessage",message);
        io.emit("newMessage",{
            from:message.from,
            message:message.text,
            createdAt:new Date().getTime(),
        });
    });
})


server.listen(port,()=>{
    console.log(`Server connected to ${port}`);
})