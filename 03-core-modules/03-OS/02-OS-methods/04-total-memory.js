const os = require("os");

// Get total memory (in bytes) and convert to gigabytes (GB)
const totalMemoryGB = os.totalmem() / (1024 * 1024 * 1024);
console.log("Total Memory:", totalMemoryGB.toFixed(2), "GB");
