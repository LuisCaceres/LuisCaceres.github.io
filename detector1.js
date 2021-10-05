// WEEK 8
{
  const tests = [
   // POSITION 17
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Unpretty"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("As Fast As You Can");
     },

     function (entries) { // As Fast As You Can
       expect(entries.length).to.equal(2);
                                                                    // [18, 17, 17, **]  [**, **, **, 13]
       expect(entries).to.include("I Don't Want To Miss A Thing");  // [18, 17, **, **]  [**, **, 17, 13]

                                             // [18, 17, 17, **]  [**, **, **, 16]
       expect(entries).to.include("Crazy");  // [18, 17, **, **]  [**, **, 17, 16]
     },
   ],
  ];

  runTests(8, charts, 1, tests);
}
  
// WEEK 10 - IMPOSSIBLE TO TEST WEEK 10 BECAUSE WEEK 11 IS UNAVAILABLE.

// function bar(entry, value, ...charts) {
    
//     const strings = charts.map((chart, index, array) => {

//         let string = [];

//         if (index === 0) {

//             for (const chart of charts) {
//                 const index = `${chart.indexOf(entry) + 1}`.padStart(2, 0); 
//                 string.push(index !== `00` ? `${index}` : `**`);
//             }
//         }

//         if (index === 1) {

//             for (const chart of charts) {
//                 const index = `${chart.indexOf(value) + 1}`.padStart(2, 0); 
//                 string.push(index !== `00` ? `${index}` : `**`);
//             }
//         }


//         return string;
//     })
//     .map((history, index, array) => {
        
//         if (index === 2) {
//             const index = `${charts[2].indexOf(value) + 1}`.padStart(2, 0);
//             const a = array[0].slice();
//             a[2] = index !== `00` ? `${index}` : `**`;
//             history = a;                   
//         }

//         if (index === 3) {
//             const index = `${charts[2].indexOf(entry) + 1}`.padStart(2, 0);
//             const a = array[1].slice();
//             a[2] = index !== `00` ? `${index}` : `**`;
//             history = a;
//         }

//         return history;
//     })
//     .map(string => {
//         return '[' + string.join(', ') + ']';
//     });


//     const string = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // ${strings[0]} &nbsp;&nbsp; ${strings[1]} <br>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; expect(entries).to.include("${value}");  // ${strings[2]} &nbsp;&nbsp; ${strings[3]} <br><br>`;

//     return string;
// }

// function parseColumn(column) {
//     const tbody = document.querySelector('[data-component=table]').tBodies[0];
//     const rows = [...tbody.rows].filter(row => row.cells[column].textContent !== '');

//     rows.sort((rowA, rowB) => {
//       const cellA = +rowA.cells[column].textContent;
//       const cellB = +rowB.cells[column].textContent;

//       return cellA > cellB ? 1 : -1;
//     });


//     return rows.map(row => row.cells[0].textContent);
// }


// function foo(position, charts, entries) {

// return `<br>
//     &nbsp;&nbsp; // POSITION ${position} <br>
//     &nbsp;&nbsp; [ <br>
//     &nbsp;&nbsp;&nbsp;&nbsp; new Chart("${charts[0].join("\", \"")}"), <br>
//     &nbsp;&nbsp;&nbsp;&nbsp; new Chart("${charts[1].join("\", \"")}"), <br><br>

//     &nbsp;&nbsp;&nbsp;&nbsp; function (entries) { <br>
//     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; expect(entries.length).to.equal(${entries.size}); <br>

//        ${(function(){
//          let string = '';

//          for (const [entry] of entries) {
//            string += `
//            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; expect(entries).to.include("${entry}"); <br>`;
//          }

//          return string;
//         })()}
//       &nbsp;&nbsp;&nbsp;&nbsp; }, <br><br>

//        ${(function(){
//          let string = '';

//          for (const [entry, values] of entries) {
//             string += `&nbsp;&nbsp;&nbsp;&nbsp; function (entries) {  // ${entry} <br>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; expect(entries.length).to.equal(${values.length}); <br>

//                  ${(function(){
//                      let string = '';

//                      for (const value of values) {
//                        string += `${bar(entry, value, ...charts)}`;
//                      }

//                      return string;
//                 })()}

//             &nbsp;&nbsp;&nbsp;&nbsp; }, <br><br>`;
         
//          }

//          return string;
//         })()}
//     &nbsp;&nbsp; ],
// `
// }

// const chart1 = parseColumn(7);
// const chart2 = parseColumn(8);
// const chartA = parseColumn(9);
// const chartB = parseColumn(10);

// const map = new Map;
// map.set('That\'s The Way It Is', ['Maria Maria', 'Angels', 'All Or Nothing']);

// const parser = new DOMParser();
// const tree = parser.parseFromString(foo(2, [chart1, chart2, chartA, chartB], map), 'text/html');
// document.body.append(...tree.body.childNodes);

