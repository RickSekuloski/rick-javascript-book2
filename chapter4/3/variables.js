//Variables


//camel case convention  user names
let userNames;

//Declare a variable
let myName;
let myAge;

//Initializing variable 
myName = 'Andy';
myAge = 33;

//Declare and Intiialize
let myLastName = 'Mcalister'

//function scope
function getDate(){
    var todayDate = new Date();
    return todayDate;
}
console.log(todayDate);
//this will throw reference error because the todayDate variable
// is only visible inside the getDate function; not outiside that funciton

var a = 5; // this variable is outside function and belongs to the global scope
globalThis.a = 5; // we can achieve the same result if we use globalThis.a and set the variable

//variable hoisting

user = 'Tony';
var user;

console.log(user);//will print out Tony
/* 
This is equivalent as we type
*/
var user;
user = 'Tony';
console.log(user);


//let variable declaration
let actorName = 'Tom';
let actorLastName = 'Cruise';


//let vs var variable declaration
function first() {
    var x = 1;//declare and initialize variable x to 1
    {
      var x = 2;  // same variable, just we assign new value to x!
      console.log(x);  // Now x is: 2
    }
    console.log(x);  // We print the last value assigned to X and that is: 2
  }
  
  function second() {
    let x = 1;// declare and initialize variable x to 1
    {
      let x = 3;  // different variable, this is because of the block scope, the above x is not same as this x
      console.log(x);  // It will print out the value of x declared inside the curly brackets: this is 3
    }
    console.log(x);  // Here we have access to the X variable that is declared on top. We don't have access to the X defined inside the second block: the output is 1
  }

  //Const
  const fixedPrice = 9.99;
  const myName;