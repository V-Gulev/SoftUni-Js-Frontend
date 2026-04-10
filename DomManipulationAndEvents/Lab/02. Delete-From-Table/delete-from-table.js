function deleteByEmail() {
    const emails = document.querySelectorAll('tr td:nth-child(2)');
    const emailToDelete = document.querySelector('input[name="email"]').value;

    const result = document.getElementById('result');

    for (let email of emails) {
        if (email.textContent === emailToDelete) {
            email.parentElement.remove();
            result.textContent = 'Deleted.';
            return;
        } else {
            result.textContent = 'Not found.';
        }
    }
}
