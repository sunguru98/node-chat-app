let socket = io();
socket.on("connect",()=>{
    console.log("Connected to server");
});
socket.on("disconnect",()=>{
    console.log("Disconnected from server");
});

socket.on("newMessage",(messageContents)=>{
    console.log(messageContents);
});

