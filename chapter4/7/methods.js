//Methods in JavaScript


//object andy
let andy = {
    name: 'Andy Smith',
    occupation:'developer',
    salary: 8000,
    age:33,
}
//lets add method inside the object so andy can have bonuses
let andy = {
    name: 'Andy Smith',
    occupation:'developer',
    salary: 8000,
    age:33,
    bonuses:function(extraBonuses){
        this.salary += extraBonuses;
    }
}
andy.bonuses(700);

//we can declare methods in object using this syntax
let andy = {
    name: 'Andy Smith',
    occupation:'developer',
    salary: 8000,
    age:33,
    bonuses(extraBonuses){//this is called syntactic sugar
        this.salary += extraBonuses;
    }
}

