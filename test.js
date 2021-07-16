
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
  const chart = [
    {artist: 'Artist 20', title: 'Title 20' },
    {artist: 'Artist 19', title: 'Title 19' },
    {artist: 'Artist 18', title: 'Title 18' },
    {artist: 'Artist 17', title: 'Title 17' },
    {artist: 'Artist 16', title: 'Title 16' },
    {artist: 'Artist 15', title: 'Title 15' },
    {artist: 'Artist 14', title: 'Title 14' },
    {artist: 'Artist 13', title: 'Title 13' },
    {artist: 'Artist 12', title: 'Title 12' },
    {artist: 'Artist 11', title: 'Title 11' },
    {artist: 'Artist 10', title: 'Title 10' },
    {artist: 'Artist 09', title: 'Title 09' },
    {artist: 'Artist 08', title: 'Title 08' },
    {artist: 'Artist 07', title: 'Title 07' },
    {artist: 'Artist 06', title: 'Title 06' },
    {artist: 'Artist 05', title: 'Title 05' },
    {artist: 'Artist 04', title: 'Title 04' },
    {artist: 'Artist 03', title: 'Title 03' },
    {artist: 'Artist 02', title: 'Title 02' },
    {artist: 'Artist 01', title: 'Title 01', endSeconds: 180 },
  ];
  
  const sting = {title: 'sting'};
  const advertisement = {title: 'advertisement'};
     
  const playlist = generatePlaylist(chart, sting, advertisement);
  
  expect(playlist.length).to.equal(64);
  
  expect(playlist[0]).to.equal(sting);      
  expect(playlist[1]).to.equal(chart[0]);   // position 20
  expect(playlist[2]).to.equal(sting);
  expect(playlist[3]).to.equal(chart[1]);   // position 19
  expect(playlist[4]).to.equal(advertisement);
  expect(playlist[5]).to.equal(advertisement);
  
  expect(playlist[6]).to.equal(sting);
  expect(playlist[7]).to.equal(chart[2]);   // position 18
  expect(playlist[8]).to.equal(advertisement);
  expect(playlist[9]).to.equal(advertisement);
  
  expect(playlist[10]).to.equal(sting);
  expect(playlist[11]).to.equal(chart[3]);   // position 17
  expect(playlist[12]).to.equal(sting);
  expect(playlist[13]).to.equal(chart[4]);   // position 16
  expect(playlist[14]).to.equal(advertisement);
  expect(playlist[15]).to.equal(advertisement);
  
  expect(playlist[16]).to.equal(sting);
  expect(playlist[17]).to.equal(chart[5]);  // position 15
  expect(playlist[18]).to.equal(sting);
  expect(playlist[19]).to.equal(chart[6]);  // position 14
  expect(playlist[20]).to.equal(advertisement);
  expect(playlist[21]).to.equal(advertisement);
  
  expect(playlist[22]).to.equal(sting);
  expect(playlist[23]).to.equal(chart[7]);  // position 13
  expect(playlist[24]).to.equal(sting);
  expect(playlist[25]).to.equal(chart[8]);  // position 12
  expect(playlist[26]).to.equal(advertisement);
  expect(playlist[27]).to.equal(advertisement);
  
  expect(playlist[28]).to.equal(sting);
  expect(playlist[29]).to.equal(chart[9]);  // position 11
  expect(playlist[30]).to.equal(advertisement);
  expect(playlist[31]).to.equal(advertisement);
  
  expect(playlist[32]).to.equal(sting);
  expect(playlist[33]).to.equal(chart[10]); // position 10
  expect(playlist[34]).to.equal(sting);
  expect(playlist[35]).to.equal(chart[11]); // position 09
  expect(playlist[36]).to.equal(advertisement);
  expect(playlist[37]).to.equal(advertisement);
  
  expect(playlist[38]).to.equal(sting);
  expect(playlist[39]).to.equal(chart[12]); // position 08
  expect(playlist[40]).to.equal(advertisement);
  expect(playlist[41]).to.equal(advertisement);
  
  expect(playlist[42]).to.equal(sting);
  expect(playlist[43]).to.equal(chart[13]); // position 07
  expect(playlist[44]).to.equal(sting);
  expect(playlist[45]).to.equal(chart[14]); // position 06
  expect(playlist[46]).to.equal(advertisement);
  expect(playlist[47]).to.equal(advertisement);
  
  expect(playlist[48]).to.equal(sting);
  expect(playlist[49]).to.equal(chart[15]); // position 05
  expect(playlist[50]).to.equal(sting);
  expect(playlist[51]).to.equal(chart[16]); // position 04
  expect(playlist[52]).to.equal(advertisement);
  expect(playlist[53]).to.equal(advertisement);
  
  expect(playlist[54]).to.equal(sting);
  expect(playlist[55]).to.equal(chart[17]); // position 03
  expect(playlist[56]).to.equal(sting);
  expect(playlist[57]).to.equal(chart[18]); // position 02
  expect(playlist[58]).to.equal(advertisement);
  expect(playlist[59]).to.equal(advertisement);
  
  expect(playlist[60]).to.equal(sting);
  expect(playlist[61]).to.equal(chart[19]); // position 01
  expect(playlist[62]).to.equal(chart[19]);
  expect(playlist[63]).to.equal(sting);
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
  expect(list.includes('IN 10')).to.equal(true);   // ** - 10
  expect(list.includes('IN 19')).to.equal(false);  // ** - 19
  expect(list.includes('OUT 18')).to.equal(false); // 15 - 18 - **
  expect(list.includes('OUT 16')).to.equal(true);  // 12 - 16 - **
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
  expect(list.includes('IN 12')).to.equal(true); 
  expect(list.includes('IN 15')).to.equal(false); 
  expect(list.includes('IN 19')).to.equal(false);
  expect(list.includes('IN 20')).to.equal(false); 
  expect(list.includes('OUT 16')).to.equal(true); // 10 - 17 - **
  expect(list.includes('OUT 17')).to.equal(true); // 11 - 16 - **
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
{
  const { currentList, nextList } = generateList([18], [7]);

  const database = [
    {history: [20, 19, 18], match: 'OUT 18'},
  ];
  
  const list = format(currentList, nextList, database);
  
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 18')).to.equal(false);
  expect(list.includes('IN 7')).to.equal(true);
}
// FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
{
  const { currentList, nextList } = generateList([20], [9]);

  const database = [
    {history: [28, 18, 16, 14, 13, 13], match: 'OUT 20'},
  ];
  
  const list = format(currentList, nextList, database);
  
  expect(list.length).to.equal(20);
  expect(list.includes('OUT 20')).to.equal(true); 
  expect(list.includes('IN 9')).to.equal(false); 
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
