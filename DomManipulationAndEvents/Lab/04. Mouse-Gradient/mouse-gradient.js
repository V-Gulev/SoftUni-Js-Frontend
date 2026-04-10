function attachGradientEvents() {
    const gradientDiv = document.getElementById('gradient');
    const resultDiv = document.getElementById('result');

    gradientDiv.addEventListener('mousemove', handleMouseMove);

    function handleMouseMove(e) {
        const x = e.offsetX;
        const divWidth = e.target.clientWidth;

        const percent = Math.floor((x / divWidth) * 100);
        resultDiv.textContent = `${percent}%`;
    }

}
