
console.log('1) This text should be first and before the getUser function');
console.log('2) This text should be after the first console log');

const getUsers = () =>{
const request = new XMLHttpRequest(),
method = "GET",
url = "https://jsonplaceholder.typicode.com/users/";
request.open(method, url, true);
request.onreadystatechange = function () {
if (request.readyState === 4 && request.status === 200) {
    console.log('3) This text should be thrid if this is synchronous programming but will it be?')
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("Oh no! There has been an error and could not fetch the data");
  }

};
request.send();
}
getUsers();

console.log('4) This text should be last or the getUser function, if this is synchronous, but will it be?')