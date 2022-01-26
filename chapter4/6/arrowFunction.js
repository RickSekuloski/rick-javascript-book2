//Arrow function new features of ES6
//Let's decompose a "traditional function" down to the simplest "arrow function" 

// Traditional Function

function addFun (a){
  return a + 100;
}

// Arrow Function 
let addFun = a => a + 100;
//call the arrow function
let result = addFun(10);
console.log(result);


//arrow function with no parameters
let noParams = () => 'No Parameter function';

//call the arrow function
let storeResult = noParams();
console.log(storeResult);


//multiple lines of code in the body
// Traditional Function
function additionFn (x, y){
    let result = x + y;
    return 'This is the result :'+ result;
  }
let store1 = additionFn(3,4);
console.log(store1);
  
// Arrow Function
let additionFn1 = (x, y) => {
    let result = x + y;
    return 'This is the result :'+ result;
}
let store2 = additionFn1(3,4);
console.log(store2);

//This is OK
let multiFn = (x, y) => {
    let result = x * y;
    return 'This is the result :'+ result;
}
//This will give you an error
let multiFn = (x, y)
=> {
    let result = x * y;
    return 'This is the result :'+ result;
}

//arrow functions and arrays
const carBrands = ["Saab", "Volvo", "BMW"];

// Arrow function syntax
// forEach((element) => { ... } )
// forEach((element, index) => { ... } )
// forEach((element, index, array) => { ... } )
console.log('Printing only the elements of the array');
carBrands.forEach(element => {
    console.log(element);
});
console.log('Printing the elements of the array and its index positions');
carBrands.forEach((element,index) => {
    console.log(element , index);
});
console.log('Printing the elements of the array, its index positions and the entire array');
carBrands.forEach((element,index,array) => {
    console.log(element , index, array);
});