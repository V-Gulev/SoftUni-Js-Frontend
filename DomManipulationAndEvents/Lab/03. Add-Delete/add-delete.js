function addItem() {
    const itemsUlEl = document.getElementById('items');
    const inputEl = document.getElementById('newItemText');

    const liEl = document.createElement('li');
    liEl.textContent = inputEl.value;

    const deleteAEl = document.createElement('a');
    deleteAEl.textContent = '[Delete]';
    deleteAEl.href = '#';
    deleteAEl.textContent = '[Delete]';

    liEl.appendChild(deleteAEl);
    itemsUlEl.appendChild(liEl);

    deleteAEl.addEventListener('click', deleteListItem);

    function deleteListItem(e) {
        e.target.parentNode.remove();
    }



}
