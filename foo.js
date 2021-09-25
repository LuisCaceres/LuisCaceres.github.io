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
      row.insertCell().textContent = chart.includes(entry) ? chart.positionOf(entry) : 21;
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
      return +a.textContent > +b.textContent ? 1 : -1; 
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

    tests[index].slice(5).forEach((test, index) => {

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
      ['Mi Chico Latino', 'All Star', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital', 'Tengo Frío', 'T.V. And Coffee', 'Díselo Con Flores', 'La Lola', 'Higher', "If Ya Gettin' Down", "The Kids Aren't Alright", 'Heartbreaker', 'Waiting For Tonight', "What's My Age Again?", 'Jennifer Del Estero', "When You're Gone", 'Atrapados En La Red', 'Look At Me', 'Let Forever Be', '...Baby One More Time', "I'm Sitting Down Here", 'Absolutely Everybody', 'Pretty Fly', 'Unpretty', "Keep On Movin'", 'Crazy', "I Don't Want To Miss A Thing"],
      ['Mi Chico Latino', 'All Star', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital', "I Don't Want To Miss A Thing", 'Crazy', "Keep On Movin'", 'Unpretty', 'Pretty Fly', 'Absolutely Everybody', "I'm Sitting Down Here", '...Baby One More Time', 'Let Forever Be', 'Look At Me', 'Atrapados En La Red', "When You're Gone", 'Jennifer Del Estero', "What's My Age Again?", 'Waiting For Tonight', 'Heartbreaker', "The Kids Aren't Alright", "If Ya Gettin' Down", 'Higher', 'La Lola', "Don't Say You Love Me", 'All I Have To Give', 'No Quiero Verte'],     [],
      ['Mi Chico Latino', 'Fly Away', 'All Star', 'I Need To Know', 'Maria Maria', "That's The Way It Is", 'Angels', 'All Or Nothing', 'New', 'Tengo Frío', 'T.V. And Coffee', 'Super Trouper', "I Don't Want To Miss A Thing", "Someday We'll Know", 'Someday', 'Crazy', 'Si Me Advertí', 'Díselo Con Flores', "Keep On Movin'", 'Unpretty', 'No Quiero Verte', 'All I Have To Give', "Don't Say You Love Me", 'La Lola', 'Higher', "If Ya Gettin' Down", "The Kids Aren't Alright", 'Heartbreaker', 'Waiting For Tonight', "What's My Age Again?", 'Jennifer Del Estero', "When You're Gone", 'Atrapados En La Red', 'Look At Me', 'Let Forever Be', '...Baby One More Time', "I'm Sitting Down Here", 'Absolutely Everybody', 'Pretty Fly', 'Dreams In Digital', 'Man! I Feel Like A Woman', 'As Fast As You Can', 'Puente'],
      ['Mi Chico Latino', 'Fly Away', 'All Star', 'All Or Nothing', 'Maria Maria', 'I Need To Know', 'Tengo Frío', 'T.V. And Coffee', "That's The Way It Is", 'Angels', 'Crazy', 'Super Trouper', "I Don't Want To Miss A Thing", 'New', 'Díselo Con Flores', "I'm Sitting Down Here", 'Unpretty', "Keep On Movin'", 'Absolutely Everybody', 'Pretty Fly', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Dreams In Digital', '...Baby One More Time', 'Let Forever Be', 'Look At Me', 'Atrapados En La Red', "When You're Gone", 'Jennifer Del Estero', "What's My Age Again?", 'Waiting For Tonight', 'Heartbreaker', "The Kids Aren't Alright", "If Ya Gettin' Down", 'Higher', 'La Lola', "Don't Say You Love Me", 'All I Have To Give', 'No Quiero Verte', 'Si Me Advertí', 'Someday', "Someday We'll Know"],
      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },
      function (entries) {
        expect(entries.length).to.equal(1);                   // I Need To Know
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06] [05, 05, 04, 09]
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

