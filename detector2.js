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
       expect(entries.length).to.equal(3);

                                                       // [**, **, **, 10]  [**, **, 16, **]
       expect(entries[0]).to.equal("Look At Me");      // [**, **, 16, 10]  [**, **, **, **]

                                                       // [**, **, **, 10]  [**, **, 18, **]
       expect(entries[2]).to.equal("Let Forever Be");  // [**, **, 18, 10]  [**, **, **, **]

                                                       // [**, **, **, 10]  [**, **, 17, 15]
       expect(entries[1]).to.equal("Si Me Advertí");   // [**, **, 17, 10]  [**, **, **, 15]
     },
   ],
  ];

  runTests2(2, charts, tests);
}


// WEEK 3
{
  const tests = [
   // POSITION 10
   [
     new Chart('All Star', 'Angels', 'I Need To Know', 'Mi Chico Latino', "Someday We'll Know", 'New', 'Someday', "That's The Way It Is", 'Si Me Advertí', 'Puente', 'No Quiero Verte', 'Man! I Feel Like A Woman', "Don't Say You Love Me", 'All I Have To Give', 'Dreams In Digital', 'All Or Nothing', 'Higher', 'As Fast As You Can', "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("New");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);

                                                             // [**, **, **, 12]  [**, **, 19, 17]
       expect(entries[1]).to.equal("No Quiero Verte");       // [**, **, 19, 12]  [**, **, **, 17]

                                                             // [**, **, **, 12]  [**, 15, 18, **]
       expect(entries[0]).to.equal("Atrapados En La Red");   // [**, **, 18, 12]  [**, 15, **, **]

                                                             // [**, **, **, 12]  [**, 19, 20, **]
       expect(entries[2]).to.equal("...Baby One More Time");  // [**, **, 20, 12]  [**, 19, **, **]
     },
   ],
  ];

  runTests2(3, charts, tests);
}

// WEEK 7
{
  const tests = [
   // POSITION 8
   [
     new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Maria Maria");
       expect(entries).to.include("Fly Away");
     },

     function (entries) { // Maria Maria
       expect(entries.length).to.equal(3);

                                                           // [**, **, **, 08]  [**, **, 16, 14]
       expect(entries[0]).to.equal("All Or Nothing");      // [**, **, 16, 08]  [**, **, **, 14]

                                                           // [**, **, **, 08]  [11, 15, 19, **]
       expect(entries[1]).to.equal("If Ya Gettin' Down");  // [**, **, 19, 08]  [11, 15, **, **]

                                                           // [**, **, **, 08]  [17, 19, 20, **]
       expect(entries[2]).to.equal("When You're Gone");    // [**, **, 20, 08]  [17, 19, **, **]
     },

     function (entries) { // Fly Away
       expect(entries.length).to.equal(3);

                                                           // [**, **, **, 11]  [**, **, 16, 14]
       expect(entries[0]).to.equal("All Or Nothing");      // [**, **, 16, 11]  [**, **, **, 14]

                                                           // [**, **, **, 11]  [11, 15, 19, **]
       expect(entries[1]).to.equal("If Ya Gettin' Down");  // [**, **, 19, 11]  [11, 15, **, **]

                                                           // [**, **, **, 11]  [17, 19, 20, **]
       expect(entries[2]).to.equal("When You're Gone");    // [**, **, 20, 11]  [17, 19, **, **]
     },
   ],
  ];

  runTests2(7, charts, tests);
}
