//Regular expression alternatives
let alphabetString = "a b c d e f";
let regex1 = /a|c|m/g;

console.log(alphabetString.match(regex1)); //Output:  ['a', 'c']

//Regular expression alternatives example 2
let alphabetString1 = "a b ac d ae f";
let regex2 = /a|ac|ae/g;
console.log(alphabetString.match(regex2)); //Output:  ['a', 'c']

//Grouping
let domainList= "google.com apple.com apple.com.au support"
let regexp1= /(\w+\.)+\w+/g;
console.log(domainList.match(regexp1));

//
let html5Tags = '<h1>';
let tagResults = html5Tags.match(/<(.*?)>/);
console.log( tagResults[0] ); // <h1>
console.log( tagResults[1] ); // h1

//nested groups
let html5Tags1 = '<h1 class="headingOne">';
let regexp2 = /<(([a-z/d{1}]+)\s*([^>]+))>/;
let tagResults1 = html5Tags1.match(regexp2);
console.log(tagResults1)
console.log(tagResults1[0]);
console.log(tagResults1[1]); 
console.log(tagResults1[2]);
console.log(tagResults1[3]);

