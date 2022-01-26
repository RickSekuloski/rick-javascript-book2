//regex to match a digit between 3 and 4
let numbersString = "1 12 999 34 9888 687665";
let regex1 = /\d{3,4}/g;

console.log(numbersString.match(regex1)); 
//output: ['999', '9888', '6876']

//to match the word 'JavaScript' and whitespaces before and after
let longString = `As we know JavaScript is a scripting language that enables you to create dynamically updating content, 
control multimedia, animate images, and pretty much....`;
let regex2 = /\s+JavaScript\s+/g;

console.log(longString.match(regex2));