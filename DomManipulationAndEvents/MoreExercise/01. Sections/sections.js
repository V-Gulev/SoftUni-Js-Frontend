document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const generateButton = document.querySelector('#task-input input[type=submit]');
   generateButton.addEventListener('click', generateButtonClickHandler);
   

   function generateButtonClickHandler(e) {
      e.preventDefault();
      const inputEl = document.querySelector('#task-input input[type=text]');
   
      const titles = inputEl.value.split(', ');

      const titleSections = titles.map(createTitleSection);

      const contentEl = document.getElementById('content');

      contentEl.addEventListener('click', (e) => {
         if (!e.target.tagName === 'DIV') {
            return;
         }

         const titleEl = e.target.querySelector('p');
         
         titleEl.style.display = 'block';
      });

      contentEl.append(...titleSections);


   }

   function createTitleSection(title) {
      const titleEl = document.createElement('p');
      titleEl.textContent = title;
      titleEl.style.display = 'none';
      
      const containerEl = document.createElement('div');
      containerEl.appendChild(titleEl);
      
      return containerEl;
   }
}