// Sequential Execution
// Write an async function called fetchUserAndPostDataSequentially that:

// Takes a userId as a parameter.
// Fetches user details from https://jsonplaceholder.typicode.com/users/{userId}.
// After fetching user details, fetches the posts made by the user from https://jsonplaceholder.typicode.com/posts?userId={userId}.
// Logs the user details and the titles of their posts to the console.
// Handles any potential errors using try...catch.
// Parallel Execution
// Write another async function called fetchUserAndPostDataParallelly that:

// Takes a userId as a parameter.
// Fetches user details and posts concurrently using Promise.all.
// Logs the user details and the titles of their posts to the console.
// Handles any potential errors using try...catch.
// Details
// For both functions:

// Make sure to use await appropriately.
// Ensure proper error handling.
// Use console.log to print the results.

async function fetchUserAndPostDataSequentially(userId) {
  try {
    // Fetch user details
    let userDetails = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    let userResponse = await userDetails.json();
    console.log("User:", userResponse);

    // Fetch posts made by the user
    let postDetails = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    let postResponse = await postDetails.json();
    console.log("Post Titles:");
    postResponse.forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchUserAndPostDataParallelly(userId) {
  try {
    // Fetch user details and posts concurrently
    let [userDetails, postDetails] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    ]);

    let userResponse = await userDetails.json();
    let postResponse = await postDetails.json();

    console.log("User:", userResponse);

    console.log("Post Titles:");
    postResponse.forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserAndPostDataSequentially(1);
fetchUserAndPostDataParallelly(1);
