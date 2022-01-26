//module1.js

//exporting individual features
export let firstName = 'Tom';
export let lastName = 'Holland';

//exporting list
let list1 = 'list1';
let list2 = 'list2';
let list3 = 'list3';

export {list1,list2,list3};

// export an array
export let daysArray = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday','Sunday'];

// export a constant
export const URL = 'https://developer.mozilla.org/';

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
export function userDetails(user) {
    return user;
}
// export a class
export default class Person {
    constructor(name) {
      this.name = name;
    }
}
//rename named exports
function userDetails1(user) {
    return user;
}

export{userDetails1 as currentUser};

// const firstName = 'Tom';
// const lastName = 'Holland'
// const spiderManMovies = ['Spider-Man: No Way Home',
// 'Spider-Man: Far from Home','Avengers: Endgame','Avengers: Infinity War','Spider-Man: Homecoming'];
// export {firstName, lastName, spiderManMovies};