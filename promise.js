setTimeout(() => {
  console.log("working");
}, 3000);

let getPromise = new Promise((resolve, reject) => {
  if (resolve) {
    setTimeout(() => {
      console.log("working");
    }, 3000);
  } else {
    console.log("error");
  }
});

getPromise
  .then(() => {})
  .catch((error) => {
    console.log("error");
  });
