function solve() {
    const columns = Array.from(document.querySelectorAll('table thead input')).reduce((result, column) => {
        const columnName = column.getAttribute('name');
        const selected = column.checked;

        result[columnName] = selected;

        return result;
    }, {});

    const columnEntries = Object.entries(columns);

    const rows = document.querySelectorAll('table tbody tr');

    const result = [];

    for (const row of rows) {
        const resultRow = {};
        Array.from(row.children).forEach((cell, index) => {
            const [columnName, selected] = columnEntries[index];
            if (selected) {
                resultRow[columnName] = cell.textContent;
            }
        });
        result.push(resultRow);
    }

    document.getElementById('output').textContent = JSON.stringify(result);

}