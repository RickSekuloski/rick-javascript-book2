//setTimeout function
let timerId = setTimeout(() => console.log("It will never be printed"), 2000);
console.log(timerId); // the timer will be printed because the setTimeout needs to wait for 2 seconds

clearTimeout(timerId);//now here we will clear the setTimeout function so it will never run


//setInterval
let intervalId = setInterval(() => console.log('tick tock, tick tock'), 3000);
//clear the setInterval
console.log('No more tick, tock because we will clear it with clearInterval fn')
clearInterval(intervalId);
