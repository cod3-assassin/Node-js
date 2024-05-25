const os = require("os");

// Function to calculate CPU usage
function calculateCpuUsage() {
  const cpus = os.cpus();

  let user = 0;
  let nice = 0;
  let sys = 0;
  let idle = 0;
  let irq = 0;

  for (const cpu of cpus) {
    user += cpu.times.user;
    nice += cpu.times.nice;
    sys += cpu.times.sys;
    idle += cpu.times.idle;
    irq += cpu.times.irq;
  }

  const total = user + nice + sys + idle + irq;

  return {
    user: (user / total) * 100,
    nice: (nice / total) * 100,
    sys: (sys / total) * 100,
    idle: (idle / total) * 100,
    irq: (irq / total) * 100,
  };
}

// Initial CPU usage
const startUsage = calculateCpuUsage();
console.log("Initial CPU Usage:", startUsage);

// Monitor CPU usage after 1 second
setTimeout(() => {
  const endUsage = calculateCpuUsage();
  console.log("CPU Usage after 1 second:", endUsage);
}, 1000);
