//String Literals
console.log('This is Line: 1\n' +
'This is Line: 2\n'+
'This is Line: 3');
//Backtick ES6 feature
console.log(`This is Line: 1
This is Line: 2
This is Line: 3`);
//Backtick with single and double quote
`It's awesome`;
//Backslash Character before single-quote to ignore it
'It\'s awesome';
//Backslash Character before double-quote to ignore it
"It\'s a \"double\" quote example";
//Using backtick lets rewrite last example
`We're safely using apostrophes and "quotes" in a template literal.`;

//Unicode Emoji example
const dog = '🐶'; // U+1F436
console.log('This should be dog emoji as well ' + '\uD83D\uDC36')
