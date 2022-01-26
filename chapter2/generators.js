function* myFirstGenerator(i) {
    yield i;
    yield i + 1;
    yield i + 2;
    yield i + 3;
    yield i + 4;
  }

  for(let value of myFirstGenerator(1)) {
    console.log(value);
  }
//regular generators
  let pages = {
    from: 1,
    to: 10,
  
    [Symbol.iterator]: function*() { 
      for(let i = this.from; i <= this.to; i++) {
        yield i;
      }
    }
  };
  
  for(let value of pages) {
    console.log(value); 
  }
  //async generators
  let pages = {
    from: 1,
    to: 10,
  
    
    [Symbol.asyncIterator]: async function*() {
      for(let i = this.from; i <= this.to; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        yield i;
      }
    }
  };
  
  const getResult = async () => {
    for await(let value of pages){
      console.log(value);
    }
  }
  getResult();