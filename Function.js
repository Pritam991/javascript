/* Old method to create a function in javascript */
function onePlusAvg(x , y){
    return 1+ (x + y) / 2 ;
}

let a = 10;
let b =20;
let c =30;
console.log("one plus average of a and b is" , onePlusAvg(a, b))
console.log("one plus average of b and c is" , onePlusAvg(b, c))
console.log("one plus average of a and c is" , onePlusAvg(a, c))

/* New method to create a function in javascript -- called arrow function */

const hello = () => {
    console.log("Hello World");
    return "Hi";
}

const sum = (p, q) => {
    return p+q
}
let v = hello();
console.log(v);