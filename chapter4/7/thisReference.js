//This keyword in JavaScript

const incrementObj = {
    counter: 0,
    increment: function () {
        return ++this.counter;
    }
};
//call the increment fn
incrementObj.increment();//1

//window object
console.log(this === window); // true
//same window object
console.log(window);
console.log(this);

//add a property to the window object
this.color= 'Orangered';
console.log(window.color); // 'Orangered'


//function 'this' reference'
function message() {
    console.log(this === window); // true
 }
 message();//true
 window.message();//true

 //function using the srict mode
 'use strict';

function newMessage() {
    console.log(this === undefined);
 }
 newMessage(); //true

 //strict mode inside a function
 function myMessage() {
    'use strict';
    console.log(this === undefined); // true

    function innerMessage() {
        console.log(this === undefined); // true
    }
    innerMessage();
}

myMessage();

//method invocation
let animal = {
    type: 'Mammals',
    getType: function () {
        return this.type;
    }
}

console.log(animal.getType()); // Mammals
let animalType = animal.getType;
console.log(animalType());

//bind method where we pass the animal object
let animalType = animal.getType.bind(animal);
console.log(animalType()); // Mammals

//arrow function and this keyword

//simple arrow function example
const greeting = () => {
    return this;
}

console.log(greeting()); // window or global object

//arrow function cannot be used as constructors ---!! this will not work it will throw an error !!
const Person = (name, age, county) => {
    this.name = name;
    this.age = age;
    this.country = country;
    this.printDetails = function () {
        return `My name is ${this.name}, and I'm ${this.age} years old. I live in ${this.country}`;
    }
}
const tom = new Person("Tom", 54, "USA"); // Person is not a constructor



console.log(newOrder.order());
'use strict';

var simpleObj = { // does not create a new scope
  a: 10,
  b: () => console.log(this.a, this),
  c: function() {
    console.log(this.a, this);
  }
}

simpleObj.b(); // prints undefined, Window {...} (or the global object)
simpleObj.c(); // prints 10, Object {...}

//this keyword when we have function inside our object method
let dog = {
    dogName: 'Oscar',
    activities: ['eating dog biscuits!', 'chasing cats!', 'sleeping!', 'barking all night!'],
    showActivities: function() {
      this.activities.forEach(function(activity) {
        console.log(this.dogName + " is " + activity);
      });
    }
  };
  
  dog.showActivities();
/*
Output
undefined is eating dog biscuits!
undefined is chasing cats!
undefined is sleeping!
undefined is barking all night!
*/

//Using ES6 arrow function syntax to rewrite the previous example
let dog = {
    dogName: 'Oscar',
    activities: ['eating dog biscuits!', 'chasing cats!', 'sleeping!', 'barking all night!'],
    showActivities: function() {
      this.activities.forEach((activity) => {
        console.log(this.dogName + " is " + activity);
      });
    }
  };
  
  dog.showActivities();

/*
Output
Oscar is eating dog biscuits!
Oscar is chasing cats!
Oscar is sleeping!
Oscar is barking all night!
*/