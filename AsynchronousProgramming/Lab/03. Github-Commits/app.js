async function loadCommits() {
    const username = document.getElementById('username').value.trim();
    const repo = document.getElementById('repo').value.trim();
    const comiits = document.getElementById('commits');

    const res = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

    if (!res.ok) {
        const li = document.createElement('li');
        li.textContent = `Error: ${res.status} (${res.statusText})`;
        comiits.appendChild(li);
        return;
    }

    const data = await res.json();


    for (const commit of data) { 
        const li = document.createElement('li');
        li.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
        comiits.appendChild(li);

    }
}