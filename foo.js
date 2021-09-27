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
    const rows = [...tbody.rows].filter(row => row.cells[index].textContent !== '');

    rows.sort((rowA, rowB) => {
      const cellA = +rowA.cells[index].textContent;
      const cellB = +rowB.cells[index].textContent;

      return cellA > cellB ? 1 : -1;
    });

    tbody.prepend(...rows);
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
  charts = charts.slice();
  
  for (const test of tests) {
    charts.splice(week - 3, 2, ...test.splice(0, 2));

    const [chart1, chart2, chartA, chartB] = charts.slice(week - 3);    
    const database = createDatabase(...charts.before(chartA));
    const entries = Chart.detector3(chartA, chartB, database);
 
    displayTable(...charts.before(chartB), chartB);

    test.forEach((test, index) => {

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
      new Chart('Mi Chico Latino', 'All Star', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('Mi Chico Latino', 'All Star', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

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
      new Chart('All Star', 'Fly Away', 'I Need To Know', 'Mi Chico Latino', 'Angels', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Fly Away', 'Mi Chico Latino', 'I Need To Know', 'Angels', "That's The Way It Is", 'New', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('That\'s The Way It Is');
      },

      function (entries) {                          
        expect(entries.length).to.equal(3);
                                                       // [06, 06, 06, 09]  [09, 08, 05, 05]
        expect(entries).to.include('Maria Maria');     // [06, 06, 05, 09]  [09, 08, 06, 05]

                                                       // [06, 06, 06, 09]  [05, 05, 07, 10]
        expect(entries).to.include('Angels');          // [06, 06, 07, 09]  [05, 05, 06, 10]

                                                       // [06, 06, 06, 09]  [14, 10, 08, 04]
        expect(entries).to.include('All Or Nothing');  // [06, 06, 08, 09]  [14, 10, 06, 04]
      },
    ],
    
    // POSITION 3
    [
      new Chart('Angels', 'Mi Chico Latino', 'All Star', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('Mi Chico Latino', 'Angels', 'All Star', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },

      function (entries) {
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },
    ],
    
    // POSITION 4
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },

      function (entries) {
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },
    ],
    
    // POSITION 5
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', 'Maria Maria', "That's The Way It Is", 'New', "Someday We'll Know", 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', 'Maria Maria', "That's The Way It Is", 'New', 'Fly Away', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('That\'s The Way It Is');
      },

      function (entries) {
        expect(entries.length).to.equal(2);
                                                       // [06, 06, 06, 09]  [02, 03, 07, 10]
        expect(entries).to.include('Angels');          // [06, 06, 07, 09]  [02, 03, 06, 10]

                                                       // [06, 06, 06, 09]  [14, 10, 08, 04]
        expect(entries).to.include('All Or Nothing');  // [06, 06, 08, 09]  [14, 10, 06, 04]        
      },
    ],
  ];

  runTests(9, charts, tests);  
}
  
// WEEK 10 - IMPOSSIBLE TO TEST WEEK 10 BECAUSE WEEK 11 IS UNAVAILABLE.

