//Iterables
let pages = {
    from: 1,
    to: 10
};

for(value of pages){
    console.log(value);//this will throw you an TypeError: pages is not iterable
}

//If we want to use the for-of on the pages object we need to implement the following steps:
let pages = {
    from: 1,
    to: 10,
  
    [Symbol.iterator]() { // called once, in the beginning of for..of
      return {
        current: this.from,
        last: this.to,
  
        next() { // method is called in every iteration, to get the next value
          if (this.current <= this.last) {
            return { value: this.current++, done:false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for(let value of pages) {
    console.log(value); 
  }

  //Async iterables
  //let us make the object to return values asynchronously or one value per two seconds
  let pages = {
    from: 1,
    to: 10,
  
    [Symbol.asyncIterator]() {
      return {
        current: this.from,
        last: this.to,
  
        async next() { // method is called in every iteration, to get the next value
          const result = await new Promise(resolve => {
            setTimeout(() => resolve(this.current), 2000);
          });
          
          if (result <= this.last) {
            return { value: this.current++, done:false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  const getResult = async () => {
    for await(let value of pages){
      console.log(value);
    }
  }
  getResult();
