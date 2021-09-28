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
      
      function (entries) {  // I Need To Know
        expect(entries.length).to.equal(0);
      },
      
      function (entries) {  // That's The Way It Is
        expect(entries.length).to.equal(2);
                                                       // [06, 06, 06, 09]  [02, 03, 07, 10]
        expect(entries).to.include('Angels');          // [06, 06, 07, 09]  [02, 03, 06, 10]

                                                       // [06, 06, 06, 09]  [14, 10, 08, 04]
        expect(entries).to.include('All Or Nothing');  // [06, 06, 08, 09]  [14, 10, 06, 04]
      },
    ],
    
    // POSITION 6
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', 'New', "That's The Way It Is", "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', 'New', "That's The Way It Is", 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('That\'s The Way It Is');
      },
      
      function (entries) {  // I Need To Know
        expect(entries.length).to.equal(0);
      },
      
      function (entries) {  // That's The Way It Is
        expect(entries.length).to.equal(4);
                                                       // [06, 06, 06, 09]  [09, 08, 05, 05]
        expect(entries).to.include('Maria Maria');     // [06, 06, 05, 09]  [09, 08, 06, 05]

                                                       // [06, 06, 06, 09]  [02, 03, 07, 10]
        expect(entries).to.include('Angels');          // [06, 06, 07, 09]  [02, 03, 06, 10]

                                                       // [06, 06, 06, 09]  [14, 10, 08, 04]
        expect(entries).to.include('All Or Nothing');  // [06, 06, 08, 09]  [14, 10, 06, 04]

                                                       // [06, 06, 06, 09]  [05, 05, 09, 14]
        expect(entries).to.include('New');             // [06, 06, 09, 09]  [05, 05, 06, 14]
      },
    ],

    // POSITION 7
    [
      new Chart('All Star', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Angels', 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', "That's The Way It Is", 'I Need To Know', 'New', 'Fly Away', 'Angels', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('Angels');
      },

      function (entries) {  // Angels
        expect(entries.length).to.equal(3);
                                                       // [07, 07, 07, 10]  [14, 10, 08, 04]
        expect(entries).to.include('All Or Nothing');  // [07, 07, 08, 10]  [14, 10, 07, 04]

                                                       // [07, 07, 07, 10]  [05, 05, 09, 14]
        expect(entries).to.include('New');             // [07, 07, 09, 10]  [05, 05, 07, 14]

                                                       // [07, 07, 07, 10]  [**, 12, 10, 07]
        expect(entries).to.include('Tengo Frío');      // [07, 07, 10, 10]  [**, 12, 07, 07]
      },
    ],

    // POSITION 8
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'All Or Nothing', 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'All Or Nothing', 'Maria Maria', "Someday We'll Know", 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('All Or Nothing');
      },

      function (entries) {  // I Need To Know
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // All Or Nothing
        expect(entries.length).to.equal(3);                   
                                                              // [08, 08, 08, 04]  [02, 03, 07, 10]
        expect(entries).to.include('Angels');                 // [08, 08, 07, 04]  [02, 03, 08, 10]

                                                              // [08, 08, 08, 04]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [08, 08, 06, 04]  [05, 05, 08, 09]

                                                              // [08, 08, 08, 04]  [09, 09, 05, 05]
        expect(entries).to.include('Maria Maria');            // [08, 08, 05, 04]  [09, 09, 08, 05]
      },
    ],

    // POSITION 9
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'New', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'Fly Away', 'Maria Maria', "Someday We'll Know", 'New', 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('New');
      },

      function (entries) {  // I Need To Know
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // New
        expect(entries.length).to.equal(2);
                                                              // [09, 09, 09, 14]  [**, 12, 10, 07]
        expect(entries).to.include('Tengo Frío');             // [09, 09, 10, 14]  [**, 12, 09, 07]

                                                              // [09, 09, 09, 14]  [**, 15, 11, 08]
        expect(entries).to.include('T.V. And Coffee');        // [09, 09, 11, 14]  [**, 15, 09, 08]
      },
    ],

    // POSITION 10
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'Tengo Frío', 'All Or Nothing', 'Si Me Advertí', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('Tengo Frío');
      },

      function (entries) {  // I Need To Know
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // Tengo Frío
        expect(entries.length).to.equal(3);
                                                       // [10, 10, 10, 07]  [06, 06, 09, 14]
        expect(entries).to.include('New');             // [10, 10, 09, 07]  [06, 06, 10, 14]

                                                       // [10, 10, 10, 07]  [15, 11, 08, 04]
        expect(entries).to.include('All Or Nothing');  // [10, 10, 08, 07]  [15, 11, 10, 04]

                                                       // [10, 10, 10, 07]  [02, 03, 07, 10]
        expect(entries).to.include('Angels');          // [10, 10, 07, 07]  [02, 03, 10, 10]
      },
    ],

    // POSITION 11
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'T.V. And Coffee', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'T.V. And Coffee', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('T.V. And Coffee');
      },

      function (entries) {  // I Need To Know
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // T.V. And Coffee
        expect(entries.length).to.equal(2);
                                                   // [11, 11, 11, 08]  [**, 13, 10, 07]
        expect(entries).to.include('Tengo Frío');  // [11, 11, 10, 08]  [**, 13, 11, 07]

                                                   // [11, 11, 11, 08]  [06, 06, 09, 14]
        expect(entries).to.include('New');         // [11, 11, 09, 08]  [06, 06, 11, 14]
      },
    ],

    // POSITION 12
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Super Trouper', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Super Trouper', 'Tengo Frío', 'Someday', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },

      function (entries) {  // I Need To Know
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },
    ],    
  ];

  runTests(9, charts, tests);  
}
  
// WEEK 10 - IMPOSSIBLE TO TEST WEEK 10 BECAUSE WEEK 11 IS UNAVAILABLE.

