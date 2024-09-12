const bookModel = require("../model/bookModel");

const Register= async (req,res)=>{
try {
    let data=req.body
    if (data.Tital&&data.Auther&&data.Publish_year)
    {
    let isUser= await bookModel.findOne(data);
    if(isUser){
        return res.status(400).send({message:"Book already exists"});
    }
    else{
        const book= new bookModel(req.body);
        await book.save();
        return res.status(201).send({message:"Data registered."})
    }
    }
    else{
        return res.status(400).send({message:"provide all the fields before submit."})
    }
} catch (error) {
    console.log("internal error "+error.message);
    
}
}
module.exports={Register}