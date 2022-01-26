//Named Groups

let dateExpression = /(?<day>[0-9]{2})-(?<month>[0-9]{2})-(?<year>[0-9]{4})/;
let dateString = "29-09-2022";
let theGroups = dateString.match(dateExpression).groups;
console.log('The Year Is: ' + theGroups.year); // 2022
console.log('The Month Is: ' + theGroups.month); // 09
console.log('The Day Is: ' + theGroups.day); // 2022

//Named groups with multiple dates in a string
let dateExpression1 = /(?<day>[0-9]{2})-(?<month>[0-9]{2})-(?<year>[0-9]{4})/g;
let dateString1 = "29-09-2022 19-11-2023";
let theGroups1 = dateString1.matchAll(dateExpression1);

for(let theGroup of theGroups1){
    let {year, month, day} = theGroup.groups;
    console.log(`The Year Is: ${year}`); // 2022
    console.log(`The Month Is:  ${month}`); // 09
    console.log(`The Day Is: ${day}`); // 2022
}
