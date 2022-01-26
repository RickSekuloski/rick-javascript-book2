//fromCodePoint returns a string from codepoints
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));

//array of codepoints
const myCodePoints = [9731, 9733, 9842, 0x2F804];
//spread operator
const stringOutput = String.fromCodePoint(...myCodePoints);
console.log(stringOutput);

const message ='Hello World!';
const codePointsArray = [];
//we can traverse through our newly created string with a for loop
for (let i = 0; i < message.length; i++) {
    let codePoint = message.codePointAt(i);
    //console.log(codePoint);
    codePointsArray[i] = codePoint;
}
//this should return back 'Hello World!'
console.log(String.fromCodePoint(...codePointsArray));
