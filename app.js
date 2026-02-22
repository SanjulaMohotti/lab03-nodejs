const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Promise Success!");
  } else {
    reject("Promise Failed!");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });