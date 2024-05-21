function fetchDataFromAPI(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.startsWith("http")) {
        const mockData = { message: "Mock data fetched successfully" };
        resolve(mockData);
      } else {
        reject("Invalid URL or unreachable endpoint.");
      }
    }, 1000);
  });
}

const apiUrl = "https://api.example.com/data";
fetchDataFromAPI(apiUrl)
  .then((data) => {
    console.log("Data from API:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
