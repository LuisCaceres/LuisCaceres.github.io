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
