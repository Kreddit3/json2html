// json2html.js
export default function json2html(data) {
    // Get all unique keys to create table columns
    const columns = [...new Set(data.flatMap(obj => Object.keys(obj)))];

    // Start building the HTML table
    let html = `<table data-user="chaturanvesh.kethiri@gmail.com">\n`;
    html += `  <thead>\n    <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>\n  </thead>\n`;

    // Add table rows for each data object
    html += `  <tbody>\n`;
    data.forEach(row => {
        html += `    <tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>\n`;
    });
    html += `  </tbody>\n</table>`;

    return html;
}
