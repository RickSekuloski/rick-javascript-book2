//Objects

let user = {
    userName: 'Rick',
    age: 33
};

//We can get the object properties using the dot notation
let userName = user.userName; // also we can store these properties in a variables
let userAge = user.age;

//print out the object properties and values
console.log(userName);
console.log(userAge);

//adding new properties to the existing object
user.occupation = 'Developer';
user.isWorking = true;
//print the entire object
console.log(user);
//modify the age property
user.age = 30;
console.log('User Object after modifying the age value');
console.log(user);

//delete object property
delete user.occupation;
console.log('User Object after deleteing the ocupation');
console.log(user);

const rick = { name :'Rick Sekuloski'};
rick.age = 33;
console.log(rick);
//we can muatate a const obj by adding new properties but we cannot change the value of const variable
rick = {name: 'Chris Mcdonald'};//this will throw Uncaught TypeError: Assignment to constant variable.

//Create an object using the new keyword
const newUser = new Object();
newUser.name = 'Rick Sekuloski';
newUser.student = false;
newUser.occupation = 'Web Developer & Programmer';
newUser.students = 20000;
console.log(newUser);
//empty obj
let studentObj = {};

//car object
let carObj1 = {
    name: 'Ford',
    model:'Mustang',
    color: 'blue-white',
}
let carObj2 = carObj1;
carObj2.model ='Fiesta';
console.log('Car Object1', carObj1);
console.log('Car Object1', carObj2);

//variable declared outside and used inside the object with same property name
let fuelType = 'electric';
let car = {
    name:'Tesla',
    model:4,
    color:'white',
    fuelType:fuelType
}
//shorthand version
/*let car = {
    name:'Tesla',
    model:4,
    color:'white',
    fuelType
}
*/

//Create Objects using Object.create method

//create object called person with one property set to false so we can change it
const person = {
    isHuman: false,
    myDetais: function() {//myDetails is a function that will print all of the details
        console.log(`My full name is ${this.name} ${this.lastName}. Am I human? ${this.isHuman}`);
      }
  };

//create a rick object using the Object.create but as an argument pass the person object
const rick = Object.create(person);
  
rick.name = 'Rick'; // "name" is a property set on "rick", but not on "person" object
rick.lastName = 'Sekuloski';  // "lastName" is a property set on "rick", but not on "person" object
rick.isHuman = true; // Remember Inheritance? Well isHuman is one inherited property and can be overwritten

rick.myDetais();
// expected output: "My name is Rick Sekuloski. Am I human? true"

//creating new object that does not inherit from prototype
const obj2 = Object.create(null);

//empty objects using object literals
const obj3 = {};
//empty object using Object.create, its same as the one above
const ob4 = Object.create(Object.prototype);