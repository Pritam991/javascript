//program to add n numbers
let sum = 0;
let n = prompt("Enter a number")
n= Number.parseInt(n);

for (let i = 0; i < n; i++) {
  
    sum+=(1+i);
    
}
console.log("sum of first " + n + " natural numbers is " + sum)