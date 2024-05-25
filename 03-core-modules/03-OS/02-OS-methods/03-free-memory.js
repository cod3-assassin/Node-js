const os = require("os");

// Get free memory (in bytes) and convert to megabytes (MB)
const freeMemoryMB = os.freemem() / (1024 * 1024);
console.log("Free Memory:", freeMemoryMB.toFixed(2), "MB");
