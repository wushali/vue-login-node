var express = require('express');
var router = express.Router();
router.get('/',function (req,res) {
    if(req.session.username){
        console.log(11)
        res.send({flag:true,content:req.session.username})
    }else{
        res.send({flag:false})
    }
})
module.exports=router