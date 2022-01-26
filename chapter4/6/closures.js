// JavaScript closure
function outerFun() {
    let x = 10;
    function innerFun() {
         
          let  y = 20; 
          console.log(x+y);
     }
    return innerFun;
 }
let firstOuter = outerFun(); //first invocation
let secondOuter = outerFun(); //second invocation
console.log(firstOuter);
console.log(secondOuter);

//the both variables are functions and we can confirm this using the typeOf
console.log(typeof(firstOuter)); //firstOuter is of type function
console.log(typeof(secondOuter)); //secondOuter is of type function


//closures in JavaScript
//we can execute functions
firstOuter();//we invoke the function using () ; will print out 30
firstOuter();//we again invoke the function ; will print out 30

//if we want to see the Closure element we can use console.dir instead of console.log
console.dir(firstOuter);