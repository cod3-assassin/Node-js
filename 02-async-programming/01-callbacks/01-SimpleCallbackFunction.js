function greet(name, callBack) {
  console.log("Hello " + name + " !");
  callBack();
}

function seyGoodbye() {
  console.log("Good Bye !");
}

greet("Skipper ", seyGoodbye);
