function fakeApiCall(callback) {
  setTimeout(() => {
    callback(null, "Api responce");
  }, 2000);
}

fakeApiCall((err, response) => {
  if (err) {
    console.log("Error", err);
  }
  console.log("API RESPONCE :", response);
});
