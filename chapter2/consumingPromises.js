//Obtaining Poromises
//Resolve
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Resolved!"), 3000);
});
promise.then(
    result => console.log(result), //"Resolved!" after 3 seconds
    error => console.log(error) // it will not run
);

//Reject
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Error happened!")), 3000);
});

promise1.then(
    result => console.log(result), // it will not run
    error => console.log(error) // "Error: Whoops!" after 1 second
);

//error handling with .catch method

let isAuthorized = false;

function getUserByUserId(id) {
    return new Promise((resolve, reject) => {
        if (!isAuthorized) {
            //throw new Error('Unauthorized access!');
            reject('Unauthorized access!');
        }
        resolve({
            id: id,
            username: 'admin',
            role: 'administrator'
        });
    });
}
getUserByUserId(1234756525)
    .then(user => console.log(user.username))
    .catch(err => console.log(`Caught by .catch ${err}`));

//try and catch an error that is outside the Promise

function getUserByUserId1(id) {
    if(typeof id !=='number' || id <= 0){
        throw new Error('This is not valid user id!');
    }
    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin',
            role: 'administrator'
        });
    });
}
try{
    getUserByUserId1('AndyPeterson')
    .then(user => console.log(user.username))
    .catch(err => console.log(`Caught by .catch ${err}`));
}
catch(e){
    console.log(`Caught by try/catch statement: ${e}`);
}
//catching an error with chained promises
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('a'), 1000);
  }).then(function(result) {
    //console.log(result); // a
    return result + 'b';
  }).then(function(result) {
    //console.log(result); // ab
    return ab + 'c';
  }).then(function(result) {
    //console.log(result); // abc
    return result +'d';
  }).catch(error => console.log(error));