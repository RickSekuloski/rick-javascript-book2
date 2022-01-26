//JavaScript Arrays 

const myArray = [1,2,3,4,5,6];
const namesArray = ['Tom','Andy','Jason','Chris','Loki','Luk'];
const mixedArray = [1,true,'Andy',{x:1,y:2}];
//gives you the length of the array
console.log(myArray.length);

//emtpy array using array literals
let emptyArray = [];

//trailing comma
let trailingComma = [1,3,5,];
console.log(trailingComma);

//no value in between commas
let newArray = [1,,3,4,5];
console.log(newArray);
console.log(newArray.length);

//Create Array using new Array() constructor

//empty array
let array1 = new Array();//constructor without any arguments passed
console.log(array1.length);//0
//single argument constructor 
let array2 = new Array('Tom');//constructor with one arguments called Tom
console.log(array2.length);//1
//multiple argument constructor 
let array3= new Array('Tom','Jerry');//constructor with multiple arguments passed
console.log(array3.length);//2

//Spread Operator (...)

const firstArray = [1,2,3,4,5];
console.log('The elements from the first array '+ firstArray);
console.log('The length of the first is: '+ firstArray.length);

//Use the spread operator to create new array

const secondArray = [...firstArray];
console.log('The elements of the second array'+ secondArray);
console.log('The length of second array is: '+ secondArray.length);


//Accessing the elements of the array
let carNames = ['Toyota','Cadillac','Porsche','Bentley','Ford'];
console.log(carNames);
let Toyota = carNames[0];//:Toyota
let Cadillac = carNames[1];//:Cadillac
let Porsche = carNames[2];//:Porsche
let Bentley = carNames[3];//:Bentley
let Ford = carNames[4];//:Ford
console.log(Toyota);
//access non-existent element
console.log(carNames[5]);//undefined

//add new element on the last position
carNames[5]= 'Mercedes';

//Multidimensional Arrays
let myRoutine = [
    ['Work', 7.6],
    ['Eat', 3],
    ['Commute', 1],
    ['Family Time',4.4],
    ['Watch Movies', 1],
    ['Sleep', 7]
];
//How to access How Many Ours I sleep
let sleep = myRoutine[4];
console.log(sleep);//This will return the entire sub array ['Sleep', 7];
let routine = sleep[0];//Sleep
let sleepHours = sleep[1];//7
//Or we can get this straight from myRouting if we use double brackets
console.log(myRoutine[4][1]);//Output:7