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
    chart.forEach(entry => {

      if (database.has(entry) === false) {
        database.set(entry, {history: []});
      }

      database.get(entry).history.push(chart.positionOf(entry));
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
  row.insertCell().textContent = "Title";

  for (const chart of charts) {
    row.insertCell().textContent = "Position";
  }

  const tbody = document.createElement('tbody'); 
  
  new Set(charts.flat()).forEach(entry => {
    const row = tbody.insertRow();
    row.insertCell().textContent = entry;

    for (const chart of charts) {
      row.insertCell().textContent = chart.includes(entry) ? chart.positionOf(entry) : "**";
    }  
  });

  table.append(thead, tbody);
  document.body.append(table);
  
  thead.addEventListener('click', event => {
    const index = event.target.cellIndex;
    
    if (index === -1) {
      return;
    }
   
    const cell = event.target;
    const table = cell.closest('table');
    const selector = `td:nth-of-type(${cell.cellIndex + 1}`;
    const cells = [...table.querySelectorAll(selector)];
    
    cells.sort((a, b) => {
      return +a.textContent < +b.textContent ? -1 : 1; 
    });

    cells.forEach(cell => {
        const row = cell.closest('tr');
        const tbody = row.closest('tbody');
        tbody.append(row);
    });
  });
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

    const database = createDatabase(...group.before(chartA));
    const entries = Chart.detector3(chartA, chartB, database);
    
    
    // TO DO: Use chart.corrector3 here
    
    createTable(...group.before(chartB), chartB);
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

  runTests(9, charts, tests);  
}
  
// WEEK 10 - IMPOSSIBLE TO TEST WEEK 10 BECAUSE WEEK 11 IS UNAVAILABLE.

