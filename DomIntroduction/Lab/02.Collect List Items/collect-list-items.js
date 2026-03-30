function extractText() {
    let liEls = document.querySelectorAll('li');
    let textAreaEl = document.querySelector('#result');

    for (let item of liEls) {
        let text = item.textContent;
        textAreaEl.textContent += text + '\n';
    }

}