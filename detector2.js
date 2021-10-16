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


// WEEK 2
{
  const tests = [
   // POSITION 10
   [
     new Chart('Puente', 'Someday', 'All I Have To Give', 'La Lola', "Someday We'll Know", 'Higher', "If Ya Gettin' Down", "The Kids Aren't Alright", 'Heartbreaker', 'Waiting For Tonight', "What's My Age Again?", 'Jennifer Del Estero', "When You're Gone", 'All Star', 'Atrapados En La Red', 'Look At Me', 'Si Me Advertí', 'Let Forever Be', '...Baby One More Time', 'Angels'),

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

  runTests2(2, charts, tests);
}
