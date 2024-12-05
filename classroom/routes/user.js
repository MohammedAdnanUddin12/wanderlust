const express = require("express");
const router = express.Router();

//router aek object hai jo Router se nikala gaya  tho uss object ku method likhre  ex- router.get,post,delete
//uss methods ke ander codes likhre 


//Index - users
router.get("/",(req,res) => {
    res.send("Get for users");
});
//Show - users
router.get("/:id",(req,res) => {
    res.send("Get for user id ");
});
//POST - users
router.get("/",(req,res) => {
    res.send("Post for users ");
});
//DELETE - users
router.get("/:id",(req,res) => {
    res.send("DELETE for user id ");
});

module.exports = router;
//router object ku export karke server.js me use karre with parent path ie-/users