//String Methods

//1) repeat method
const message = 'W';
const repeatIt = message.repeat(3);
console.log(repeatIt);// 'WWW'
//2) trim method
const beforeAndAfter = '   Hi There   ';
console.log('1 - trim method: '+ beforeAndAfter.trim());
console.log('2 - does not change the original content: '+beforeAndAfter);
//3) padStart and padEnd methods
const example = 'Hello';
const newString = example.padStart(10);
console.log(example);
console.log(newString);
console.log(example.length);
console.log(newString.length);
//with second parameter
const newString1 = example.padStart(10, '#');
console.log(newString1);
//4) toUpperCase and toLowerCase
const firstName = 'Andy';
const lastName = 'Garcia';
console.log(firstName.toLocaleLowerCase());
console.log(lastName.toUpperCase());

//5) length
const fullName = 'Andy Garcia';
console.log(fullName.length);
//6)retrieve a character from a string using []
console.log(fullName[0]);//A
//7) last character from a string
console.log('Length of the fullName string is: ' + fullName.length);
console.log('Last character is: '+ fullName[fullName.length-1]);
//8)charAt method
const sentence = 'I want to be a developer!';
const index = 7;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 7 is t"
//last character from a string using charAt method
const lastChar = sentence.charAt(sentence.length-1);
console.log(lastChar);//!
//9)includes() method for finding substrings

const occupation = 'Web Developer';
//I want to search the occupation string to see if the substring 'Dev' is included
if (occupation.includes('Dev')) {
  console.log(`Yes it does!`);
} else {
  console.log(`Nope I can't find Dev here!`);
}
//10)slice method
const MyOccupation = 'Developer';
console.log(MyOccupation.slice(0, 3)); // "Dev"
console.log(MyOccupation.slice(2));
//12)replace()
const originalString = 'mozilla';
const updatedString = originalString.replace('mo','God');
console.log(updatedString);      // "Godzilla"
console.log(originalString);  // "Mozilla"
//11)split method
let text = "Hello World";
const splittedArray = text.split(" ");
console.log(splittedArray);
//13 concat
const message1 = 'Ana';
const message2 ='maria';
const newMessage = message1.concat(message2);
console.log(newMessage);//Anamaria

//14 match
let text1 = "Regular expression";
const result = text1.match(/xpr/g);
console.log(result);

//normalize() method

let string1 = '\u00F1';
let string2 = '\u006E\u0303';
console.log(string1);  //  ñ
console.log(string2);  //  ñ
//let us try to compare the two strings
console.log(string1 === string2); // false
console.log(string1.length);      // 1
console.log(string2.length);      // 2

//normalize using NFD 
string1 = string1.normalize('NFD');
string2 = string2.normalize('NFD');

console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2
