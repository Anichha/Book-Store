const bookModel = require("../model/bookModel");

const Register= async (req,res)=>{
try {
    let data=req.body
    if (data.Tital&&data.Auther&&data.Publish_year)
    {
    let isUser= await bookModel.findOne({Tital:data.Tital});
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
    res.status(400).send({error:"inernal server error"+error.message})

}
}
//get all books
const getAll=async (req,res)=>{
    try {
        const books=await bookModel.find();
        return res.status(201).send({allBooks:books});
        
    } catch (error) {
        console.log("internal error "+error.message);
        res.status(400).send({error:"inernal server error"+error.message})
    }
}
//get by id
const getById=async (req,res)=>{
try {
    const {id}=req.params;
    const book=await bookModel.findById(id);
    if(book) return res.status(201).send(book);
    else return res.status(400).send({message:"book dosent exist"});

} catch (error) {
    res.status(400).send({error:"inernal server error"+error.message})
}
}
// update data
const updateData=async (req,res)=>{
try {
    console.log(req.query);
    
    if(req.query){
        const book=await bookModel.findOne(req.query);
        if(book){
            const update=await bookModel.updateOne({...req.query},{$set:{...req.body}});
            return res.status(201).send({message:"data updated successfully"})
        }
        else{
            res.status(400).send({message:"user not found."})
        }
    }
    else{
        res.status(400).send({message:"provide details"});
    }
} catch (error) {
    res.status(400).send({error:"internal Server error"+error.message})
}
}
/// delete data
const deleteData=async (req,res)=>{
 try {
    const{id}=req.params;
    const response=await bookModel.findByIdAndDelete(id);
    if(response)
    {
        return res.status(200).send({ message: "book detail deleted" })
    }
    else{
        return res.status(404).send({ error: "user not found" })
    }
 } catch (error) {
    return res.status(500).send({ error: "Internal Server Error", msg: error.message })

 }
}
module.exports={Register,getAll,getById,updateData,deleteData}