//String Methods
let simpleString = "my name is Jack Rayan!";
let regExp = /[A-Z]/g

console.log(simpleString.search(regExp));//11

//Replace method with regular expression
let simpleText='I love javaScript, but javaScript can be difficult to learn!';
let output = simpleText.replace(/javaScript/g, "JavaScript");
console.log(output);
//replace method with a string
let sampleText = "Hi my name is Andy!";
//we replace Andy with Thomas
let result = sampleText.replace("Andy", "Thomas");
console.log(result);

//multiple replacements
const regExp3 = /\d{4}/g;
const myText = "I was born in 1990. Do you know anyone that is born in 1990?";
const output1 = myText.replace(regExp3, "1989");
console.log(output1);

//replace - method chaining
let testString1 = "This James Bond movie was great. I love watching James Bond movies with my brother.";
let output2 = testString1.replace(/James Bond/gi, "Star Wars").replace(/brother/gi, "girlfriend");
console.log(output2);

//replacement function.
const testString2 = "I was born in 1990. Do you know anyone that is born in 1990?";
const regExp3 = /\d{4}/g;
function replacerFn() {
  return "1987";
}
console.log(testString2.replace(regExp3, replacerFn));

//1) match in the replacement function
const testString3 = "I hate JavaScript and I hate RegEx as well!";
const regExp4 = /hate/g;
function replacerFn1(match) {
    console.log(match);//this will be the matched string
  return `love`;
}
console.log(testString3.replace(regExp4, replacerFn1));

//capturing groups
const testString4 = "I hate JavaScript and I hate RegEx as well!";
const regExp5 = /hat(e)/g;
function replacerFn2(match,p1) {
    console.log(`The matched string ${match}, capturing ${p1}`);
  return `love`;
}
console.log(testString4.replace(regExp5, replacerFn2));

//offset
const testString5 = "I hate JavaScript and I hate RegEx as well!";
const regExp6 = /hat(e)/g;
function replacerFn3(match,p1,offset) {
    console.log(`The matched string ${match}, capturing ${p1} at this index ${offset}`);
    return `love`;
}
console.log(testString5.replace(regExp6, replacerFn3));

//string
const testString6 = "I hate JavaScript and I hate RegEx as well!";
const regExp7 = /hat(e)/g;
function replacerFn4(match,p1,offset,string) {
    console.log(`The matched string ${match}, capturing ${p1} at this index ${offset} in ${string}`);
    return `love`;
}
console.log(testString6.replace(regExp6, replacerFn4));