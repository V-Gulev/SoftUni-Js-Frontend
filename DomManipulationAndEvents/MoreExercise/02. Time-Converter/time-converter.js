document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const formEls = document.querySelectorAll('form');

    formEls.forEach(form => form.addEventListener('submit', handleFormSubmit));

    function handleFormSubmit(e) {
        e.preventDefault();

        const formData = e.currentTarget;
        const inputEl = formData.querySelector('input[type=number]');

        const inputTypeValue = formData.id;
        const inputValue = inputEl.value;

        const result = calculateTime(inputValue, inputTypeValue);

        for (const type in result) {
            const inputElement = document.getElementById(`${type}-input`);
            inputElement.value = result[type].toFixed(2);
        }

    }

    function calculateTime(value, type) {
        let seconds;

        switch (type) {
            case 'days':
                seconds = value * 24 * 60 * 60;
                break;
            case 'hours':
                seconds = value * 60 * 60;
                break;
            case 'minutes':
                seconds = value * 60;
                break;
            case 'seconds':
                seconds = value;
                break;
        }

        return {
            days: seconds / (24 * 60 * 60),
            hours: seconds / (60 * 60),
            minutes: seconds / 60,
            seconds: seconds,
        }
    }
}