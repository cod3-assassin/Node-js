const os = require("os");

// Get CPU information
const cpus = os.cpus();

console.log("CPU Information:");
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}:`);
  console.log(`  Model: ${cpu.model}`);
  console.log(`  Speed: ${cpu.speed} MHz`);
  console.log(`  Cores: ${cpu.cores}`);
  console.log(`  User Time: ${cpu.times.user} ms`);
  console.log(`  Nice Time: ${cpu.times.nice} ms`);
  console.log(`  System Time: ${cpu.times.sys} ms`);
  console.log(`  Idle Time: ${cpu.times.idle} ms`);
  console.log(`  IRQ Time: ${cpu.times.irq} ms`);
});
