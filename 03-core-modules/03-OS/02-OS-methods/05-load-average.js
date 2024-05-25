const os = require("os");

// Get system load average
const loadAverage = os.loadavg();

console.log("System Load Average (1, 5, 15 minutes):", loadAverage);
