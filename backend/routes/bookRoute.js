const express = require("express");
const { Register } = require("../controller/bookController");
const bookRoute=express.Router();
//enter books
bookRoute.post("/register",Register);

module.exports=bookRoute;