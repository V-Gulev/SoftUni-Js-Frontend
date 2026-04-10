document.addEventListener('DOMContentLoaded', focused);

function focused() {
    const allInput = document.querySelectorAll('input[type="text"]');

    for (let input of allInput) {
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
    }

    function handleFocus(e) {
        e.target.parentElement.classList.add('focused');
    }

    function handleBlur(e) {
        e.target.parentElement.classList.remove('focused');
    }
}
