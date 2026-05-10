window.addEventListener("load", solve);

function solve() {
    const createBtn = document.getElementById('create-btn');
    const nameInput = document.getElementById('name');
    const locationInput = document.getElementById('location');
    const genderInput = document.getElementById('gender');

    const preparingListEl = document.getElementById('preparing-list');
    const characterListEl = document.getElementById('character-list');

    createBtn.addEventListener('click', createBtnClickHandler);

    function createBtnClickHandler(e) {
        e.preventDefault();

        if (nameInput.value === '' || locationInput.value === '' || genderInput.value === '') {
            return;
        }

        const nameValue = nameInput.value;
        const locationValue = locationInput.value;
        const genderValue = genderInput.value;

        const liEl = document.createElement('li');
        liEl.classList.add('creating');
        const articleEl = document.createElement('article');
        const nameEl = document.createElement('h4');
        const locationEl = document.createElement('p');
        const genderEl = document.createElement('p');

        nameEl.textContent = nameValue;
        locationEl.textContent = locationValue;
        genderEl.textContent = genderValue;

        articleEl.appendChild(nameEl);
        articleEl.appendChild(locationEl);
        articleEl.appendChild(genderEl);

        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('action-btn', 'done');
        doneBtn.textContent = 'Done';

        liEl.appendChild(articleEl);
        liEl.appendChild(editBtn);
        liEl.appendChild(doneBtn);

        preparingListEl.appendChild(liEl);

        nameInput.value = '';
        locationInput.value = '';
        genderInput.value = '';

        createBtn.setAttribute('disabled', '');

        editBtn.addEventListener('click', () => {
            nameInput.value = nameValue;
            locationInput.value = locationValue;
            genderInput.value = genderValue;

            liEl.remove();
            createBtn.removeAttribute('disabled');
        });

        doneBtn.addEventListener('click', () => {
            liEl.removeChild(editBtn);
            liEl.removeChild(doneBtn);

            characterListEl.appendChild(liEl);

            createBtn.removeAttribute('disabled');
        });
    }
}
