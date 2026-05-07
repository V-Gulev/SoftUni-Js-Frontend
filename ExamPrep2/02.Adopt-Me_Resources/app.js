window.addEventListener("load", solve);

function solve() {
  const elements = {
    getAdoptButton: () => document.getElementById('adopt-btn'),
    getTypeInput: () => document.getElementById('type'),
    getAgeInput: () => document.getElementById('age'),
    getGenderInput: () => document.getElementById('gender'),
    getAdoptionList: () => document.getElementById('adoption-info'),
    getAdoptedList: () => document.getElementById('adopted-list'),
    getButtonsDiv: (parent = document) => parent.querySelector('.buttons'),
    getClosestInfoEl: (element) => element.parentElement.parentElement,
  };

  const state = {};

  function setState(key, value) {
    state[key] = value;
  }

  function getState(key) {
    return state[key];
  }

  function deleteState(key) {
    delete state[key];
  }


  initEventListeners();

  function initEventListeners() {
    const adoptBtn = elements.getAdoptButton();

    adoptBtn.addEventListener('click', adoptBtnClickHandler)

  }

  function adoptBtnClickHandler(e) {
    e.preventDefault();

    const values = getAdoptionFormValues();

    if (!values.age || !values.type || !values.gender) {
      return;
    }

     e.currentTarget.setAttribute('disabled', '');

    const id = Date.now().toString();

    setState(id, values);

    const infoLiEl = createAdoptionInfoListItem(values, id);

    elements.getAdoptionList().appendChild(infoLiEl);

    setAdoptionFormValues();

    e.currentTarget.removeAttribute('disabled');
  }

  function getAdoptionFormValues() {
    const adoptInfo = {
      type: elements.getTypeInput().value,
      age: elements.getAgeInput().value,
      gender: elements.getGenderInput().value,
    };

    return adoptInfo;
  }

  function setAdoptionFormValues(values = {}) {
      elements.getAgeInput().value = values.age || '';
      elements.getTypeInput().value = values.type || '';
      elements.getGenderInput().value = values.gender || '';

  }

  function createAdoptionInfoListItem(info, infoId) {
    const editBtn = createElement('button', {className: 'edit-btn', textContent: 'Edit'});
    const doneBtn = createElement('button', {className: 'done-btn', textContent: 'Done'});

    const liItem = createElement(
      'li',
      {},
      createElement(
      'article',  
      {}, 
      createElement('p', {textContent: `Pet:${info.type}`}),
      createElement('p', {textContent: `Gender:${info.gender}`}),
      createElement('p', {textContent: `Age:${info.age}`}),
      ),
      createElement(
        'div',
        {className: 'buttons'},
        editBtn,
        doneBtn,
      )
    );
    
    editBtn.addEventListener('click', editBtnClickHandler);
    doneBtn.addEventListener('click', doneBtnClickHandler);

    liItem.setAttribute('data-info-id', infoId);
    
    return liItem;
  }

  function createElement(type, props = {}, ...children) {
      const element = document.createElement(type);

      if (props.textContent) {
        element.textContent = props.textContent;
      }

      if (props.className) {
        element.classList.add(props.className);
      }

      if (children && children.length > 0) {
        for (const child of children) {
            element.appendChild(child);
        }
      } 

      return element;
  }

  function editBtnClickHandler(e) {
    const infoLiEl = elements.getClosestInfoEl(e.currentTarget);

    const infoId = infoLiEl.getAttribute('data-info-id')
    const values = getState(infoId);

    setAdoptionFormValues(values);

    infoLiEl.remove();

    deleteState(infoId);
  }

  function doneBtnClickHandler(e) {
    const infoLiEl = elements.getClosestInfoEl(e.currentTarget);

    const infoId = infoLiEl.getAttribute('data-info-id')
    
    elements.getButtonsDiv(infoLiEl).remove();

    const clearBtn = createElement('button', {className: 'clear-btn', textContent: 'Clear'});
    infoLiEl.appendChild(clearBtn);
    clearBtn.addEventListener('click', clearBtnClickHandler);

    elements.getAdoptedList().appendChild(infoLiEl);

    deleteState(infoId);
  }

  function clearBtnClickHandler(e) {
    const infoLiEl = e.currentTarget.parentElement;

    infoLiEl.remove();
  }
}
