const https = require("https");

https
  .get("https://randomuser.me/api/", (res) => {
    let data = "";

    // A chunk of data has been received.
    res.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    res.on("end", () => {
      console.log("Response:", data);
    });
  })
  .on("error", (err) => {
    console.error("Error:", err);
  });
