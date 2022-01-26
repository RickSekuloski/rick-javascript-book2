
//error handling using the try and catch statement
function trueFalse() {
    return new Promise((resolve, reject) => {
      const result = Math.round(Math.random() * 1); // 1 or 0 because of the Math.random
      result ? resolve('True 👍') : reject('False 👎');
    });
  }
  
  async function randomMessages() {
    try {
      const whatWillBe = await trueFalse();
      console.log(whatWillBe);
    } catch(err) {
      console.log(err);
    }
  }ß
  for (let i=0; i < 10; i++){
    randomMessages(); 
  }

//because the async functions returns a promise we can use the .catch method
function trueFalse1() {
    return new Promise((resolve, reject) => {
      const result = Math.round(Math.random() * 1); // 1 or 0 because of the Math.random
      result ? resolve('True 👍') : reject('False 👎');
    });
  }
  
  async function randomMessages1() {
      const whatWillBe = await trueFalse1();
      console.log(whatWillBe);
  }
  for (let i=0; i < 10; i++){
    randomMessages1().catch(data => {
        console.log(data);
    }); 
  }