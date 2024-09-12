const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
 const mongoUrl=process.env.Url
 
const dbConnection= async ()=>{
    try {
        await  mongoose.connect(`${mongoUrl}/`);
        console.log("db connected at"+mongoUrl);
        
    } catch (error) {
        console.log("DB not connected"+error.message);
        
    }
}
module.exports=dbConnection;
 
