document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const emailInput = document.getElementById('email');
    
    emailInput.addEventListener('change', handleEmailChange);

    function handleEmailChange(e) {
        const email = e.target.value.trim();
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/;
        const isValid = pattern.test(email);

        if (isValid) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    }

}
