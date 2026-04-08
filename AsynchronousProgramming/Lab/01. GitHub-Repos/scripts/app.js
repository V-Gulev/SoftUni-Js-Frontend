async function loadRepos() {
   const div = document.getElementById('res');
   const response = await fetch("https://api.github.com/users/testnakov/repos");
   const data = await response.text();
   div.textContent = data;


}