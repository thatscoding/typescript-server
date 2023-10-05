import express from 'express'

const server = express();


server.get("/",(req,res)=>{
    res.json({message:"Server from express"})
})

server.listen(8000,()=>{
        console.log("server started at http://localhost:8000");
})