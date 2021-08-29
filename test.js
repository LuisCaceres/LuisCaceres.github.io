console.log('Testing starting.');

const expect = chai.expect;

function generateList(outcoming, incoming) {
  const listA = new Chart();
  const listB = new Chart();
  const itemsA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
  const itemsB = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];

  for (let i = 1; i <= 20; i++) {
      listA.push(outcoming.includes(i) ? `TUBED ${i}` : itemsA.shift());
      listB.push(incoming.includes(i) ? `DEBUT ${i}` : itemsB.shift());
  }

  return [listA, listB];
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// associate()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const charted = new Map()
  .set('Entry 1', 'Song A')
  .set('Entry 2', 'Song B');

  const uncharted = new List('Song C');

  const list = ['Entry 1', 'Entry 3'];

  const { chart } = associate(list, charted, uncharted);

  expect(chart.length).to.equal(2);
  expect(chart[0]).to.equal('Song C');
  expect(chart[1]).to.equal('Song A');
  expect(charted.size).to.equal(3);
  expect(uncharted.length).to.equal(0);
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
//   const chart = new List(
//     '20',
//     '19',
//     '18',
//     'xtra', // VIDEO EXTRA
//     '17',
//     '16',
//     '15',
//     '14',
//     '13',
//     '12',
//     '11',
//     '10',
//     '09',
//     '08',
//     'xtra', // VIDEO EXTRA
//     '07',
//     '06',
//     '05',
//     '04',
//     '03',
//     '02',
//     '01',
//   );
     
//   const playlist = generatePlaylist(chart, 'INTRO', 'STING', 'ADVERTISEMENT', 'STING NEW VIDEO');
//   validate(playlist);
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


// {
//   const [chartA, chartB] = generateList([1], [20]);

//   const database = new Map()
//   .set('TUBED 1', {history: [19, 17, 15, 11, 8, 6, 2, 2, 1]});
  
//   chartA.foo(chartB, database);
  
//   expect(chartB.length).to.equal(20);
  
//   expect(chartB.at(20)).to.equal('TUBED 1');
// }  


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// format()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// {
//   const [chart, nextChart] = generateList([18, 16], [19, 10]);
  
//   const database = new Map()
//   .set('TUBED 18', {history: [5, 5, 9, 13, 15]})
//   .set('TUBED 16', {history: [1, 1, 1, 2, 3, 3, 5, 6, 6, 8, 12]});
 
//   chart.format(nextChart, database);
  
//   expect(chart.length).to.equal(20);
  
//   expect(chart.at(18)).to.equal('DEBUT 10');
//   expect(chart.at(16)).to.equal('TUBED 16');
  
//   expect(chart).not.to.include('TUBED 18'); 
//   expect(chart).not.to.include('DEBUT 19');
// }
// {
//   const [chart, nextChart] = generateList([20, 18, 17, 16], [20, 19, 15, 12]);
  
//   const database = new Map()
//   .set('TUBED 20', {history: [19]})
//   .set('TUBED 18', {history: [15]})
//   .set('TUBED 17', {history: [10]})
//   .set('TUBED 16', {history: [11]});
  
//   chart.format(nextChart, database);
  
//   expect(chart.length).to.equal(20);
 
//   expect([chart.at(20), chart.at(18)]).to.include('DEBUT 12');
  
//   expect(chart.at(17)).to.equal('TUBED 17');
//   expect(chart.at(16)).to.equal('TUBED 16');
  
//   expect(chart).not.to.include('DEBUT 20');
//   expect(chart).not.to.include('DEBUT 19');
//   expect(chart).not.to.include('DEBUT 15');
// }
// {
//   const [chart, nextChart] = generateList([18, 16], [20, 19]);
  
//   const database = new Map()
//   .set('TUBED 18', {history: [12, 14]})
//   .set('TUBED 16', {history: [09, 12]});
 
//   chart.format(nextChart, database);
  
//   expect(chart.length).to.equal(20);
  
//   expect(chart.at(18)).to.equal('TUBED 18');
//   expect(chart.at(16)).to.equal('TUBED 16');
  
//   expect(chart).not.to.include('DEBUT 20');
//   expect(chart).not.to.include('DEBUT 19');
// }
// {
//   const [chart, nextChart] = generateList([16], [17]);
  
//   const database = new Map()
//   .set('TUBED 16', {history: [04, 06, 10]});
  
