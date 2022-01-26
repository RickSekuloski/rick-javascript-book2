//for in loop

let objPerson = { firstName: 'Denzel', lastName:'Washington',age: 67 }
for (const key in objPerson){
    console.log(`Key: ${key}, value: ${objPerson[key]}`)
}
  

//for in with arrays example

const itemsArray = [1 , 2, 3, 4];
let totalSum = 0;

//we can use for in here to loop through elements

for(const item in itemsArray) {
    totalSum += itemsArray[item];
}
console.log(totalSum); 

//let set a new property 
Array.prototype.newItem = 5;
console.log(itemsArray);

//Now the for in will not work properly because it will include the newItem that was added
let totalSum1 = 0;
for(let element in itemsArray){
    totalSum1 += itemsArray[element];
}
console.log(totalSum1);

//Another example
var emptyArray = [];
// set the forth element to 3, other three elements are `undefined`
emptyArray[3] = 3; 
//use classical for loop to go over the elements of the array
for (let i = 0; i <emptyArray.length; i++) {
    console.log(emptyArray[i]);    
}

//the for in will ignore the undefined
for (const item in emptyArray) {
    console.log(emptyArray[item]);
}