const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const session = require("express-session");
const{v4: uuidv4} = require("uuid");

const app = express();

const port = process.env.PORT||3110;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine','ejs');

//load static assets
app.use('/static',express.static(pah.join(__dirname,'public')))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

//home route
app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"});
})

app.listen(port,() => {
console.log("Listening to the server on http://localhost:3110");
});