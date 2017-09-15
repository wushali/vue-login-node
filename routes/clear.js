var express=require("express");
var router=express.Router();
router.get("/",function (req,res) {
    console.log(11)
    delete req.session.username
    res.end()
})
module.exports=router