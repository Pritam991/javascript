const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.use(express.static('public'));

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/dinoname', async(req,res)=>{
    //run code stuff
    const fetchApi =  await fetch(
        'https://dinoipsum.com/api/?format=json&words=10&paragraphs=3',
        {
            method: 'GET',
            headers: {
                'x-rapdapi-key' : 'd941c8fdebmshf34b43c3e6fd551p14e7d1jsn39192b780730',
                'x-rapidal-host' : 'alexnormand-dino-ipsum.p.rapidapi.com',
            },
        }
    );
    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);

});