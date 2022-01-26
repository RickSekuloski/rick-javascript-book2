//1) rewrite the same example using async/await
function loadUrl(url) {
    const result = fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
      return result;
}
//You can test out with this url as well:
//https://jsonplaceholder.typicode.com/todos/1
loadUrl('https://jsonplaceholder.typicode.com/todos/as')
.then(result => console.log(result))
.catch(error => console.log(error)); // Error: 404

//1) solution:
async function loadUrl(url) { 
    try{
        const result = await fetch(url); 
        if (result.status == 200) {
          let json = await result.json();
          console.log(json);
        }
        else{
            throw new Error(result.status);
        }

    }
    catch(error){
        console.log(error);
    }
  }
//loadUrl('https://jsonplaceholder.typicode.com/todos/1');
loadUrl('https://jsonplaceholder.typicode.com/todos/as');


//2
function fetchJsonViaPromises(url) {
    return fetch(url) // async
    .then(data => data.json()) // async
    .then(result => console.log(result)) // sync
    .catch(error => {
      console.log(error);
    });
  }
  fetchJsonViaPromises('https://jsonplaceholder.typicode.com/todos/s1')