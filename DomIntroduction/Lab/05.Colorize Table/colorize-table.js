function colorize() {
    
    let tableEl = document.querySelectorAll('tbody tr:nth-child(even)');
    
    for (let row of tableEl) {
        row.style.backgroundColor = 'teal';
    }

}