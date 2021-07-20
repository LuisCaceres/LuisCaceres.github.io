
console.log('Testing starting.');

const expect = chai.expect;

function generateList(outcoming, incoming) {
  const currentList = new List();
  const nextList = new List();
  const itemsA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
  const itemsB = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];

  for (let i = 1; i <= 20; i++) {
      currentList.push(outcoming.includes(i) ? `OUT ${i}` : itemsA.shift());
      nextList.push(incoming.includes(i) ? `IN ${i}` : itemsB.shift());
  }

  return { currentList, nextList };
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// associate()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const list = ['Title 1', 'Title 3'];
  
  const charted = new List(
    { artist: 'Artist 1', title: 'Title 1', match: 'Title 1' },
    { artist: 'Artist 2', title: 'Title 2', match: 'Title 2' },
  );
  
  const uncharted = new List({ artist: 'Artist 3', title: 'Title 3' });
  
  const value = associate(list, charted, uncharted);

  expect(value.chart.length).to.equal(2);
  expect(value.chart[0]).to.equal(uncharted[0]);  // Artist 3
  expect(value.chart[1]).to.equal(charted[0]);    // Artist 1
  expect(value.chart[0].hasOwnProperty('match')).to.equal(true);


  expect(value.charted.length).to.equal(3);
  expect(value.uncharted.length).to.equal(0);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// at()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const array = [1, 2, 3, 4, 5];
  
  expect(array.at(0)).to.equal(1);
  expect(array.at(1)).to.equal(2);
  expect(array.at(2)).to.equal(3);
  expect(array.at(3)).to.equal(4);
  expect(array.at(4)).to.equal(5);
  expect(array.at(5)).to.equal(undefined);
  
  expect(array.at(-1)).to.equal(5);
  expect(array.at(-2)).to.equal(4);
  expect(array.at(-3)).to.equal(3);
  expect(array.at(-4)).to.equal(2);
  expect(array.at(-5)).to.equal(1);
  expect(array.at(-6)).to.equal(undefined);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// generatePlaylist()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const chart = new List(
    'POSITION 20',
    'POSITION 19',
    'POSITION 18',
    'EXTRA 1',
    'POSITION 17',
    'POSITION 16',
    'POSITION 15',
    'POSITION 14',
    'POSITION 13',
    'POSITION 12',
    'POSITION 11',
    'POSITION 10',
    'POSITION 09',
    'POSITION 08',
    'EXTRA 2',
    'POSITION 07',
    'POSITION 06',
    'POSITION 05',
    'POSITION 04',
    'POSITION 03',
    'POSITION 02',
    'POSITION 01',
  );
     
  const playlist = generatePlaylist(chart, 'INTRO', 'STING', 'ADVERTISEMENT', 'STING NEW VIDEO');
  
  expect(playlist.length).to.equal(57);
  
  expect(playlist[0]).to.equal('INTRO');
  expect(playlist[1]).to.equal('STING');
  expect(playlist[2]).to.equal('POSITION 20');
  expect(playlist[3]).to.equal('STING');
  expect(playlist[4]).to.equal('POSITION 19');
  expect(playlist[5]).to.equal('ADVERTISEMENT');
  
  expect(playlist[6]).to.equal('STING');
  expect(playlist[7]).to.equal('POSITION 18');
  expect(playlist[8]).to.equal('STING VIDEO EXTRA');
  expect(playlist[9]).to.equal('EXTRA 1');
  expect(playlist[10]).to.equal('ADVERTISEMENT');
  
  expect(playlist[11]).to.equal('STING');
  expect(playlist[12]).to.equal('POSITION 17');
  expect(playlist[13]).to.equal('STING');
  expect(playlist[14]).to.equal('POSITION 16');
  expect(playlist[15]).to.equal('ADVERTISEMENT');
  
  expect(playlist[16]).to.equal('STING');
  expect(playlist[17]).to.equal('POSITION 15');
  expect(playlist[18]).to.equal('STING');
  expect(playlist[19]).to.equal('POSITION 14');
  expect(playlist[20]).to.equal('ADVERTISEMENT');
  
  expect(playlist[21]).to.equal('STING');
  expect(playlist[22]).to.equal('POSITION 13');
  expect(playlist[23]).to.equal('STING');
  expect(playlist[24]).to.equal('POSITION 12');
  expect(playlist[25]).to.equal('ADVERTISEMENT');
  
  expect(playlist[26]).to.equal('STING');
  expect(playlist[27]).to.equal('POSITION 11');
  expect(playlist[28]).to.equal('ADVERTISEMENT');
  
  expect(playlist[29]).to.equal('STING');
  expect(playlist[30]).to.equal('POSITION 10');
  expect(playlist[31]).to.equal('STING');
  expect(playlist[32]).to.equal('POSITION 09');
  expect(playlist[33]).to.equal('ADVERTISEMENT');
  
  expect(playlist[34]).to.equal('STING');
  expect(playlist[35]).to.equal('POSITION 08');
  expect(playlist[36]).to.equal('STING VIDEO EXTRA');
  expect(playlist[37]).to.equal('EXTRA 1');
  expect(playlist[38]).to.equal('ADVERTISEMENT');

  expect(playlist[39]).to.equal('STING');
  expect(playlist[40]).to.equal('POSITION 07');
  expect(playlist[41]).to.equal('STING');
  expect(playlist[42]).to.equal('POSITION 06');
  expect(playlist[43]).to.equal('ADVERTISEMENT');

  expect(playlist[44]).to.equal('STING');
  expect(playlist[45]).to.equal('POSITION 05');
  expect(playlist[46]).to.equal('STING');
  expect(playlist[47]).to.equal('POSITION 04');
  expect(playlist[48]).to.equal('ADVERTISEMENT');
  
  expect(playlist[49]).to.equal('STING');
  expect(playlist[50]).to.equal('POSITION 03');
  expect(playlist[51]).to.equal('STING');
  expect(playlist[52]).to.equal('POSITION 02');
  expect(playlist[53]).to.equal('ADVERTISEMENT');
  
  expect(playlist[54]).to.equal('STING');
  expect(playlist[55]).to.equal('POSITION 01');
  expect(playlist[56]).to.equal('INTRO');
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// encode()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// encode a string
{
  const value = encode('Hello world!');
  const expectation = 'Ifmmp!xpsme\"';
  expect(expectation).to.equal(value);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// format()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const { currentList, nextList } = generateList([16, 18], [10, 19]);
  
  
  const database = [
    { history: [5, 5, 9, 13, 15], match: 'OUT 18' },
    { history: [1, 1, 1, 2, 3, 3, 5, 6, 6, 8, 12], match: 'OUT 16' },
  ];
  
  const list = format(currentList, nextList, database);
  
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 18')).to.equal(false);
  expect(list.includes('OUT 16')).to.equal(true);
  expect(list.includes('IN 19')).to.equal(false);
  expect(list.includes('IN 10')).to.equal(true);
  expect(list.indexOf('IN 10')).to.equal(17); // POSITION 18
}
{
  const { currentList, nextList } = generateList([16, 17, 18, 20], [20, 19, 15, 12]);
  
  const database = [
    { history: [11], match: 'OUT 16' },
    { history: [10], match: 'OUT 17' },
    { history: [15], match: 'OUT 18' },
    { history: [19], match: 'OUT 20' },
  ];
  
  const list = format(currentList, nextList, database);
  
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 17')).to.equal(true);
  expect(list.includes('OUT 16')).to.equal(true);
  expect(list.includes('IN 20')).to.equal(false);
  expect(list.includes('IN 19')).to.equal(false);
  expect(list.includes('IN 15')).to.equal(false);
  expect(list.includes('IN 12')).to.equal(true);
  
  const position = list.indexOf('IN 12') + 1;
  expect([18, 20].includes(position)).to.equal(true); // POSITION 18 OR 20
}
{
  const { currentList, nextList } = generateList([16, 18], [19, 20]);
  
  const list = format(currentList, nextList, {});
  
  expect(list.length).to.equal(20);
  expect(list.includes('IN 20')).to.equal(false); 
  expect(list.includes('IN 19')).to.equal(false); 
  expect(list.includes('OUT 18')).to.equal(true); 
  expect(list.includes('OUT 16')).to.equal(true);
}
{
  const { currentList, nextList } = generateList([16], [17]);
  
  const list = format(currentList, nextList, {});
  
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 16')).to.equal(true); 
  expect(list.includes('IN 17')).to.equal(false);
}
{
  const { currentList, nextList } = generateList([18], [16]);

  const list = format(currentList, nextList, {});

  expect(list.length).to.equal(20);
  expect(list.includes('OUT 18')).to.equal(true);
  expect(list.includes('IN 16')).to.equal(false);
}
{
  const { currentList, nextList } = generateList([17, 19, 20], [16, 11, 8]);

  const database = [
    {history: [13, 13, 14, 17, 19], match: 'OUT 20'},
    {history: [7, 7, 9, 11, 15], match: 'OUT 19'},
    {history: [6, 5, 7, 8, 12], match: 'OUT 17'},
  ];

  const list = format(currentList, nextList, database);

  expect(list.length).to.equal(20);
  expect(list.includes('OUT 20')).to.equal(false); // 19 - 20 - **
  expect(list.includes('OUT 19')).to.equal(false); // 15 - 19 - **
  expect(list.includes('OUT 17')).to.equal(true);  // 12 - 17 - **
  expect(list.includes('IN 16')).to.equal(false);
  expect(list.includes('IN 11')).to.equal(true);
  expect(list.includes('IN 8')).to.equal(true);

  {
    const position = list.indexOf('IN 11') + 1;
    expect([19, 20].includes(position)).to.equal(true); // POSITION 19 OR 20
  }
  {
    const position = list.indexOf('IN 8') + 1;
    expect([19, 20].includes(position)).to.equal(true); // POSITION 19 OR 20
  }
}
{
  const { currentList, nextList } = generateList([20], [1]);

  const database = [
    {history: [], match: 'OUT 20'},
  ];

  const list = format(currentList, nextList, database);

  expect(list.length).to.equal(20);
  expect(list.includes('OUT 20')).to.equal(false);
  expect(list.includes('IN 1')).to.equal(true); 

  const position = list.indexOf('IN 1') + 1;
  expect([20].includes(position)).to.equal(true); // POSITION 20
}
// I WOULD LIKE THIS TO APPLY BUT IT'S NOT POSSIBLE BECAUSE 20, 19, 18, 18 * IS INTERPRETED AS AN ITEM STILL ASCENDING.
// HOW TO DIFFERENTIATE THE ABOVE FROM 20, 18, 16, 14, 13, 13, 20, *?
// {
//   const { currentList, nextList } = generateList([18], [7]);

