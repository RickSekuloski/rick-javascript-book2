//JavaScript conditionals if-else


let number1 = 1;
let number5 = 5;

//if condition statements will be executed
if(number1 <= number5){
    console.log('The condition is true');
    let result = number1 + number5;
    console.log(result);
}
else{
    console.log('The condition is false');
    let result = number5 - number1;
    console.log(result);
}

number1 = 10;
//else condition statements will be executed
if(number1 <= number5){
    console.log('The condition is true');
    let result = number1 + number5;
    console.log(result);
}
else{
    console.log('The condition is false');
    let result = number5 - number1;
    console.log(result);
}

//else-if
age = 18;

if(age <= 14){
    console.log('You are in chidlren group');
}
else if( age >= 15  && age <= 24){
    console.log('You are in youth group');
}
else if( age >= 25  && age <= 64){
    console.log('You are in Adults group');
}
else{
    console.log('You are in Senior group');
}

//If else condition without braces

let isNumber = true;

if(isNumber)
    console.log('Inside the if clause!');
else
    console.log('Inside the else clause.')

