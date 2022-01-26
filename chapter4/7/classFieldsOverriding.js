//JavaScript Inheritance
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    startRunning(speed) {
      this.speed = speed;
      return `The ${this.name} runs with speed of ${this.speed}km per hour.`;
    }
    stopRunning() {
      this.speed = 0;
      console.log(`The ${this.name} stopped running and now sits still.`);
    }
  }

//let us create Dog class that will inherit from the Animal class
class Dog extends Animal {
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    stopRunning (){//this method will be used by the instances of the Dog class
        super.stopRunning();
        console.log('The dog is licking its paws.');
    }
    bark() {
      return `The ${this.name} barks!`;
    }
  }
  let animal = new Animal('Animal');
  let dog =  Dog("Dog","Labrador");
  
  console.log(animal.name);
  console.log(dog.name);