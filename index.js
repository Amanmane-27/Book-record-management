const express = require("express");
// import users from "./data/users.json"
const {users} = require("./data/users.json");

const app =express();
// const hostname = '127.0.0.1';

const PORT = 8081;


app.use(express.json());


app.get('/',(req,res) => {
    
    res.status(200).json({
        message : "sever is up and running",
        data:"hey"
    })
})

app.get('/users',(req,res) => {
    res.status(200).json({
        success:true,
        data:users
    }

    )
})



app.get('*',(req,res) => {
   
    res.status(400).json({
        message : "This route doesn't exist ",
        
    })
})

app.listen(PORT,() => {
    console.log(`Server running at ${PORT}`);
})