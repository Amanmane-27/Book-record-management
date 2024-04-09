const express = require ("express");
const {Books} = require ("../data/books.json");
const {users} = require("../data/users.json");

const router = express.Router();


router.get('/',(req,res) => {
    res.status(200).json({
        success:true,
        message : "successfully got all the Book ",
        data:Books
    }
    )
})
router.get("/issued",(req,res)=>{
    const userWithTheIssuedBook=users.filter((each) => {
        
        if(each.issuedBook) return each;
    });
    console.log(userWithTheIssuedBook)
    const issuedBooks = [];
    userWithTheIssuedBook.forEach((each) => {
        const book = Books.find((book)=> book.id == each.issuedBook )
        book.issuedBy = each.name;
        book.issueddate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);
    })
    if(issuedBooks.length===0){
        return res.status(404).json({
            success:false,
            message: "No book have been found issued yet..."
        })
    }
    return res.status(200).json({
        success:true,
        message:"Issued books found successFully",
        data:issuedBooks,
    })
})
router.get("/:id",(req,res) => {
    const {id} = req.params;
    console.log(id)
    const book = Books.find((each) => (each.id===id));
    // const user1 = users[1];
    // console.log(user1)
    if(!book){
        return res.status(404).json({ 
            success:false,
            message:"Book doesn't found... "
        })
    }
    else
    {return res.status(200).json({
        message:"Book found successfully",
        data:book,
    })}
})
router.post("/",(req,res)=>{
    const {id,name,author,genre,published,price} = req.body;
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
        author,
        genre,
        published,
        price,
    })
    return res.status(200).json({
        success:true,
        messgae:"updation complete",
        data:Books,
    })
})




module.exports=router;