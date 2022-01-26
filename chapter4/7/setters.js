class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() { 
    return `${this.firstName} & ${this.lastName}`;
}
  set fullName(name) {
    const parts = name.split(',');
    this.firstName = parts[0];
    this.lastName = parts[1];
    }
}

const haroldKumar = new Person();
haroldKumar.fullName = 'Harold,Kumar';
console.log(haroldKumar);
haroldKumar.fullName;


//setters and getters for objects
const testObj = {
  name: 'Andy',
  get userName() {
    return this.name;
  },
  set userName(newValue) {
    this.name = newValue;
  }
};

console.log(testObj.userName);
testObj.userName = 'Rick';
console.log(testObj.userName);
