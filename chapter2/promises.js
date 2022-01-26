//Promises in JavaScript

//seccessful fulfiled promise
let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
    setTimeout(() => resolve("done"), 2000);
  });

  //rejected
  let promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Error happened!")), 2000);
  });

  function getImage(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.addEventListener('load', e => resolve(img));
      img.addEventListener('error', () => {
        reject(new Error(`Failed to load image's URL: ${url}`));
      });
      img.src = url;
    });
  }

//   // load the image, and append it to the element id="image-holder"
//  getImage('https://picsum.photos/200/300')
//  .then(img => console.log(img))
//  .catch(error => console.error(error));
 
//immediately settled promises
const loadImage = url => {
    if (url === undefined) return Promise.resolve('value');
}
loadImage();
//imediately rejected promises
const loadImage1 = url => {
    if (url === undefined) {
        return Promise.rejected(Error('There is no URL provided'));
    }
}
loadImage1();