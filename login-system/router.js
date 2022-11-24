var express = require("express");
var router = express.route();

const credential = {
    email :"admin@gmail.com",
    password:"admin123"
}
//login user
router.post('/login',(req,res)=>{
    if(req.body.email== credential.email && req.body.password==credential.password){
        req.session.user = req.body.email;
        res.redirect('/dashboard');
    }
    else{
        res.end("invalid username")
    }
})