//Promises Chaining

let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('a'), 1000);
  }).then(function(result) {
    //console.log(result); // a
    return result + 'b';
  }).then(function(result) {
    //console.log(result); // ab
    return result + 'c';
  }).then(function(result) {
    //console.log(result); // abc
    return result +'d';
  });

  myPromise.then((result) => console.log(result));

  //saving each promise in new varible
  let myPromise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('a'), 1000);
  });
  let myPromise2 = myPromise1.then(function(result) {
    //console.log(result); // a
    return result + 'b';
  });
  let myPromise3 = myPromise2.then(function(result) {
    //console.log(result); // ab
    return result + 'c';
  });
  let myPromise4 = myPromise3.then(function(result) {
    //console.log(result); // abc
    return result +'d';
  });
  myPromise4.then((result) => console.log(result));