const express = require("express");
const router = express.Router();

//router aek object hai jo Router se nikala gaya  tho uss object ku method likhre  ex- router.get,post,delete
//uss methods ke ander codes likhre 

//Posts

//Index
router.get("/",(req,res) => {
    res.send("Get for posts");
});
//Show 
router.get("/:id",(req,res) => {
    res.send("Get for post id ");
});
//POST 
router.get("/",(req,res) => {
    res.send("Post for posts ");
});
//DELETE
router.get("/:id",(req,res) => {
    res.send("DELETE for post id ");
});


module.exports = router;
//router object ku export karke server.js me use karre with parent path ie-/users