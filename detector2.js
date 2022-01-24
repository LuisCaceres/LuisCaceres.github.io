/* The number of debuts on the charts is higher than expected. For that reason, the following piece of code
attempts to reduce the number of debuts. A corrupt entry is a debut on the chart.  
A substitute is found to replace the corrupt entry.


NOTE 1: A debut in position 20 isn't a corrupt entry. It's impossible to find a substitute.


:::::::::::::::: BEFORE :::::::::::::::::

CHART 2          CHART A          CHART B

20  T            20  S            
19  S            19  DEBUT 1
18  R            18  O
17  Q            17  J
16  P            16  K
15  O            15  Q
14  N            14  L
13  M            13  M
12  L            12  I
11  K            11  T
10  J            10  DEBUT 2
09  I            09  N
08  H            08  H
07  G            07  G
06  F            06  D
05  E            05  F
04  D            04  C
03  C            03  E
02  B            02  B
01  A            01  A


*/


// WEEK 3
{
  const tests = [

   // POSITION 12
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("New");
       expect(entries).to.include("Mi Chico Latino");
       expect(entries).to.include("That's The Way It Is");
     },

     function (entries) { // New
       expect(entries.length).to.equal(1);

      // NOTE: THERE IS NO OTHER ENTRY TO PUT IN POSITION 14. FOR THAT REASON THE ENTRY BELOW SHOULD NOT BE AN OPTION.
                                                        // [**, **, 12, 09]  [13, 13, 14, 17]
       expect(entries).to.include("When You're Gone");  // [**, **, **, **]  [13, 13, 12, 09]
     },

     function (entries) { // Mi Chico Latino
       expect(entries.length).to.equal(0);
     },

     function (entries) { // That's The Way It Is
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(3, testCharts, 2, tests);
}

// WEEK 4
{
  const tests = [

   // POSITION 19
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Don't Say You Love Me");
     },

     function (entries) { // Don't Say You Love Me
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(4, testCharts, 2, tests);
}

// WEEK 5
{
  const tests = [

   // POSITION 19
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Dreams In Digital");
     },

     function (entries) { // Dreams In Digital 
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(5, testCharts, 2, tests);
}

// WEEK 6
{
  const tests = [

   // POSITION 19
   [
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("All Or Nothing");
     },

     function (entries) { // All Or Nothing
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(6, testCharts, 2, tests);
}

// WEEK 7
{
  const tests = [

   // POSITION 8
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("Maria Maria");
       expect(entries).to.include("Fly Away");
       expect(entries).to.include("Super Trouper");       
     },

     function (entries) { // Maria Maria
       expect(entries.length).to.equal(3);
                                                             // [**, **, 08, 08]  [11, 11, 15, **]
       expect(entries).to.include("No Quiero Verte");        // [**, **, **, **]  [11, 11, 08, 08]
       
                                                             // [**, **, 08, 08]  [16, 13, 19, **]
       expect(entries).to.include("Don't Say You Love Me");  // [**, **, **, **]  [16, 13, 08, 08]

                                                             // [**, **, 08, 08]  [17, 15, 20, 20]
       expect(entries).to.include("Dreams In Digital");      // [**, **, **, **]  [17, 15, 08, 08]
     },

     function (entries) { // Fly Away
       expect(entries.length).to.equal(3);
                                                             // [**, **, 11, 07]  [11, 11, 15, **]
       expect(entries).to.include("No Quiero Verte");        // [**, **, **, **]  [11, 11, 11, 07]
       
                                                             // [**, **, 11, 07]  [16, 13, 19, **]
       expect(entries).to.include("Don't Say You Love Me");  // [**, **, **, **]  [16, 13, 11, 07]

                                                             // [**, **, 11, 07]  [17, 15, 20, 20]
       expect(entries).to.include("Dreams In Digital");      // [**, **, **, **]  [17, 15, 11, 07]
     },

     function (entries) { // Super Trouper
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(7, testCharts, 2, tests);
}

// WEEK 8
{
  const tests = [

   // POSITION 12
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("Tengo Frío");
       expect(entries).to.include("T.V. And Coffee");
       expect(entries).to.include("Díselo Con Flores");
     },

     function (entries) { // Tengo Frío
       expect(entries.length).to.equal(1);
                                                                // [**, **, 12, 10]  [12, 12, 18, **]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [**, **, **, **]  [12, 12, 12, 10]
     },

     function (entries) { // T.V. And Coffee
       expect(entries.length).to.equal(0);
     },

     function (entries) { // Díselo Con Flores
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(8, testCharts, 2, tests);
}

// WEEK 9
{
  const tests = [

   // POSITION 13
   [
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Unpretty"),
     new Chart("All Star", "Mi Chico Latino", "Angels", "I Need To Know", "That's The Way It Is", "New", "Fly Away", "Maria Maria", "Someday We'll Know", "All Or Nothing", "Si Me Advertí", "Tengo Frío", "Someday", "Super Trouper", "T.V. And Coffee", "Puente", "As Fast As You Can", "Man! I Feel Like A Woman", "Díselo Con Flores", "Unpretty"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("I Don't Want To Miss A Thing");
       expect(entries).to.include("Crazy");
       expect(entries).to.include("Keep On Movin'");
     },

     function (entries) { // I Don't Want To Miss A Thing
       expect(entries.length).to.equal(1);
                                                          // [**, **, 13, 13]  [17, 17, **, **]
       expect(entries).to.include("As Fast As You Can");  // [**, **, **, **]  [17, 17, 13, 13]
     },

     function (entries) { // Crazy
       expect(entries.length).to.equal(1);
                                                          // [**, **, 16, 11]  [17, 17, **, **]
       expect(entries).to.include("As Fast As You Can");  // [**, **, **, **]  [17, 17, 16, 11]
     },

     function (entries) { // Keep On Movin'
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(9, testCharts, 2, tests);
}
