const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hans Solo');
  });

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Mandalorian');
});
  
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Luke Skywalke');
});
  
  Promise.any([promise1, promise2, promise3]).then((value) => {
    console.log(value);
  });

  //with one reject promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hans Solo');
  });

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'Mandalorian');
});
  
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Luke Skywalke');
});

Promise.any([promise1, promise2, promise3])
.then((value) => {
console.log(value);
})
.catch((error)=>console.log(error));

//with all promises rejected
const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Hans Solo');
  });

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'Mandalorian');
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, 'Luke Skywalke');
});
Promise.any([promise1, promise2, promise3])
.then((value) => {
console.log(value);
})
.catch((error)=>console.log(error));
