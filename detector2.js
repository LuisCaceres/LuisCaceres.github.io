/* 
NOTE: The following tests ensure that no entry arrives at position 12, 11, 10, 09, 08, 07, 06, 05, 04, 03, 02 or 01.
If a corrupt entry has been found then the application will attempt to amend it. It may not always be possible to amend
a corrupt entry.

* Replace corrupt entry with an entry which has just started descending.

EXAMPLE: [**, 12, 10, 07]
*/


// WEEK 3
{
  const tests = [

   // POSITION 12
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(4);
       expect(entries).to.include("New");
       expect(entries).to.include("Mi Chico Latino");
       expect(entries).to.include("That's The Way It Is");
       expect(entries).to.include("Man! I Feel Like A Woman");
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

     function (entries) { // Man! I Feel Like A Woman
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(5, testCharts, 2, tests);
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

  runTests(9, testCharts, 2, tests);
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

  runTests(10, testCharts, 2, tests);
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

  runTests(11, testCharts, 2, tests);
}