//   const database = [
//     {history: [20, 19, 18], match: 'OUT 18'},
//   ];
  
//   const list = format(currentList, nextList, database);
  
//   expect(list.length).to.equal(20);
//   expect(list.includes('OUT 18')).to.equal(false);
//   expect(list.includes('IN 7')).to.equal(true);
// }
{
  const { currentList, nextList } = generateList([20], [9]);

  const database = [
    {history: [20], match: 'OUT 20'},
  ];

  const list = format(currentList, nextList, database);

  expect(list.length).to.equal(20);
  expect(list.includes('OUT 20')).to.equal(false);
  expect(list.includes('IN 9')).to.equal(true);

  const position = list.indexOf('IN 9') + 1;
  expect([20].includes(position)).to.equal(true); // POSITION 20
}
{
  const { currentList, nextList } = generateList([14, 13], [12, 16]);

  const database = [
    {history: [6, 10, 14], match: 'OUT 14'},
    {history: [7, 12, 13], match: 'OUT 13'},
  ];

  const list = format(currentList, nextList, database);

  expect(list.length).to.equal(20);
  expect(list.includes('OUT 14')).to.equal(false);
  expect(list.includes('OUT 13')).to.equal(true);
  expect(list.includes('IN 16')).to.equal(false);
  expect(list.includes('IN 12')).to.equal(true);

  const position = list.indexOf('IN 12') + 1;
  expect([14].includes(position)).to.equal(true); // POSITION 14
}
{
  const { currentList, nextList } = generateList([13], [11]);

  const database = [
    {history: [6, 10, 14], match: 'OUT 13'},
  ];
  
  const list = format(currentList, nextList, database);
  
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 13')).to.equal(false);
  expect(list.includes('IN 11')).to.equal(true);

  const position = list.indexOf('IN 11') + 1;
  expect([13].includes(position)).to.equal(true); // POSITION 13
}
// FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
{
  const { currentList, nextList } = generateList([11], [5]);

  const database = [
    {history: [6, 2, 2, 1], match: 'OUT 11'},
  ];
  
  const list = format(currentList, nextList, database);
  
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 11')).to.equal(true);
  expect(list.includes('IN 5')).to.equal(false);
}
// FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
{
  const { currentList, nextList } = generateList([15], [10]);

  const database = [
    {history: [19, 17, 13, 11, 11], match: 'OUT 15'},
  ];
  
  const list = format(currentList, nextList, database);
  
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 15')).to.equal(true); 
  expect(list.includes('IN 10')).to.equal(false); 
}
// FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
{
  const { currentList, nextList } = generateList([20], [9]);

  const database = [
    {history: [20, 18, 16, 14, 13, 13], match: 'OUT 20'},
  ];
 
  const list = format(currentList, nextList, database);
 
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 20')).to.equal(true);
  expect(list.includes('IN 9')).to.equal(false);
}
// FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
{
  const { currentList, nextList } = generateList([13], [12]);

  const database = [
    {history: [7, 12, 13], match: 'OUT 13'},
  ];

  const list = format(currentList, nextList, database);

  expect(list.length).to.equal(20);
  expect(list.includes('OUT 13')).to.equal(true); 
  expect(list.includes('IN 12')).to.equal(false); 
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// parse()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const HTML = `
    <table>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th>Title</th>
        <th>Artist</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Title 1</td>
        <td>Artist 1</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Title 2</td>
        <td>Artist 2</td>
      </tr>
    </table>
  `;
  
  const table = (new DOMParser()).parseFromString(HTML, 'text/html');
  const value = parse(table);
  
  expect(value.length).to.equal(2);
  expect(value[0]).to.equal(encode('Artist 1 Title 1'));
  expect(value[1]).to.equal(encode('Artist 2 Title 2'));
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// class List
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// difference()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Return a non zero-length list if there are differences between two arrays.
{
  const listA = new List('A', 'B', 'C', 'D', 'E');
  const listB = new List('F', 'G', 'H', 'A', 'B');
  const value = listA.difference(listB);
  
  expect(value.length).to.equal(3);
  expect(value[0]).to.equal('F');
  expect(value[1]).to.equal('G');
  expect(value[2]).to.equal('H');
}
// Return a non zero-length list if there are differences between two arrays. 
{
  const listA = new List('A', 'B', 'C', 'D', 'E');
  const listB = new List('F', 'G', 'H', 'A', 'B');
  const value = listB.difference(listA);
  
  expect(value.length).to.equal(3);
  expect(value[0]).to.equal('C');
  expect(value[1]).to.equal('D');
  expect(value[2]).to.equal('E');
}
// Return an empty list if there are no differences between two arrays.
{
  const listA = new List('A', 'B', 'C', 'D', 'E');
  const listB = new List('A', 'B', 'C', 'D', 'E');
  const value = listA.difference(listB);
  
  expect(value.length).to.equal(0);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// intersection()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Return a non zero-length list if there are similarities between two arrays. 
{
  const listA = new List('A', 'B', 'C', 'D', 'E');
  const listB = new List('F', 'G', 'H', 'A', 'B');
  const value = listA.intersection(listB);
  
  expect(value.length).to.equal(2);
  expect(value[0]).to.equal('A');
  expect(value[1]).to.equal('B');
}
// Return a zero-length list if there are no similarities between two arrays. 
{
  const listA = new List('A', 'B', 'C', 'D', 'E');
  const listB = new List('F', 'G', 'H', 'I', 'J');
  const value = listA.intersection(listB);
  
  expect(value.length).to.equal(0);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// random()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const list = new List('A', 'B', 'C', 'D', 'E');
  const value = list.random();

  expect(value).not.to.equal(undefined);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// remove()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const list = new List('A', 'B', 'C', 'D', 'E');
  list.remove('A');
  
  expect(list.length).to.equal(4);
  
  expect(list[0]).to.equal('B');
  expect(list[1]).to.equal('C');
  expect(list[2]).to.equal('D');
  expect(list[3]).to.equal('E');
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// replace()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const list = new List('A', 'B', 'C', 'D', 'E');
  const replacee = 'C';
  const replacement = 'F';

  list.replace(replacee, replacement);
  
  expect(list.length).to.equal(5);
  
  expect(list[0]).to.equal('A');
  expect(list[1]).to.equal('B');
  expect(list[2]).to.equal('F');
  expect(list[3]).to.equal('D');
  expect(list[4]).to.equal('E');
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// class Range
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// isAscending()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
{
  const range = new NumericRange(1, 2, 3, 4, 5, 6, 7, 8, 9);
  expect(range.isAscending()).to.equal(true);
  expect(range.isDescending()).to.equal(false);
}
{
  const range = new NumericRange(9, 8, 7, 6, 5, 4, 3, 2, 1);
  expect(range.isAscending()).to.equal(false);
  expect(range.isDescending()).to.equal(true);
}
{
  const range = new NumericRange(9);
  expect(range.length).to.equal(1);
  expect(range[0]).to.equal(9);
  expect(range.isAscending()).to.equal(true);
  expect(range.isDescending()).to.equal(true);
}

console.log('Testing completed.');