//   chart.format(nextChart, database);
  
//   expect(chart.length).to.equal(20);
  
//   expect(chart.at(16)).to.equal('TUBED 16');
  
//   expect(chart).not.to.include('DEBUT 17');
// }
// {
//   const [chart, nextChart] = generateList([18], [16]);

//   const database = new Map()
//   .set('TUBED 18', {history: [08, 08, 11, 14]});
  
//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);
  
//   expect(chart.at(18)).to.equal('TUBED 18');
  
//   expect(chart).not.to.include('DEBUT 16');
// }
// {
//   const [chart, nextChart] = generateList([20, 19, 17], [16, 11, 8]);

//   const database = new Map()
//   .set('TUBED 20', {history: [13, 13, 14, 17, 19]})
//   .set('TUBED 19', {history: [07, 07, 09, 11, 15]})
//   .set('TUBED 17', {history: [06, 05, 07, 08, 12]});
  
//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);
 
//   expect([chart.at(20), chart.at(19)]).to.include('DEBUT 11');
//   expect([chart.at(20), chart.at(19)]).to.include('DEBUT 8');
//   expect(chart.at(17)).to.equal('TUBED 17');
  
//   expect(chart).not.to.include('TUBED 20');
//   expect(chart).not.to.include('TUBED 19');
//   expect(chart).not.to.include('DEBUT 16');
// }
// {
//   const [chart, nextChart] = generateList([20], [1]);

//   const database = new Map()
//   .set('TUBED 20', {history: []});

//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);
  
//   expect(chart.at(20)).to.equal('DEBUT 1');
  
//   expect(chart).not.to.include('TUBED 20');
// }
// // I WOULD LIKE THIS TO APPLY BUT IT'S NOT POSSIBLE BECAUSE 20, 19, 18, 18 * IS INTERPRETED AS AN ITEM STILL ASCENDING.
// // HOW TO DIFFERENTIATE THE ABOVE FROM 20, 18, 16, 14, 13, 13, 20, *?
// // {
// //   const { currentList, nextList } = generateList([18], [7]);

// //   const database = [
// //     {history: [20, 19, 18], match: 'OUT 18'},
// //   ];
  
// //   const list = format(currentList, nextList, database);
  
// //   expect(list.length).to.equal(20);
// //   expect(list.includes('OUT 18')).to.equal(false);
// //   expect(list.includes('IN 7')).to.equal(true);
// // }
// {
//   const [chart, nextChart] = generateList([20], [9]);

//   const database = new Map()
//   .set('TUBED 20', {history: []});

//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(20)).to.equal('DEBUT 9');
  
//   expect(chart).not.to.include('TUBED 20');  
// }
// {
//   const [chart, nextChart] = generateList([14, 13], [16, 12]);

//   const database = new Map()
//   .set('TUBED 14', {history: [6, 10, 14]})
//   .set('TUBED 13', {history: [7, 12, 13]});

//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(14)).to.equal('DEBUT 12');
//   expect(chart.at(13)).to.equal('TUBED 13');
  
//   expect(chart).not.to.include('TUBED 14');
//   expect(chart).not.to.include('DEBUT 16');  
// }
// {
//   const [chart, nextChart] = generateList([13], [11]);
  
//   const database = new Map()
//   .set('TUBED 13', {history: [6, 10, 13]});

//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(13)).to.equal('DEBUT 11');
  
//   expect(chart).not.to.include('TUBED 13');
// }
// // FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
// {
//   const [chart, nextChart] = generateList([11], [5]);

//   const database = new Map()
//   .set('TUBED 11', {history: [6, 2, 2, 1]});

//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(11)).to.equal('TUBED 11');
  
//   expect(chart).not.to.include('DEBUT 5');
// }
// // FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
// {
//   const [chart, nextChart] = generateList([15], [10]);

//   const database = new Map()
//   .set('TUBED 15', {history: [19, 17, 13, 11, 11]});

//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(15)).to.equal('TUBED 15');
  
//   expect(chart).not.to.include('DEBUT 10');
// }
// // FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
// {
//   const [chart, nextChart] = generateList([20], [9]);

//   const database = new Map()
//   .set('TUBED 20', {history: [20, 18, 16, 14, 13, 13]});

//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(20)).to.equal('TUBED 20');
  
