const { default: fetch } = require("node-fetch");

let p = fetch("https://goweather.herokuapp.com/weather/paris")

p.then((response) =>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((value2)=>{
    console.log(value2);
})