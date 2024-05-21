function FetchwithPromise() {
  fetch("https://randomuser.me/api/")
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("Error :", err);
    });
}

FetchwithPromise();

async function fetchDataWithAsyncAwait() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataWithAsyncAwait();
