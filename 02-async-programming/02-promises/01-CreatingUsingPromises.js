const mypromise = new Promise((resolve, reject) => {
  let Succsessfully = true;

  if (Succsessfully) {
    resolve("Operation success !");
  } else {
    reject("Opreation faild !");
  }
});

mypromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
