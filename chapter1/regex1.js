
const myString = `Hi, do you know your abc's`;
const regex = /abc/;
//const regex = new RegExp('abc');
console.log(regex.test(myString));//true


const myString1 = `Hi, do you know your abc's`;
const regex1 = /ac/;
//const regex1 = new RegExp('ac');
console.log(regex1.test(myString1));//false
