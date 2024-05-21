function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 Completed !");
    callback(null, "Results from task 1");
  }, 1000);
}

function task2(prevResult, callback) {
  setTimeout(() => {
    console.log("Task 2 Completed with !", prevResult);
    callback(null, "Result from task 2");
  }, 1000);
}
function task3(prevResult, callback) {
  setTimeout(() => {
    console.log("Task 3 Completed with !", prevResult);
    callback(null, "Result from task 3");
  }, 1000);
}

task1((err, result1) => {
  if (err) {
    console.log("Error", err);
  }
  task2(result1, (err, result2) => {
    if (err) {
      console.log("Error", err);
    }
    task3(result2, (err, result3) => {
      if (err) {
        console.log("Error", err);
      }
      console.log("All the task are completed with final result :", result3);
    });
  });
});
