const stopIdInputEl = document.getElementById('stopId');
const stopNameDivEl = document.getElementById('stopName');
const busesIlEL = document.getElementById('buses');

async function getInfo() {
    const stopId = stopIdInputEl.value.trim();
    try {
        const res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        const data = await res.json();
        stopNameDivEl.textContent = data.name;
        const busEntries = Object.entries(data.buses);

        for (const [busNo, arrivalTime] of busEntries) {
            const liEl = document.createElement('li');
            liEl.textContent = `Bus ${busNo} arrives in ${arrivalTime} minutes`;
            busesIlEL.appendChild(liEl);
        }
    } catch (err) {
        stopIdInputEl.textContent = 'Error';
    }


}