// Challenge: Write an async function called fetchUserDetails that takes a user ID as a parameter. It should:

// Fetch user details from a mock API endpoint: https://jsonplaceholder.typicode.com/users/{userId}.
// Fetch posts made by the user from another mock API endpoint: https://jsonplaceholder.typicode.com/posts?userId={userId}.
// Log the user details and the titles of their posts to the console.
// Handle any potential errors using try...catch.

async function fetchUserDetails(userId) {
  try {
    // Fetch user details
    let userDetails = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    let response1 = await userDetails.json();
    console.log("User Details:", response1);

    // Fetch posts made by the user
    let post = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    let response2 = await post.json();

    // Log the titles of the user's posts
    console.log("Post Titles:");
    response2.forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Test the function with a specific user ID
fetchUserDetails(3);
