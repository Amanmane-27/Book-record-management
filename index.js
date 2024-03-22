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


// {http://localhost:8081/users/:id}    Here :id is a variable parameter 
// it is in a request somit get can get accessed by req.params
app.get("/users/:id",(req,res) => {
    const {id} = req.params;
    console.log(id)
    const user = users.find((each) => (each.id===id));
    // const user1 = users[1];
    // console.log(user1)
    if(!user){
        return res.status(404).json({ 
            message:"user doesn't found "
        })
    }
    else
    {return res.status(200).json({
        message:"user found successfully",
        data:user,
    })}
})

app.post("/users",(req,res)=>{
    const {id,name,surname,email,subcriptionType,subcriptionDate} = req.body;
    console.log('req.body =',res.body );

    const user=users.find((each)=>each.id===id);
    if(user){
        return res.status(404).json(
            {
                success:false,
                messgae:'ID already exist',
            }
        )
    }
    users.push({
        id,
        name,
        surname,
        email,
        subcriptionType,
        subcriptionDate
    })
    return res.status(200).json({
        success:true,
        messgae:"updation complete",
        data:users,
    })
})

app.put("/users/:id",(req,res) => {
    const {id} =req.params;
    const {data} = req.body;
    const user = users.find((each) => { return each.id===id;});

    if(!user)
    {
        return res.status(404).json(
            {
                success:false,
                message:"ID does not exist"
            }
        )
    }
    

    //map() method return new array;
    // forEach() does not return anything wether it make changes is the existing array; 
    const updateUser = users.map((each) => {
        if(each.id===id){
            return {
                ...each,
                ...data
            }
        }
        return each;
    });
    return res.status(200).json({
        success:true,
        message:"updation complete",
        data:updateUser
    })
})

app.get('*',(req,res) => {
   
    res.status(400).json({
        message : "This route doesn't exist ",
        
    })
})

app.listen(PORT,() => {
    console.log(`Server running at ${PORT}`);
})