//   expect(chart).not.to.include('DEBUT 9');
// }
// // FORMATTING NOT ALLOWED IN SPITE OF THE EXISTENCE OF AN ILLEGAL ITEM
// {
//   const [chart, nextChart] = generateList([13], [12]);

//   const database = new Map()
//   .set('TUBED 13', {history: [7, 12, 13]});

//   chart.format(nextChart, database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(13)).to.equal('TUBED 13');
  
//   expect(chart).not.to.include('DEBUT 12');
// }


// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // format2()
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// {
//   const [previousChart, chart] = generateList([20, 18, 17, 16], [20, 19, 16, 13]);

//   const database = new Map()
//   .set('TUBED 20', {title: 'TUBED 20', history: [17, 15, 20, 20]})
//   .set('TUBED 18', {title: 'TUBED 18', history: [20, 18, 14, 12, 12, 18]})
//   .set('TUBED 17', {title: 'TUBED 17', history: [20, 20, 18, 17, 17]})
//   .set('TUBED 16', {title: 'TUBED 16', history: [1, 1, 1, 4, 5, 10, 13, 16]});

//   chart.format(previousChart,database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(20)).to.equal('DEBUT 20');
//   expect(chart.at(19)).to.equal('DEBUT 19');
//   expect(chart.at(13)).to.equal('TUBED 17');
  
//   expect(chart).not.to.include('TUBED 20');
//   expect(chart).not.to.include('TUBED 18');
//   expect(chart).not.to.include('TUBED 16');
//   expect(chart).not.to.include('DEBUT 13');
// }
// {
//   const [previousChart, chart] = generateList([20, 19, 18], [20, 19, 18]);

//   const database = new Map()
//   .set('TUBED 20', {title: 'TUBED 19', history: [20]})
//   .set('TUBED 19', {title: 'TUBED 19', history: [20, 19]})
//   .set('TUBED 18', {title: 'TUBED 18', history: [20, 19, 18]});

//   chart.format(previousChart, database);

//   expect(chart.length).to.equal(20);

//   expect(chart.at(20)).to.equal('TUBED 20');
//   expect(chart.at(19)).to.equal('TUBED 19');
//   expect(chart.at(18)).to.equal('TUBED 18');
  
//   expect(chart).not.to.include('DEBUT 20');
//   expect(chart).not.to.include('DEBUT 19');
//   expect(chart).not.to.include('DEBUT 18');
// }
// {  
//   const [previousChart, chart] = generateList([17, 16, 15], [20, 19, 18]);

//   const database = new Map()
//   .set('TUBED 17', {history: [20, 19, 18, 17]})
//   .set('TUBED 16', {history: [19, 18, 17, 16]})
//   .set('TUBED 15', {history: [18, 17, 16, 15]});

//   chart.format(previousChart, database);

//   expect(chart.length).to.equal(20);
  
//   expect(chart.at(20)).to.equal('DEBUT 20');
//   expect(chart.at(19)).to.equal('DEBUT 19');
//   expect(chart.at(18)).to.equal('DEBUT 18');

//   expect(chart).not.to.include('TUBED 17');
//   expect(chart).not.to.include('TUBED 16');
//   expect(chart).not.to.include('TUBED 15');
// }
// {
//   const charts = [
//     /* 20 */ ['TUBED A', 'TUBED A', 'DEBUT W'], /* 20 */
//     /* 19 */ ['TUBED B', 'DEBUT U', 'DEBUT X'], /* 19 */
//     /* 18 */ ['C',       'TUBED I', 'DEBUT U'], /* 18 */
//     /* 17 */ ['TUBED D', 'TUBED D', 'L'],       /* 17 */
//     /* 16 */ ['E',       'TUBED H', 'DEBUT Y'], /* 16 */
//     /* 15 */ ['TUBED F', 'DEBUT V', 'K'],       /* 15 */
//     /* 14 */ ['G',       'E',       'N'],       /* 14 */
//     /* 13 */ ['TUBED H', 'K',       'DEBUT Z'], /* 13 */
//     /* 12 */ ['TUBED I', 'C',       'E'],       /* 12 */
//     /* 11 */ ['J',       'L',       'DEBUT V'], /* 11 */
//     /* 10 */ ['K',       'G',       'C'],       /* 10 */
//     /* 09 */ ['L',       'N',       'O'],       /* 09 */
//     /* 08 */ ['M',       'M',       'G'],       /* 08 */
//     /* 07 */ ['N',       'J',       'S'],       /* 07 */
//     /* 06 */ ['O',       'O',       'P'],       /* 06 */
//     /* 05 */ ['P',       'P',       'Q'],       /* 05 */
//     /* 04 */ ['Q',       'Q',       'M'],       /* 04 */
//     /* 03 */ ['R',       'S',       'T'],       /* 03 */
//     /* 02 */ ['S',       'R',       'J'],       /* 02 */
//     /* 01 */ ['T',       'T',       'R'],       /* 01 */
//   ];
  
