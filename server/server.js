const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
let port = process.env.PORT||3000;
const publicPath = path.join(__dirname,"../public");
console.log(publicPath);

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicPath));
io.on("connection",(socket)=>{
    console.log("A new user is connected !");
    socket.on("disconnect",()=>{
        console.log("User Disconnected");
    })
})

server.listen(port,()=>{
    console.log(`Server connected to ${port}`);
})