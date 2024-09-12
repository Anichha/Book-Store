const mongoose= require("mongoose");
//schema declaration
const BookSchema= new mongoose.Schema({
    Tital:{type:String,required:true},
    Auther:{type:String,required:true},
    Publish_year:{type:Number,required:true} 
},{timestamps:true});

const bookModel=new mongoose.model("BOOKS",BookSchema);
module.exports=bookModel;