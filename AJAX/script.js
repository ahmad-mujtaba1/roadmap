let fetchbtn;
setTimeout(function () {
  fetchbtn = document.getElementById("fetch-btn");
}, 3000);
setTimeout(function () {
  console.log(fetchbtn);
  fetchbtn.addEventListener("click", eventHandler);
  function eventHandler() {
    const xhr = new XMLHttpRequest();
    url = "https://api.github.com/users?per_page=10";
    xhr.open("GET", url, true);
    xhr.onprogress = function () {
      console.log("On Progress");
    };
    xhr.onload = function () {
      console.log(this.responseText);
    };
    xhr.send();
    console.log("clicked");
  }
}, 4000);
