console.log("AJAX tutorial");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('You have click the fetchBtn');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET', 'content/content.txt', true);

    // use this for post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.setRequestHeader('content-type', 'application/json');
    // what to do on progress
    xhr.onprogress = function(){
        console.log('on progress');
    }
    xhr.onload = function(){
        console.log(this.responseText);
    }
    //send the request
    params = ` {"name" : "test", "salary" :"123", "age":"21"}`;
            xhr.send(params);
    console.log("we are done");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log('You have clicked the pop handler');
}

//Instantiate an xhr object
const xhr = new XMLHttpRequest();

//open the object
xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

// what to do when response is ready
xhr.onload = function(){
    if(this.status === 200){
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.getElementById('list');
        str = "";
        for(key in obj){
            str += `<li>${obj[key].employee_name} </li>`;
        }
        list.innerHTML = str;
    }
    else{
        console.log("some errror occured");
    }
}
//send the request
xhr.send();
console.log("we are done fetching employees !!");
