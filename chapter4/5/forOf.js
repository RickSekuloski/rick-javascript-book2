//for of loop

//calcluate the total
let numbersArray = [1,2,3,4,5,6,7,8,9,10];
let total = 0; 
for(let element of numbersArray ) {
    total += element;
}
console.log(total); // => 55

//print out each element from the string array
let stringsArray = ['Hi ',' There ', ' How ', ' Are ', ' You ', '?'];
let wholeSentence = '';
for(let element of stringsArray ) {
    wholeSentence += element;
}
console.log(wholeSentence);

let testObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}
//Object.keys
console.log(Object.keys(testObject));

//Iterate over the property names of the object
 
let propertyNames = "";
for(let names of Object.keys(testObject)) {
    propertyNames += names; 
}
console.log(propertyNames); // => "abcd"

let testObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}
//key:value pairs using the Object.entries() method

let testObject1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}
for(let [k,v] of Object.entries(testObject1)) {
   console.log('Key: '+k);
   console.log('Value: '+v);
}

//for/of with Unicode characters
let message = 'I 😍 JavaScript';

for (let m of message){
    console.log(m);
}


 
