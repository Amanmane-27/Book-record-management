const express = require('express');
const {users} = require("../data/users.json")
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({
        success:true,
        data:users
    }

    )
})

// {http://localhost:8081/users/:id}    Here :id is a variable parameter 
// it is in a request somit get can get accessed by req.params
router.get("/:id",(req,res) => {
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

router.post("/",(req,res)=>{
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

router.put("/:id",(req,res) => {
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

router.delete("/:id",(req,res) => {

  
    const {id} = req.params;
    const user = users.find((each) => (each.id===id));
   console.log(user)
    if(!user){
        return res.status(404).json(
            {
                success:false,
                message:"user doesn't not found/ exist",
            }
        );
    }
// logic for deletion ;
const index =  users.indexOf(user);
console.log(index)
users.splice(index,1);
return res.status(200).json({
    success:true,
    message:"deletion completed",
    data:users
})


})

module.exports = router;