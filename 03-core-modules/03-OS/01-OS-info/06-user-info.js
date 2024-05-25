const os = require("os");

// Get user information
const userInfo = os.userInfo();

console.log("User Information:");
console.log("Username:", userInfo.username);
console.log("Home Directory:", userInfo.homedir);
console.log("User ID:", userInfo.uid);
console.log("Group ID:", userInfo.gid);
console.log("Shell:", userInfo.shell);
