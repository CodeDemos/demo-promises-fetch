function myFetch(url){
  return fetch(url)
    .then( res => {
      return res.json();
    });
}

// Promise.all w/ Fetch
const promise1 = myFetch("https://swapi.co/api/films/1/");
const promise2 = myFetch("https://swapi.co/api/films/2/");
const promise3 = myFetch("https://swapi.co/api/films/3/");

Promise.all( [promise1, promise2, promise3] )
  .then( resArray => {
    const [resA, resB, resC] = resArray;
    console.log(resA.title);
    console.log(resB.title);
    console.log(resC.title);
  });
