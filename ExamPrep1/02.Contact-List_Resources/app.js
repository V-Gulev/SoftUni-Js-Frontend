window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const categoryInput = document.getElementById('category');
    const checkListEl = document.getElementById('check-list');
    const contactListEl = document.getElementById('contact-list');

    addBtn.addEventListener('click', addButtonClickHandler);


    function addButtonClickHandler(e) {
      const name = nameInput.value;
      const phone = phoneInput.value;
      const category = categoryInput.value;

      if (!name || !phone || !category) {
        return;
      }

      const checkListItemEl = createCheckListItem(name, phone, category);

      checkListEl.appendChild(checkListItemEl);

      nameInput.value = '';
      phoneInput.value = '';
      categoryInput.value = '';


    }

    function createCheckListItem(name, phone, category) {
      const liEl = document.createElement('li');
      const paragraphNameEl = document.createElement('p');
      paragraphNameEl.textContent = `name:${name}`;

      const paragraphPhoneEl = document.createElement('p');
      paragraphPhoneEl.textContent = `phone:${phone}`;

      const paragraphCategoryEl = document.createElement('p');
      paragraphCategoryEl.textContent = `category:${category}`;

      const articleEl = document.createElement('article');
      articleEl.appendChild(paragraphNameEl);
      articleEl.appendChild(paragraphPhoneEl);
      articleEl.appendChild(paragraphCategoryEl);

      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');

      const editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.addEventListener('click', () => {
        nameInput.value = name;
        phoneInput.value = phone;
        categoryInput.value = category;

        liEl.remove();
      });

      const saveBtn = document.createElement('button');
      saveBtn.classList.add('save-btn');
      saveBtn.addEventListener('click', () => {
        contactListEl.appendChild(liEl);

        buttonsDiv.remove();

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('del-btn');
        deleteBtn.addEventListener('click', () => {
          liEl.remove();
        });

        liEl.appendChild(deleteBtn);
      });

      

      buttonsDiv.appendChild(editBtn);
      buttonsDiv.appendChild(saveBtn);

      liEl.appendChild(articleEl);
      liEl.appendChild(buttonsDiv);

      return liEl;
    }
  }
