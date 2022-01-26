//Functions in JavaScript

// Declare a Function with two parameters
function total(x, y) {
    return (x + y);
}
//function without a parameter list

function simpleFn(){
   return 'No Parameters';
}

//call the total function passing two arguments 4 and 9
let storeResult = total(4,9);
console.log(storeResult);

//lets pass two string aruguments instead of numbers
let storeResult1 = total('4','9');
console.log(storeResult1);

//function without return
function noReturnValue(){
    console.log('No return statement');
}
let storage = noReturnValue();
console.log(storage);
