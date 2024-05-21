function generateRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber) {
      resolve(randomNumber);
    } else {
      reject("Failed to generate a random number.");
    }
  });
}
generateRandomNumber()
  .then((randomNumber) => {
    console.log("Random Number :", randomNumber);
  })
  .catch((err) => {
    console.error("Error :", err);
  });
