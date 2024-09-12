const express=require("express");
const dbConnection = require("./db/dbConnect");
const bookRoute = require("./routes/bookRoute");
const app=express();
//middelware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//route
app.use("/books",bookRoute)
//api
app.get("/",(req,res)=>{
    res.send({message:"home page"});
})

//server 
app.listen(3000,"127.0.0.4",()=>{
    console.log("server started at http://127.0.0.4:3000");
    dbConnection();
})