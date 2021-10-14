/* Return
 * @param {Chart} charts
 * @return {Map}
 * @example
 * const chart1 = new Chart('A', 'B', 'C', 'D', 'E');
 * const chart2 = new Chart('E', 'D', 'C', 'B', 'A');
 * createDatabase(chart1, chart2);
 * // Returns {'A' => { history: [1, 5])}, 'B' => { history: [2, 4])}, 'C' => { history: [3, 3])}, 'D' => { history: [4, 2])}, 'E' => { history: [5, 1])}}
 */
function runTests(week, charts, detector, tests) {
  charts = charts.slice();
  
  for (const test of tests) {
    charts.splice(week + 1, 1, ...test.splice(0, 1));

    const [chartA, chartB] = charts.slice(week, week + 1);
    const database = createDatabase(...charts.before(chartA));
    const entries = Chart[`detector${detector}`](chartA, chartB, database);
 
    displayTable(...charts.before(chartB), chartB);

    test.forEach((test, index) => {

      if (index === 0) {
        test(entries);
      }
      else {
//         const entry = entries.shift();
//         const values = Chart[`corrector${detector}`](entry, chartA, chartB, database);
//         Chart[`sorter${detector}`](entry, values, [chart1, chart2, chartA, chartB]);
//         test(values);
      }
    });
  }
}


// WEEK 2
{
  const tests = [
   // POSITION 1
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("I Need To Know");
     },

     function (entries) { // I Need To Know
       expect(entries.length).to.equal(2);
                                                       // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries[0]).to.equal("Let Forever Be");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                       // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries[1]).to.equal("Look At Me");      // [09, 09, 10, 11]  [06, 07, 09, 13]
 
     },
   ],
  ];

  runTests(2, charts, 2, tests);
}

