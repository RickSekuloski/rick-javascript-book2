/*There’s a special syntax to work with promises called “async/await”. 
It’s very easy to understand and use.
*/
const myFirstAsyncFn = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Resolved in 2s!"), 2000)
    });
    //we store result of the promise in a variable
    let result = await promise; // wait until the promise resolves
    console.log(result); // "Resolved in 2s!"
  }
  
myFirstAsyncFn();
