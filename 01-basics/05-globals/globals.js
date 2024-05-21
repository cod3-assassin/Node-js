// __dirname: Directory name of the current module
console.log(`Current directory: ${__dirname}`);

// __filename: File name of the current module
console.log(`Current file: ${__filename}`);

// setTimeout: Executes a function after a delay
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// setInterval: Executes a function repeatedly with a delay
const intervalId = setInterval(() => {
  console.log("Executed every 2 seconds");
}, 2000);

// Clearing the interval after 6 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 6000);
