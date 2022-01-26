/*
Primitives
If a primitive type is assigned to a variable, 
we can think of that variable as containing the primitive value.
*/
let a = 5;
let b = 'name';
let c = null;

console.log('Value of a:',a);
console.log('Value of b:',b);
console.log('Value of c:',c);

//Assign the c using the '=' to a value of the variable a
//this way we copy the value of a to c. Now c and a have same values
c = a;
console.log('Value of a:',a);
console.log('Value of c:',c);
console.log('Update the value of a');
a = 10;
console.log('Print out again a and c variables');

console.log('Value of a:',a);
console.log('Value of c:',c);

