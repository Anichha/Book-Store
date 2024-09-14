const express = require("express");
const { Register, getAll, getById, updateData, deleteData } = require("../controller/bookController");
const bookRoute=express.Router();


//enter books
bookRoute.post("/register",Register);
//get all data
bookRoute.get("/getAll",getAll);
//get bt id
bookRoute.get("/get/:id",getById)
//update data
bookRoute.put("/update",updateData)
//delete data
bookRoute.delete("/delete/:id",deleteData);
module.exports=bookRoute;