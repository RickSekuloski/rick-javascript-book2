//Strict mode in JS
'use strict';
message = 'Hello my name is Andy, what is your?';
console.log(message);


//fuction using the strict mode

a = 10;
let addTwo = function(){
    'use strict';
    b = 15;
    return a + b;
}
let result = addTwo();
console.log(result);