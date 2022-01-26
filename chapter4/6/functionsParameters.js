//create a function that will return the bigger number from two numbers

let a = 5;
let b = 7;

function findMax(x,z){
    if(x > z){
        return x;
    }
    else{
        return z;
    }
}

//uncoment this section to see the normal function call with 2 parameters
//let biggerOne = findMax(a,b);
//console.log(biggerOne);//output 7

//when we supply the function more arguments
let c = 8;
let biggerOne = findMax(a,b,c);
console.log(biggerOne);//output 7

//when we supply the function less arguments then its declaration
let biggerOne = findMax(a);
console.log(biggerOne);//undefined


//Default arguments

function multiplyFn(a, b = 1) {
    return a * b;
  }
let result1 = multiplyFn(5,2);
console.log(result1);// output: 10

let result2 = multiplyFn(5);
console.log(result2);// output: 5