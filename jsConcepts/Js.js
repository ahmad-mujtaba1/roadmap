// async function pending() {
//   let response = await fetch("https://api.github.com/users");
//   if (response.ok) {
//     let json = await response.json();
//     console.log("working");
//     //  console.log(json[0]);
//   }
// }
// pending();

let promise = new Promise(async function (resolve, reject) {
  resolve = await fetch("https://api.github.com/users");
  if (resolve) {
    let jsons = await resolve.json();
    console.log("working");
    console.log(jsons[0]);
  } else {
    reject = "error in loading";
    console.log(reject);
  }
});
