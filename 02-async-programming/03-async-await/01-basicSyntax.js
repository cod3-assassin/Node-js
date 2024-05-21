async function fetchData() {
  let data = await fetch("https://randomuser.me/api/");
  let responce = await data.json();
  console.log(responce);
}

fetchData();
