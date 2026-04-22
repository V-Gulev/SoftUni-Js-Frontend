function solve() {
    const stopNameSpanEl = document.querySelector('.info');
    const departBtnEl = document.querySelector('#depart');
    const arriveBtnEL = document.querySelector('#arrive');



    let stopId = 'depat';
    let stopName = '';


    async function depart() {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`);
            const data = await res.json();
            stopId = data.next;
            stopName = data.name;

            stopNameSpanEl.textContent = `Next stop ${stopName}`;
            departBtnEl.disabled = true;
            arriveBtnEL.disabled = false;
        } catch (err) {
            stopNameSpanEl.textContent = 'Error';
            departBtnEl.disabled = true;
            arriveBtnEL.disabled = true;
        }
    }

    function arrive() {
        stopNameSpanEl.textContent = `Arriving at ${stopName}`;
        departBtnEl.disabled = false;
        arriveBtnEL.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();