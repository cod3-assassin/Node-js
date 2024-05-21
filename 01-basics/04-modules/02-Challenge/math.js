function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function divid(a, b) {
  if (a === 0) {
    throw new Error("Divisoin by zero !");
  }
  return a / b;
}

module.exports = { add, sub, mult, divid };
