document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const showMoreButtonEls = document.querySelectorAll('.profile button');
    const lockRadioEls = document.querySelectorAll('.radio-group input[type=radio]:first-of-type');

    showMoreButtonEls.forEach(button => button.addEventListener('click', handleShowMoreClick));

    lockRadioEls.forEach(el => el.addEventListener('click', (e) => {
        const profileElement = e.currentTarget.closest('.profile');

        const buttonEl = profileElement.querySelector('button');
        const hiddenFields = profileElement.querySelector('.hidden-fields');
        
        hiddenFields.style.display = 'none';
        buttonEl.textContent = 'Show more';
    }));


    function handleShowMoreClick(e){
        const buttonEl = e.currentTarget;
        const profileElement = buttonEl.parentElement;

        const lockRadioEl = profileElement.querySelector('.radio-group input[type=radio]')
        
        
        if (lockRadioEl.checked) {
            return;
        }

        const hiddenFields = profileElement.querySelector('.hidden-fields');

        if (buttonEl.textContent === 'Show more') {
            hiddenFields.style.display = 'block';
            buttonEl.textContent = 'Show less';
        } else {
            hiddenFields.style.display = 'none';
            buttonEl.textContent = 'Show more';
        }
        
    }
    
}