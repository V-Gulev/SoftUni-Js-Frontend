const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadBtn = document.getElementById('load-games');
const gamesList = document.getElementById('games-list');
const addBtn = document.getElementById('add-game');
const editBtn = document.getElementById('edit-game');
const nameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');

let selectedGameId = null;


loadBtn.addEventListener('click', loadBtnClickHandler);
addBtn.addEventListener('click', addBtnClickHandler);
editBtn.addEventListener('click', editBtnClickHandler);

async function loadBtnClickHandler(e) {
    await loadGames();

}

async function loadGames() {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const games = Object.values(result);

    const gameEls = games.map(createGameElement);

    gamesList.innerHTML = '';

    gamesList.append(...gameEls);
}

async function addBtnClickHandler(e) {
    
    const newGame = {
        name: nameInput.value,
        type: typeInput.value,
        players: playersInput.value,
    };

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newGame)
    });

    loadGames();
    
    clearInputs();

}

async function editBtnClickHandler(e) {
    const modifiedGame = {
        _id: selectedGameId,
        name: nameInput.value,
        type: typeInput.value,
        players: playersInput.value,
    };

    await fetch(`${baseUrl}/${selectedGameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(modifiedGame),
    });


    loadGames();

    editBtn.setAttribute('disabled', '');

    addBtn.removeAttribute('disabled');

    clearInputs();

    selectedGameId = null;
}

function clearInputs(){
    nameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';
}

function createGameElement(game) {
    console.log(game);
    const gameEl = document.createElement('div');
    gameEl.classList.add('board-game');

    const contentEl = document.createElement('div');
    contentEl.classList.add('content');

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = game.name;

    const typeParagraph = document.createElement('p');
    typeParagraph.textContent = game.type;

    const playersParagraph = document.createElement('p');
    playersParagraph.textContent = game.players;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const changeBtn = document.createElement('button');
    changeBtn.classList.add('change-btn');
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click', () => {
        nameInput.value = game.name;
        typeInput.value = game.type;
        playersInput.value = game.players;

        editBtn.removeAttribute('disabled');

        addBtn.setAttribute('disabled', '');

        selectedGameId = game._id;
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', async () => {
        await fetch(`${baseUrl}/${game._id}`, {
            method: 'DELETE',
        });

        loadGames();
    });
    
    contentEl.append(nameParagraph, typeParagraph, playersParagraph,);
    
    buttonsContainer.append(changeBtn, deleteBtn,);
    
    gameEl.append(contentEl, buttonsContainer);
    return gameEl;
}

