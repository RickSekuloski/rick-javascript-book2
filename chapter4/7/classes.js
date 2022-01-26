//Classes in JavaScript
class Person {

    constructor(firstName, lastName, age, position, country){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
        this.country = country;
    }
    printDetails() {
        console.log(`Hi! My details are:
        Name: ${this.firstName},
        Name: ${this.lastName},
        Name: ${this.age},
        Name: ${this.position},
        Name: ${this.country}
        `);
    }
  }

//how we instantiate new object from class
  const  samuel = new Person('Samuel','L Jackson',59, 'Actor','America');
  samuel.printDetails();