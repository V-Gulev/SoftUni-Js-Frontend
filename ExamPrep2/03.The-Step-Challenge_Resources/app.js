// Services
const service = {
    getAllRecords: async () => {
        const result = await request();
        const data = Object.values(result);

        return data;
    },
    createRecord: (record) => request('POST', record),
    editRecord: (record, id) => request('PUT', record, id),
    deleteRecord: (id) => request('DELETE', null, id),
}

async function request(method = 'GET', body = null, id) {
    let url = 'http://localhost:3030/jsonstore/records';
    let options = {};

    if (id) {
        url += `/${id}`;
    }

    if (method !== 'GET') {
        options.method = method;
    }

    if (body) {
        options.headers = {
            'content-type': 'application/json'
        };

        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    return result;
}

// State
let state = {};
function setState(key, value) {
    state[key] = value;
}

function getState(key) {
    return state[key];
}

function clearState(key) {
    delete state[key];
}

function emptyState() {
    state = {};
}

// DOM
const elements = {
    getLoadButton: () => document.getElementById('load-records'),
    getAddButton: () => document.getElementById('add-record'),
    getEditButton: () => document.getElementById('edit-record'),
    getRecordList: () => document.getElementById('list'),
    getNameInput: () => document.getElementById('p-name'),
    getStepsInput: () => document.getElementById('steps'),
    getCaloriesInput: () => document.getElementById('calories'),
    getClosestRecordElement: (element) => element.parentElement.parentElement,
    createRecord(record) {
        const changeButton = createElement('button', { className: 'change-btn', textContent: 'Change' });
        const deleteButton = createElement('button', { className: 'delete-btn', textContent: 'Delete' });

        const recordElement = createElement(
            'li',
            { className: 'record', id: record._id },
            createElement(
                'div',
                { className: 'info' },
                createElement('p', { textContent: record.name }),
                createElement('p', { textContent: record.steps }),
                createElement('p', { textContent: record.calories }),
            ),
            createElement(
                'div',
                { className: 'btn-wrapper' },
                changeButton,
                deleteButton,
            )
        );

        changeButton.addEventListener('click', changeButtonClickHandler);
        deleteButton.addEventListener('click', deleteButtonClickHandler);

        return recordElement;
    }
}

function activateButton(button) {
    button.removeAttribute('disabled');
}

function deactivateButton(button) {
    button.setAttribute('disabled', '');
}

// Form utils
function getFormValues() {
    const values = {
        name: elements.getNameInput().value,
        steps: elements.getStepsInput().value,
        calories: elements.getCaloriesInput().value,
    };

    return values;
}

function setFormValues(values = {}) {
    elements.getNameInput().value = values.name || '';
    elements.getStepsInput().value = values.steps || '';
    elements.getCaloriesInput().value = values.calories || '';
}

function clearFormValues() {
    setFormValues();
}

// Create element util
function createElement(type, props = {}, ...children) {
    const element = document.createElement(type);

    if (props.textContent) {
        element.textContent = props.textContent;
    }

    if (props.className) {
        element.classList.add(props.className);
    }

    if (props.id) {
        element.setAttribute('data-id', props.id);
    }

    if (children && children.length > 0) {
        children.forEach(child => element.appendChild(child));
    }

    return element;
}

// Handlers
async function loadRecords(e) {
    // Clear State
    emptyState();

    // Fetch records
    const records = await service.getAllRecords();

    // Save records in local state
    records.forEach(record => setState(record._id, record));

    // Create elements
    const recordElements = records.map(elements.createRecord);

    const fragment = document.createDocumentFragment();

    recordElements.forEach(element => fragment.appendChild(element));

    elements.getRecordList().innerHTML = '';
    elements.getRecordList().appendChild(fragment);
}

async function addButtonClickHandler(e) {
    // Get form values
    const values = getFormValues();

    // Clear inputs
    clearFormValues();

    // POST Request
    await service.createRecord(values);

    // Load records
    await loadRecords();
}

function changeButtonClickHandler(e) {
    const recordElement = elements.getClosestRecordElement(e.currentTarget);

    // Get data from state
    const recordId = recordElement.getAttribute('data-id');
    const record = getState(recordId);

    // Set record id in state
    setState('selectedRecordId', recordId);

    // Populate input fields
    setFormValues(record)

    // Activate edit button
    activateButton(elements.getEditButton());

    // Add record deactivated
    deactivateButton(elements.getAddButton())
}

async function editButtonClickHandler(e) {
    // Collect data from form
    const values = getFormValues();
    const recordId = getState('selectedRecordId');

    console.log(typeof recordId);

    // PUT Request
    const newRecord = { ...values, _id: recordId };
    await service.editRecord(newRecord, recordId);

    // Fetch all records
    await loadRecords();

    // Deactivate edit button
    deactivateButton(elements.getEditButton());

    // Activate add button
    activateButton(elements.getAddButton());
}

async function deleteButtonClickHandler(e) {
    const recordElement = elements.getClosestRecordElement(e.currentTarget);
    const recordId = recordElement.getAttribute('data-id');

    await service.deleteRecord(recordId);

    // remove from state
    clearState(recordId);

    // Fetch all records
    await loadRecords();
}

function appInit() {
    elements.getLoadButton().addEventListener('click', loadRecords);
    elements.getAddButton().addEventListener('click', addButtonClickHandler);
    elements.getEditButton().addEventListener('click', editButtonClickHandler);
}

appInit();

