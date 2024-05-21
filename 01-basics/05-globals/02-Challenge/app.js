const intervalId = setInterval(() => {
  console.log("Execute after every 3 seconds");
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared !");
}, 12000);
