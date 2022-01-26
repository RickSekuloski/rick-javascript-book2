class User{

    constructor(name){
        this.name = name;
    }
    static staticPropery = 'Some Info';
    static staticMethod(){
       console.log(this.name);
    }
 }
let newUser = new User('Simon');
 //call a static method using the class name
 User.staticMethod();
 console.log(User.staticPropery);
