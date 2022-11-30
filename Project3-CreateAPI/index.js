const express = require('express');
const app = express()

const port = 3001

const dogs = {
    { name: "Ponchu", breed : "Labrador" },
    { name: "Dj", breed : "Dobarman" }
}

app.get("/",(req,res)=>{
    res.json(dogs)
})

app.get("/dogs/:id", (res,req)=>{
    res.json(dogs[parseInt(req.params.id) -1])
})

app.listen(port,()=>{
    console.log('Listen on port ${port}');
})

// CRUD = create , read, update, delete
