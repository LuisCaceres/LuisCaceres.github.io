/* 
NOTE: The following tests ensure that no entry arrives at position 12, 11, 10, 09, 08, 07, 06, 05, 04, 03, 02 or 01.
There are exceptions, however, although they are limited. 
EXAMPLE: [**, 12, 10, 07]
*/


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
