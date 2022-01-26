//Constructor Functions
function Person(firstName, lastName, age, position, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
    this.country = country;
  }


//create two person objects
const tom = new Person('Tom','Cruise',50, 'Actor','USA');
const  hardy = new Person('Tom','Hardy',46, 'Actor','England');

//add methods to the Person function

function Person(firstName, lastName, age, position, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
    this.country = country;
    this.printDetails = function () {
        console.log(`Hi! My details are:
        Name: ${this.firstName},
        Name: ${this.lastName},
        Name: ${this.age},
        Name: ${this.position},
        Name: ${this.country}
        `);
    }
  }

  const tom = new Person('Tom','Cruise',50, 'Actor','USA');
  tom.printDetails();

  //functions prototype property
  function Person(firstName, lastName, age, position, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
    this.country = country;
  }

  Person.prototype.printDetails = function () {
    console.log(`Hi! My details are:
    Name: ${this.firstName},
    Name: ${this.lastName},
    Name: ${this.age},
    Name: ${this.position},
    Name: ${this.country}
    `);
}
  const  hardy = new Person('Tom','Hardy',46, 'Actor','England');
  hardy.printDetails();