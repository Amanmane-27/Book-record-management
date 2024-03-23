const express = require ("express");
const {Books} = require ("../data/books.json")
const router = express.Router();


router.get('/',(req,res) => {
    res.status(200).json({
        success:true,
        message : "get all the Book ",
        data:Books
    }
    )
})
router.get("/:id",(req,res) => {
    const {id} = req.params;
    console.log(id)
    const book = Books.find((each) => (each.id===id));
    // const user1 = users[1];
    // console.log(user1)
    if(!book){
        return res.status(404).json({ 
            message:"user doesn't found "
        })
    }
    else
    {return res.status(200).json({
        message:"user found successfully",
        data:book,
    })}
})
router.post("/",(req,res)=>{
    const {id,name,surname,email,subcriptionType,subcriptionDate} = req.body;
    console.log('req.body =',res.body );

    const book=Books.find((each)=>each.id===id);
    if(book){
        return res.status(404).json(
            {
                success:false,
                messgae:'ID already exist',
            }
        )
    }
    Books.push({
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
        data:Books,
    })
})



module.exports=router;