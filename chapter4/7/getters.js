class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName;
    }
  get fullName() { 
      return `${this.firstName}, ${this.lastName}`;
    }

}

const actor = new Person('Tom', 'Hiddleston');
const actorName = actor.fullName;
console.log(actorName);