//Exit a loop with Break Statement
const numbersArray  = [1,2,3,4,5,6,7,8,9,10];

//we search for the element 6 and then we breaking the loop
for(let element of numbersArray ) {
    
    if(element == 6 ){
        console.log('We found the number six now let us get out of here!');
        break;//break statement to exit the loop
    }
    else{
        console.log(element);
    }
}

//Continue Statement
//we search for the element 6 and then we breaking the loop
for(let element of numbersArray ) {
    
    if(element == 6 ){
        console.log('We found the number six now let us get out of here!');
        continue;//continue the loop
        console.log('This output will not be shown')
    }
    else{
        console.log(element);
    }
}