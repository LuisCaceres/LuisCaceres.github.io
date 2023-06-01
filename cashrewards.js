const html = `
  <table>
    <tr>
      <th>Name</th>
      <th>Reward</th>
    </tr>
    <tr class="template">
      <td>
        <a class="hyperlink" target="_blank"></a>
      </td>
      <td class="offer"></td>
    </tr>
  </table>
`;

const table = (new DOMParser()).parseFromString(html, 'text/html').querySelector('table');
const dataSets = JSON.parse(document.querySelector('pre').innerText).Data;

for (const {Name, CommissionString} of dataSets) {
    const tr = table.querySelector('.template').cloneNode(true);
    const [hyperlink, offer] = tr.querySelectorAll('.hyperlink, .offer');

    hyperlink.href = `https://${Name.replace(/\s/g, '')}.com.au`;
    hyperlink.append(Name);
    offer.append(CommissionString);
    table.append(tr);
}

function sort(row1, row2) {
    // This regular expression matches, for example, "112" in "Up to $112 cashback" or "31.5" in "31.5% cashback".
    const regex = /\d+(\.\d+)?/;
    const [number1] = row1.cells[1].innerText.match(regex);
    const [number2] = row2.cells[1].innerText.match(regex);

    return number2 - number1;
} 

table.append(...[...table.rows].slice(2).sort(sort));
document.querySelector('pre').replaceWith(table);
