async function fetchSequentialData() {
  try {
    let response1 = await fetch("https://randomuser.me/api/");
    let data1 = await response1.json();
    console.log("Data1:", data1);

    let response2 = await fetch("https://randomuser.me/api/");
    let data2 = await response2.json();
    console.log("Data2:", data2);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchSequentialData();
