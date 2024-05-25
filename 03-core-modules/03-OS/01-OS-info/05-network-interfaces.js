const os = require("os");

// Get network interfaces information
const networkInterfaces = os.networkInterfaces();

console.log("Network Interfaces Information:");
for (const [interfaceName, interfaces] of Object.entries(networkInterfaces)) {
  console.log(`Interface: ${interfaceName}`);
  interfaces.forEach((interfaceInfo, index) => {
    console.log(`  Address ${index + 1}:`);
    console.log(`    IP Address: ${interfaceInfo.address}`);
    console.log(`    Netmask: ${interfaceInfo.netmask}`);
    console.log(`    MAC Address: ${interfaceInfo.mac || "N/A"}`);
    console.log(`    Family: ${interfaceInfo.family}`);
  });
}
