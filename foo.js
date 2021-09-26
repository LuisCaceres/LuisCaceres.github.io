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
function displayTable(...charts) {

  // Remove table currently displayed.
  document.querySelector('[data-component=table]')?.remove();

  // Create a new table.
  const table = document.createElement('table');
  table.dataset.component = 'table'; 

  // Insert table headers.
  const thead = document.createElement('thead');
  const row = thead.insertRow();
  row.insertCell().textContent = "Title";

  for (const chart of charts) {
    row.insertCell().textContent = "Position";
  }

  // Insert table rows.
  const tbody = document.createElement('tbody'); 
  
  // For each unique entry in `charts`.
  new Set(charts.flat()).forEach(entry => {
    const row = tbody.insertRow();
    row.insertCell().textContent = entry;

    for (const chart of charts) {
      row.insertCell().textContent = chart.includes(entry) ? chart.positionOf(entry) : "";
    }  
  });

  table.append(thead, tbody);
  
  // Display table.
  document.body.append(table);
  
  thead.addEventListener('click', event => {
    const index = event.target.cellIndex;

    if (index === -1) {
      return;
    }

    const cell = event.target;
    const tbody = cell.closest('table').querySelector('tbody');
    const selector = `td:nth-of-type(${index + 1}`;
    const cells = [...tbody.querySelectorAll(selector)];

    cells.sort((a, b) => {
      if (a === '' || b === '') {
        return 1;
      }
      else if (+a.textContent < +b.textContent) {
        return -1;
      }
      else if (+a.textContent === +b.textContent) {
        return 0;
      }
      else {
        return 1;
      }
    });
    
    const rows = cells.map(cell => cell.closest('tr'));
    tbody.append(...rows);
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
  charts = charts.slice(0, week - 3).map(chart => chart.slice());

  for (let index = 0; index < 20; index++) {
    const [chart1, chart2, chartA, chartB] = tests[index].slice(0, 4).map(array => new Chart(...array));
    const database = createDatabase(...charts, chart1, chart2);
    const entries = Chart.detector3(chartA, chartB, database);
 
    displayTable(...charts, chart1, chart2, chartA, chartB);

    tests[index].slice(4).forEach((test, index) => {

      if (index === 0) {
        test(entries);
      }
      else {
        const values = Chart.corrector3(entries.shift(), chartA, chartB, database);
        test(values);
      }
    });
  }
}

// WEEK 9
{
  const tests = [
    
    // POSITION 1
    [ 
      ['Mi Chico Latino', 'All Star', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'],
      ['Mi Chico Latino', 'All Star', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'],
      ['Mi Chico Latino', 'Fly Away', 'All Star', 'I Need To Know', 'Maria Maria', "That's The Way It Is", 'Angels', 'All Or Nothing', 'New', 'Tengo Frío', 'T.V. And Coffee', 'Super Trouper', "I Don't Want To Miss A Thing", "Someday We'll Know", 'Someday', 'Crazy', 'Si Me Advertí', 'Díselo Con Flores', "Keep On Movin'", 'Unpretty'],
      ['Mi Chico Latino', 'Fly Away', 'All Star', 'All Or Nothing', 'Maria Maria', 'I Need To Know', 'Tengo Frío', 'T.V. And Coffee', "That's The Way It Is", 'Angels', 'Crazy', 'Super Trouper', "I Don't Want To Miss A Thing", 'New', 'Díselo Con Flores', "I'm Sitting Down Here", 'Unpretty', "Keep On Movin'", 'Absolutely Everybody', 'Pretty Fly'],
      
      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },
      
      function (entries) {                                    // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries.length).to.equal(1);                   // I Need To Know    That's The Way It Is
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },
    ],
    
    // POSITION 2
    [
      
      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },
      
      function (entries) {
        expect(entries.length).to.equal(1);                   // I Need To Know
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06] [05, 05, 04, 09]
      },
    ],
  ];

  runTests(9, charts, tests);  
}
  
// WEEK 10 - IMPOSSIBLE TO TEST WEEK 10 BECAUSE WEEK 11 IS UNAVAILABLE.

