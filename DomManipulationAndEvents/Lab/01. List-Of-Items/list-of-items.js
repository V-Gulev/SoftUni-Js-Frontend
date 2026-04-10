function addItem() {
    const itemsUlEl = document.getElementById('items');
    const inputEl = document.getElementById('newItemText');

    const liEl = document.createElement('li');
    liEl.textContent = inputEl.value;
    itemsUlEl.appendChild(liEl);

    inputEl.value = '';
}
