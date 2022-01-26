class Person{
    constructor(fullName,dob,country){
        this.fullName = fullName;
        this.dob = dob;
        this.country = country;
    }
}

//new public fields syntax'
class Person{

    fullName = fullName;
    dob = dob;
    country = country;
}


//private fields
class Person {
    #privateID;
  
    constructor(firstName,lastName,dob,country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.country = country;
        this.#privateID = 41920437939848;
        delete this.#privateID;   // Syntax error
        this.#declareNewPrivateID = 123234234242; // Syntax error
    }
  }
  
  const tonyStartk = new Person('Tony','Stark','1970','USA');
  tonyStartk.#privateID === 122332434343434345545;   // Syntax error


  //private methods
  class Person {
    #privateMethod() {
      return 'This information is private!!';
    }
  
    getPrivateMessage() {
      return this.#privateMethod();
    }
  }
  
  const newUser = new Person();
  console.log(newUser.getPrivateMessage());
  // This information is private!!