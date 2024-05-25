const os = require("os");

//Get system uptime in second
const uptimeinSeconds = os.uptime();

const hours = Math.floor(uptimeinSeconds / 3600);
const minutes = Math.floor((uptimeinSeconds % 3600) / 60);
const seconds = uptimeinSeconds % 60;

console.log("System Uptime");
console.log(`${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`);
