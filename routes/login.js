var express = require('express');
var router = express.Router();
let mongodb=require("mongodb")
let mongoCT=mongodb.MongoClient;
router.post("/",function(req,res,next){
    mongoCT.connect("mongodb://127.0.0.1:27017/test",(err,db)=>{
        let user=db.collection("user");
    user.find({username:req.query.username}).toArray((err,result)=>{
        if(result.length){
            if(req.query.password==result[0].password){
                req.session.username=req.query.username;
                res.send({flag:true,msg:"登录成功"})
            }else{
            res.send({flag:false,msg:"mima错误"})
        }
    }else{
        res.send({flag:false,msg:"账号错误"})
    }
})
})
})
module.exports=router
