//module2.js
function greetings(name){
 return `Hi there : ${name}`;
}
export function cube(x) {
    return x * x * x;
}
export class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
export {greetings as default};

