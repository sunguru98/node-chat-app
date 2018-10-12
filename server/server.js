const express = require("express");
const path = require("path");

let port = process.env.PORT||3000;
const publicPath = path.join(__dirname,"../public");
console.log(publicPath);


let app = express();
app.use(express.static(publicPath));
app.listen(port,()=>{
    console.log(`Server connected to ${port}`);
})