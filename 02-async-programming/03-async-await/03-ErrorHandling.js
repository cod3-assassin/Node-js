async function fetchData() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      // check for HTTP errors
      throw new Error("Network response was not ok " + response.statusText);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();
