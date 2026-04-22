async function loadRepos() {
	const username = document.getElementById('username').value.trim();
	const repos = document.getElementById('repos');

	const res = await fetch(`https://api.github.com/users/${username}/repos`);
	const data = await res.json();

	repos.innerHTML = "";
	
	for (const repo of data) {
		const li = document.createElement('li');
		const aElement = document.createElement('a');
		aElement.href = repo.html_url;
		aElement.textContent = repo.full_name;
		li.appendChild(aElement);
		repos.appendChild(li);
	}


}