handleButton = () => {
  document.location = "index.html";
  console.log("clicked");
};

async function pending() {
  url = "https://api.github.com/users?per_page=2";
  fetch(url).then(responses);
}
pending();

let promise = new Promise(async function (resolve, reject) {
  resolve = await fetch("https://api.github.com/users?per_page=3");
  if (resolve) {
    const json = await resolve.json();
    console.log("working");
    console.log(json);
  } else {
    reject = "error in loading";
    console.log(reject);
  }
});