//   const chart = new Chart(...charts.map(item => item[2]).reverse());
//   const previousChart = new Chart(...charts.map(item => item[1]).reverse());
// //   const nextChart = new List(...charts.map(item => item[2]).reverse());
    
//   const database = new Map()
//   .set('TUBED B', {title: "TUBED B", history: [19, 16, 13, 19]})
//   .set('TUBED F', {title: "TUBED F", history: [19, 17, 13, 11, 11, 15]})
//   .set('TUBED A', {title: "TUBED A", history: [17, 15, 20, 20]})
//   .set('TUBED I', {title: "TUBED I", history: [20, 18, 14, 12, 12, 18]})
//   .set('TUBED D', {title: "TUBED D", history: [20, 20, 18, 17, 17]})
//   .set('TUBED H', {title: "TUBED H", history: [1, 1, 1, 4, 5, 10, 13, 16]});
  
//   const TUBED_D = database.get('TUBED D');
    
//   chart.format2(previousChart, database);
  
//   expect(chart.length).to.equal(20);
  
//   expect(database.has('DEBUT Y') || database.has('DEBUT Z')).to.equal(true);

//   expect(database.has('TUBED D')).to.equal(false);
  
//   expect(database.get('DEBUT Y') || database.get('DEBUT Z')).to.equal(TUBED_D);
  
//   expect(['DEBUT Y', 'DEBUT Z']).to.include(TUBED_D.match);
  
  
  
 
//   chart = format(currentChart, nextChart, database);
  
//   expect(chart.length).to.equal(20);
//   expect(chart[19]).to.equal('DEBUT W');
//   expect(chart[18]).to.equal('DEBUT X');
//   expect(chart[17]).to.equal('DEBUT U');
//   expect(chart[16]).to.equal('L');
//   expect(chart[15]).to.equal('DEBUT Y');
//   expect(chart[14]).to.equal('K');
//   expect(chart[13]).to.equal('N');
//   expect(chart[12]).to.equal('DEBUT Z');
//   expect(chart[11]).to.equal('E');
//   expect(chart[10]).to.equal('DEBUT V');
//   expect(chart[09]).to.equal('C');
//   expect(chart[08]).to.equal('O');
//   expect(chart[07]).to.equal('G');
//   expect(chart[06]).to.equal('S');
//   expect(chart[05]).to.equal('P');
//   expect(chart[04]).to.equal('Q');
//   expect(chart[03]).to.equal('M');
//   expect(chart[02]).to.equal('T');
//   expect(chart[01]).to.equal('J');
//   expect(chart[00]).to.equal('R');
//   }

