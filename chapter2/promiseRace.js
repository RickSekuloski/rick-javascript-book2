const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'one');
  });

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'two');
});
  
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});
  
  Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value);
    // The three of the promises resolve, but promise2 is the fastest
  });