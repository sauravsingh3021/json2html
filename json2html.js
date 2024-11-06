// json2html.js
export default function json2html(data) {
    // Create the table element with a data-user attribute
    let table = '<table data-user="sauravsingh3021@gmail.com">';
    
    // Create the table header
    table += '<thead><tr>';
    // Get the keys from the first object to create the column headers dynamically
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      table += `<th>${header}</th>`;
    });
    table += '</tr></thead>';
    
    // Create the table body
    table += '<tbody>';
    data.forEach(row => {
      table += '<tr>';
      headers.forEach(header => {
        table += `<td>${row[header] || ''}</td>`;
      });
      table += '</tr>';
    });
    table += '</tbody>';
    
    // Close the table element
    table += '</table>';
    
    return table;
  }
  