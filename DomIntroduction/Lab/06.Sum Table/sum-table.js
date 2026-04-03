function sumTable() {
    const priceTdEl = document.querySelectorAll('tbody tr td:nth-child(2)');
    let sum = 0;
    for (let price of priceTdEl) {
        sum += Number(price.textContent);
    }
    document.getElementById('sum').textContent = sum;


}