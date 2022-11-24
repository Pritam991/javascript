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
        // res.send("Login Successful...!");
    }
    else{
        res.end("invalid username")
    }
});

// route for dashboard
route.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})

    }
    else{
        res.send("Unauthorized User")
    }
})

// route for logout
router.get('/logout', (req,res)=>{
req.session.destroy(function(err){
    if(err){
        console.log(err);
    }
    else{
        res.render('base',{title:"Express",logout:"logout Successgully"})
    }
})
})

module.exports= router;