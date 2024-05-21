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

function fetchUserData(userId, url) {
  return fetchDataFromAPI(url)
    .then((data) => {
      if (data.message === "Mock data fetched successfully") {
        // For demonstration, let's assume the user data is an array of objects
        const userData = [
          { id: 1, name: "John" },
          { id: 2, name: "Alice" },
          { id: 3, name: "Bob" },
        ];
        const user = userData.find((user) => user.id === userId);
        if (user) {
          return user;
        } else {
          throw new Error("User ID not found.");
        }
      } else {
        throw new Error("Failed to fetch user data.");
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

const userId = 2;
const apiUrl = "https://api.example.com/users";
fetchUserData(userId, apiUrl)
  .then((user) => {
    console.log("User data:", user);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
