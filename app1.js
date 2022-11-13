const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
    
})

app.get('/pritam', function (req, res) {

    const id = req.query.id

    res.send('Welcome to Midnapore' + id)
    
})

app.get('/pritam/:id', function (req, res) {
    const id = req.params.id
    res.send('Hey Pritam ' + id)
    
})

app.listen(9190, function(req, res){
    console.log('Running');
});
