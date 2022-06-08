var userss = [];

url = "https://api.github.com/users?per_page=10";
async function fetchMoviesJSON() {
  const response = await fetch(url);
  userss = await response.json();
  return userss;
}
fetchMoviesJSON().then((userss) => {
  userss; // fetched movies
});
setTimeout(() => {
  console.log(userss);
  document.getElementById("1").innerHTML = userss
    .map(
      (user) =>
        `<tr>
      <th> ${user.login}</th>
      <th> ${user.id}</th>
      <th> ${user.node_id}</th>
      <th> ${user.avatar_url}</th>
      <th> ${user.gists_url}</th>
    </tr>`
    )
    .join("");
}, 4000);
