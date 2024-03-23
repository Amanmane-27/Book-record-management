const express = require("express");
const userRouter = require("./Routes/Users.js");
const bookRouter = require("./Routes/Book.js");
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

app.use("/users",userRouter)
app.use("/books",bookRouter)


app.get('*',(req,res) => {
   
    res.status(400).json({
        message : "This route doesn't exist ",
        
    })
})

app.listen(PORT,() => {
    console.log(`Server running at ${PORT}`);
})