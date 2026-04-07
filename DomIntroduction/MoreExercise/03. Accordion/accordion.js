function toggle() {
    const extraText = document.getElementById('extra');
    const buttonEl = document.getElementsByClassName('button')[0];

    if (extraText.style.display === 'none') {
        extraText.style.display = 'block';
        buttonEl.textContent = 'Less';
    } else {
        extraText.style.display = 'none'
        buttonEl.textContent = 'More';
    }

}