{
  const chartA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
  const chartB = ['D', 'F', 'C', 'A', 'H', 'B', 'E', 'G', 'L', 'M', 'I', 'O', 'Q', 'K', 'S', 'J', 'N', 'T', 'U', 'V'];

  const database = new Map();
  .set('A', {history: [01, 01]})
  .set('B', {history: [02, 02]})
  .set('C', {history: [05, 03]})
  .set('D', {history: [14, 09]})
  .set('E', {history: [03, 04]})
  .set('F', {history: [18, 10]})
  .set('G', {history: [06, 05]})
  .set('H', {history: [20, 11]})
  .set('I', {history: [07, 07]})
  .set('J', {history: [04, 06]})
  .set('K', {history: [08, 08]})
  .set('L', {history: [18]})
  .set('M', {history: [17, 15]})
  .set('N', {history: [13, 13]})
  .set('P', {history: [09, 12]})
  .set('Q', {history: [19]})
  .set('R', {history: [12, 14]});

  const entries = detector3(chartA, chartB, database);

  expect(entries.length).to.equal(1);
  expect(entries).to.include('B');
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
// after()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const list = new List('A', 'B', 'C', 'D', 'E');

  expect(list.after('F').length).to.equal(0);

  expect(list.after('A').length).to.equal(4);
  expect(list.after('B').length).to.equal(3);
  expect(list.after('C').length).to.equal(2);
  expect(list.after('D').length).to.equal(1);
  expect(list.after('E').length).to.equal(0);

  expect(list.after('A')).to.include('B');
  expect(list.after('A')).to.include('C');
  expect(list.after('A')).to.include('D');
  expect(list.after('A')).to.include('E');

  expect(list.after('B')).to.include('C');
  expect(list.after('B')).to.include('D');
  expect(list.after('B')).to.include('E');

  expect(list.after('C')).to.include('D');
  expect(list.after('C')).to.include('E');

  expect(list.after('D')).to.include('E');

  expect(list.after('A', 0).length).to.equal(0);

  expect(list.after('A', 1).length).to.equal(1);
  expect(list.after('A', 2).length).to.equal(2);
  expect(list.after('A', 3).length).to.equal(3);
  expect(list.after('A', 4).length).to.equal(4);
  expect(list.after('A', 5).length).to.equal(4);
  expect(list.after('A', 6).length).to.equal(4);
  expect(list.after('A', 7).length).to.equal(4);
  expect(list.after('A', 8).length).to.equal(4);
  expect(list.after('A', 9).length).to.equal(4);

  expect(list.after('A', 1)).to.include('B');

  expect(list.after('A', 2)).to.include('B');
  expect(list.after('A', 2)).to.include('C');
  
  expect(list.after('A', 3)).to.include('B');
  expect(list.after('A', 3)).to.include('C');
  expect(list.after('A', 3)).to.include('D');
  
  expect(list.after('A', 4)).to.include('B');
  expect(list.after('A', 4)).to.include('C');
  expect(list.after('A', 4)).to.include('D');
  expect(list.after('A', 4)).to.include('E');

  expect(list.after('A', 5)).to.include('B');
  expect(list.after('A', 5)).to.include('C');
  expect(list.after('A', 5)).to.include('D');
  expect(list.after('A', 5)).to.include('E');
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// before()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const list = new List('A', 'B', 'C', 'D', 'E');

  expect(list.before('F').length).to.equal(0);

  expect(list.before('A').length).to.equal(0);
  expect(list.before('B').length).to.equal(1);
  expect(list.before('C').length).to.equal(2);
  expect(list.before('D').length).to.equal(3);
  expect(list.before('E').length).to.equal(4);

  expect(list.before('B')).to.include('A');

  expect(list.before('C')).to.include('A');
  expect(list.before('C')).to.include('B');

  expect(list.before('D')).to.include('A');
  expect(list.before('D')).to.include('B');
  expect(list.before('D')).to.include('C');

  expect(list.before('E')).to.include('A');
  expect(list.before('E')).to.include('B');
  expect(list.before('E')).to.include('C');
  expect(list.before('E')).to.include('D');

  expect(list.before('E', 0).length).to.equal(0);

  expect(list.before('E', 1).length).to.equal(1);
  expect(list.before('E', 2).length).to.equal(2);
  expect(list.before('E', 3).length).to.equal(3);
  expect(list.before('E', 4).length).to.equal(4);
  expect(list.before('E', 5).length).to.equal(4);
  expect(list.before('E', 6).length).to.equal(4);
  expect(list.before('E', 7).length).to.equal(4);
  expect(list.before('E', 8).length).to.equal(4);
  expect(list.before('E', 9).length).to.equal(4);

  expect(list.before('E', 1)).to.include('D');

  expect(list.before('E', 2)).to.include('C');
  expect(list.before('E', 2)).to.include('D');

  expect(list.before('E', 3)).to.include('B');
  expect(list.before('E', 3)).to.include('C');
  expect(list.before('E', 3)).to.include('D');

  expect(list.before('E', 4)).to.include('A');
  expect(list.before('E', 4)).to.include('B');
  expect(list.before('E', 4)).to.include('C');
  expect(list.before('E', 4)).to.include('D');

  expect(list.before('E', 5)).to.include('A');
  expect(list.before('E', 5)).to.include('B');
  expect(list.before('E', 5)).to.include('C');
  expect(list.before('E', 5)).to.include('D');
}

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
// insert()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const list = new List('A', 'B', 'C', 'D', 'E');
  list.insert([0, 1, 2, 3, 4], 'Z');
  
  expect(list.length).to.equal(10);
  
  expect(list[0]).to.equal('Z');
  expect(list[1]).to.equal('A');
  expect(list[2]).to.equal('Z');
  expect(list[3]).to.equal('B');
  expect(list[4]).to.equal('Z');
  expect(list[5]).to.equal('C');
  expect(list[6]).to.equal('Z');
  expect(list[7]).to.equal('D');
  expect(list[8]).to.equal('Z');
  expect(list[9]).to.equal('E');
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
{
  const list = new List('A', 'A', 'A', 'A', 'A');
  list.remove('A');
  
  expect(list.length).to.equal(0);
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
// share()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
{
  const map = new Map();

  map.set(1, new List('A'));
  map.set(2, new List('A'));

  map.share();

  expect(map.get(1)).to.equal('A');
  expect(map.get(2)).to.equal(null);
}
{
  const map = new Map();

  map.set(1, new List('A', 'B'));
  map.set(2, new List('A'));

  map.share();

  expect(map.get(1)).to.equal('B');
  expect(map.get(2)).to.equal('A');
}
{
  const map = new Map();

  map.set(1, new List('A'));
  map.set(2, new List('A', 'B'));

  map.share();

  expect(map.get(1)).to.equal('A');
  expect(map.get(2)).to.equal('B');
}
{
  const map = new Map();

  map.set(1, new List('B', 'A'));
  map.set(2, new List('A'));

  map.share();

  expect(map.get(1)).to.equal('B');
  expect(map.get(2)).to.equal('A');
}
{
  const map = new Map();

  map.set(1, new List('A'));
  map.set(2, new List('B', 'A'));

  map.share();

  expect(map.get(1)).to.equal('A');
  expect(map.get(2)).to.equal('B');
}
{
  const map = new Map();

  map.set(1, new List('A', 'B'));
  map.set(2, new List('A', 'B'));
  map.set(3, new List('A', 'B'));

  map.share();

  expect(map.get(1)).to.equal('A');
  expect(map.get(2)).to.equal('B');
  expect(map.get(3)).to.equal(null);
}
{
  const map = new Map();

  map.set(1, new List('A', 'B', 'C'));
  map.set(2, new List('A', 'B', 'C'));
  map.set(3, new List('A', 'B', 'C'));

  map.share();

  expect(map.get(1)).to.equal('A');
  expect(map.get(2)).to.equal('B');
  expect(map.get(3)).to.equal('C');
}
{
  const map = new Map();

  map.set(1, new List('D', 'C', 'B', 'A'));
  map.set(2, new List('D', 'C', 'B'));
  map.set(3, new List('D', 'C'));
  map.set(4, new List('D'));

  map.share();

  expect(map.get(1)).to.equal('A');
  expect(map.get(2)).to.equal('B');
  expect(map.get(3)).to.equal('C');
  expect(map.get(4)).to.equal('D');
}
{
  const map = new Map();

  map.set(1, new List('D', 'C', 'B'));
  map.set(2, new List('D', 'C', 'B', 'A'));
  map.set(3, new List('D', 'C'));
  map.set(4, new List('D'));

  map.share();

  expect(map.get(1)).to.equal('B');
  expect(map.get(2)).to.equal('A');
  expect(map.get(3)).to.equal('C');
  expect(map.get(4)).to.equal('D');
}
  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// class NumberList
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// isAscending()
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
{
  const list = new NumberList(1, 2, 3, 4, 5, 6, 7, 8, 9);
  expect(list.isIncreasing()).to.equal(true);
  expect(list.isDecreasing()).to.equal(false);
  expect(list.isFlat()).to.equal(false);
}
{
  const list = new NumberList(9, 8, 7, 6, 5, 4, 3, 2, 1);
  expect(list.isIncreasing()).to.equal(false);
  expect(list.isDecreasing()).to.equal(true);
  expect(list.isFlat()).to.equal(false);
}
{
  const list = new NumberList(9);
  expect(list.length).to.equal(1);
  expect(list.isIncreasing()).to.equal(false);
  expect(list.isDecreasing()).to.equal(false);
  expect(list.isFlat()).to.equal(true);
}
{
  const list = new NumberList(1, 1, 1);
  expect(list.length).to.equal(3);
  expect(list.isIncreasing()).to.equal(false);
  expect(list.isDecreasing()).to.equal(false);
  expect(list.isFlat()).to.equal(true);
}

console.log('Testing completed.');
