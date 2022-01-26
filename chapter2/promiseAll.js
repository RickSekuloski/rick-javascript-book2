const promise1 = Promise.resolve('first');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'second');
  });
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'thrid');
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'forth');
  });
let promiseArray = [promise1, promise2, promise3, promise4];
Promise.all(promiseArray).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

//Rejection using promise.all
var p1 = Promise.reject('fail');
var p2 = 1337;
Promise.all([p1, p2]).then(values => {
  console.log(values); 
});
//solution to handle rejection in promise.all
var p1 = Promise.reject('fail').catch((err)=>'error happened');
var p2 = 1337;
Promise.all([p1, p2]).then(values => {
  console.log(values); 
});

//Promise.allSettled
const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First Promise after 1 second');
    }, 1000);
});
const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second Promise after 2 seconds');
    }, 2000);
});
const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Reason is because I wanted to be rejected :) ');
    }, 3000);
});
Promise.allSettled([pr1, pr2, pr3])
    .then((result) => {
        console.log(result);
});