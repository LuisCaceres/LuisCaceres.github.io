/* 
NOTE: The following tests ensure that no entry arrives at position 12, 11, 10, 09, 08, 07, 06, 05, 04, 03, 02 or 01.
There are exceptions, however, although they are limited. 
EXAMPLE: [**, 12, 10, 07]
*/

/* Return
 * @param {Chart} charts
 * @return {Map}
 * @example
 * const chart1 = new Chart('A', 'B', 'C', 'D', 'E');
 * const chart2 = new Chart('E', 'D', 'C', 'B', 'A');
 * createDatabase(chart1, chart2);
 * // Returns {'A' => { history: [1, 5])}, 'B' => { history: [2, 4])}, 'C' => { history: [3, 3])}, 'D' => { history: [4, 2])}, 'E' => { history: [5, 1])}}
 */
function runTests2(week, charts, tests) {
  charts = charts.slice();
  
  for (const test of tests) {
    charts.splice(week, 1, ...test.splice(0, 1));

    const [chartA, chartB] = charts.slice(week, week + 2);
    const database = createDatabase(...charts.slice(0, week));
    const entries = Chart.detector2(chartA, chartB, database);
 
    displayTable(...charts);

    test.forEach((test, index) => {

      if (index === 0) {
        test(entries);
      }
      else {
        const entry = entries.shift();
        const values = Chart.corrector2(entry, chartA, chartB, database);
//         Chart[`sorter${detector}`](entry, values, [chart1, chart2, chartA, chartB]);
        test(values);
      }
    });
  }
}

// WEEK 8
{
  const tests = [

   // POSITION 12
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Tengo Frío", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Tengo Frío", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Tengo Frío");
     },

     function (entries) { // Tengo Frío
       expect(entries.length).to.equal(1);
                                                                // [**, **, 12, 10]  [12, 12, 18, **]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [**, **, **, **]  [12, 12, 12, 10]
     },
   ],
  ];

  runTests(10, testCharts, 2, tests);
}

