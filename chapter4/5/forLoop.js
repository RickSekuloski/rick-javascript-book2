//For loop
/* for loop syntax
for (statement 1; statement 2; statement 3) {
    // code block to be executed
  }
  */

  for(let i = 1; i < 10; i++){
      console.log(i);
  }

  let numbersArray = [1,2,3,4,5,6,7,8,9,10];

  for(let i = 0; i < numbersArray.length; i++){
    console.log(numbersArray[i]);
}

/* infinitive loop - this will crash your computer

for( ; ; ){}

*/
//The following example uses a for loop that omits the initialization part:
let j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}
//example without the condition test statement
for (let j = 1;; j += 2) {
    console.log(j);
    if (j > 10) {
        break;//you need to use a break statement to terminate the loop.
    }
}