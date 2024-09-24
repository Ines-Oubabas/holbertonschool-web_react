const body = document.querySelector('body');
if (body) {
    const table = document.createElement('table');
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = 'Sample text';
    row.appendChild(cell);
    table.appendChild(row);
    body.appendChild(table);
} else {
    console.error('Body element not found');
}

