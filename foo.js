/* Return
 * @param {Chart} charts -
 * @return {Map}
 * @example
 * const chart1 = new Chart('A', 'B', 'C', 'D', 'E');
 * const chart2 = new Chart('E', 'D', 'C', 'B', 'A');
 * createDatabase(chart1, chart2);
 * // Returns {'A' => { history: [1, 5])}, 'B' => { history: [2, 4])}, 'C' => { history: [3, 3])}, 'D' => { history: [4, 2])}, 'E' => { history: [5, 1])}}
 */
function createDatabase(...charts) {
  const database = new Map();

  for (const chart of charts) {
    chart.forEach((entry, index) => { 

      if (database.has(entry) === false) {
        database.set(entry, {history: []});
      }

      database.get(entry).history.push(index + 1);
    });
  }

  return database;
}


/* Return
 * @param {Chart} charts -
 * @return {Map}
 * @example
 * const chart1 = new Chart('A', 'B', 'C', 'D', 'E');
 * const chart2 = new Chart('E', 'D', 'C', 'B', 'A');
 * createDatabase(chart1, chart2);
 * // Returns {'A' => { history: [1, 5])}, 'B' => { history: [2, 4])}, 'C' => { history: [3, 3])}, 'D' => { history: [4, 2])}, 'E' => { history: [5, 1])}}
 */
function createTable(...charts) {  
  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const row = thead.insertRow();
  const cell = row.insertCell();
  cell.textContent = "Title";

  for (const chart of charts) {
    const cell = row.insertCell();
    cell.textContent = "Position";
  }

  const tbody = document.createElement('tbody');
  
  const titles = new Set();
  
  for (const chart of charts) {
    for (const entry of chart) {
      titles.add(entry);
    }
  }  

  for (const title of titles) {
    const row = tbody.insertRow();
    const cell = row.insertCell();
    cell.textContent = title;
    
    for (const chart of charts) {
      const cell = row.insertCell();
      cell.textContent = chart.includes(title) ? chart.positionOf(title) : "**";
    }
  }

  table.append(thead, tbody);
  document.body.append(table);
}


/* Return
 * @param {Chart} charts
 * @return {Map}
 * @example
 * const chart1 = new Chart('A', 'B', 'C', 'D', 'E');
 * const chart2 = new Chart('E', 'D', 'C', 'B', 'A');
 * createDatabase(chart1, chart2);
 * // Returns {'A' => { history: [1, 5])}, 'B' => { history: [2, 4])}, 'C' => { history: [3, 3])}, 'D' => { history: [4, 2])}, 'E' => { history: [5, 1])}}
 */
function runTests(week, charts, tests) {

  for (let index = 0; index < 20; index++) {
    const group = charts.map(chart => chart.slice());
    const [chart1, chart2, chartA, chartB] = group.slice(week - 3, week + 1);
    
    const entry = chartA.at(index + 1);
    chart1.move(entry, index);
    chart2.move(entry, index);

    const database = createDatabase(...group.slice(0, week - 1));
    const entries = Chart.detector3(chartA, chartB, database);
    
    createTable(chart1, chart2, chartA, chartB);
    debugger;

    tests[index].forEach((test, index) => {

      if (index === 0) {
        test(entries);
      }
      else {
        test(entries[index]);
      }
    });
  }
}

// WEEK 9
{
  const tests = [
    // POSITION 1
    [
      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },
      function (entry) {
        expect(value.length).to.equal(1);                   // I Need To Know
        expect(value).to.include('That\'s The Way It Is');  // [04, 04, 06, 06] [05, 05, 04, 09]
      },
    ],
    // POSITION 2
    [ 
      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },
      function (entry) {
        expect(value.length).to.equal(1);                   // I Need To Know
        expect(value).to.include('That\'s The Way It Is');  // [04, 04, 06, 06] [05, 05, 04, 09]
      },
    ],
  ];

  runTests(9, charts);  
}
  
// WEEK 10 - IMPOSSIBLE TO TEST WEEK 10 BECAUSE WEEK 11 IS UNAVAILABLE.

