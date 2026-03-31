function calc() {
    let num1InputEl = document.getElementById('num1');
    let num2InputEl = document.getElementById('num2');
    let sumEl = document.getElementById('sum');

    let num1 = Number(num1InputEl.value);
    let num2 = Number(num2InputEl.value);
    let sum = num1 + num2;

    sumEl.value = sum;

}