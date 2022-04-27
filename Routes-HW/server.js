// I is done
// part II
const express = require("express")
// create server
const path = require("path");
const { isTypedArray } = require("util/types");
const server= express();
const bodyParser = require("body-parser")
const blogRouter = require("./blogRouter")
// const Members= require('./Members');
const logger = (req, res, next)=>{
    console.log("Hello");
    next();
};
// const app = express();
// app.get('/api/members', (req, res)=> res.json(members));
require("dotenv").config()
// III. port 
const PORT = process.env.PORT || 3000;
// middleware
server.use(bodyParser.json())
server.use("/books", blogRouter)
server.get("/",(req, res)=>{
    res.status(200).json({message:"I did it!OMG"})
})
// listen to port
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));





 