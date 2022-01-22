/* 
NOTE: The following tests ensure that no entry stays in the same position for more than 2 weeks consecutively.
There are exceptions, however, although they are limited. 
EXAMPLE: [20, 20, 20]
*/

// WEEK 3
{
  const tests = [

    // POSITION 1
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },
   ],

   // POSITION 2
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },
   ],

   // POSITION 3
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "La Lola", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                          // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");              // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                          // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");            // [02, 02, 04, 06]  [14, 09, 02, 01]

//                                                           // [02, 02, 02, 06]  [04, 04, 05, 07]
//        expect(entries).to.include("All I Have To Give");  // [02, 02, 05, 06]  [04, 04, 02, 07]

                                                          // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");      // [02, 02, 06, 06]  [**, 10, 02, 02]
     },
   ],

   // POSITION 4
   [
     new Chart("Puente", "Someday", "All I Have To Give", "All Star", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("All Star");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [04, 04, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [04, 04, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // All Star
       expect(entries.length).to.equal(2);
                                               // [04, 04, 04, 01]  [02, 02, 02, 06]
       expect(entries).to.include("Someday");  // [04, 04, 02, 01]  [02, 02, 04, 06]

                                               // [04, 04, 04, 01]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");   // [04, 04, 01, 01]  [01, 01, 04, 04]
     },
   ],

   // POSITION 5
   [
     new Chart("Puente", "Someday", "La Lola", "Someday We'll Know", "All I Have To Give", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "Higher", "All I Have To Give", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("All I Have To Give");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // All I Have To Give
       // NOTE: [21, 18, 18, 18, 19] <<< CHECK THIS SITUATION
       expect(entries.length).to.equal(2);
                                                      // [05, 05, 05, 07]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [05, 05, 06, 07]  [**, 10, 05, 02]

                                                      // [05, 05, 05, 07]  [06, 04, 07, 08]
       expect(entries).to.include("Higher");          // [05, 05, 07, 07]  [06, 04, 05, 08]
     },
   ],

   // POSITION 6
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "I Need To Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "I Need To Know", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("I Need To Know");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [15, 10, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [15, 10, 02, 01]

                                                      // [02, 02, 02, 06]  [06, 06, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [06, 06, 02, 02]
     },

     function (entries) { // I Need To Know
       expect(entries.length).to.equal(3);
                                                          // [06, 06, 06, 02]  [03, 04, 05, 07]
       expect(entries).to.include("All I Have To Give");  // [06, 06, 05, 02]  [03, 04, 06, 07]

                                                          // [06, 06, 06, 02]  [15, 10, 04, 01]
       expect(entries).to.include("All Star");            // [06, 06, 04, 02]  [15, 10, 06, 01]

                                                          // [06, 06, 06, 02]  [02, 02, 02, 06]
       expect(entries).to.include("Someday");             // [06, 06, 02, 02]  [02, 02, 06, 06]
     },
   ],

   // POSITION 7
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "If Ya Gettin' Down", "Higher", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "La Lola", "If Ya Gettin' Down", "Higher", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("Higher");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // Higher
       expect(entries.length).to.equal(1);
                                              // [07, 07, 07, 08]  [20, 11, 08, 05]
       expect(entries).to.include("Angels");  // [07, 07, 08, 08]  [20, 11, 07, 05]
     },
   ],

   // POSITION 8
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "Angels", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "Angels", "The Kids Aren't Alright", "All Star", "I Need To Know", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("Angels");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [15, 10, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [15, 10, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 11, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 11, 02, 02]
     },

     function (entries) { // Angels
       expect(entries.length).to.equal(2);
                                                      // [08, 08, 08, 05]  [06, 05, 07, 08]
       expect(entries).to.include("Higher");          // [08, 08, 07, 05]  [06, 05, 08, 08]

                                                      // [08, 08, 08, 05]  [**, 11, 06, 02]
       expect(entries).to.include("I Need To Know");  // [08, 08, 06, 05]  [**, 11, 08, 02]
     },
   ],

   // POSITION 9
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "The Kids Aren't Alright", "Heartbreaker", "If Ya Gettin' Down", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "The Kids Aren't Alright", "All Star", "If Ya Gettin' Down", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("If Ya Gettin' Down");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04] 
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 08, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 08, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // If Ya Gettin' Down
       expect(entries.length).to.equal(2);
                                                               // [09, 09, 09, 11]  [04, 06, 10, 16]
       expect(entries).to.include("La Lola");                  // [09, 09, 10, 11]  [04, 06, 09, 16]

                                                               // [09, 09, 09, 11]  [07, 07, 11, 14]
       expect(entries).to.include("The Kids Aren't Alright");  // [09, 09, 11, 11]  [07, 07, 09, 14]
     },
   ],

   // POSITION 10
   [
     new Chart("Puente", "Someday", "All I Have To Give", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "La Lola", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "La Lola", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("La Lola");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 08, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 08, 02, 01]
  
                                                      // [02, 02, 02, 06]  [**, 09, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 09, 02, 02]
     },

     function (entries) { // La Lola
       expect(entries.length).to.equal(2);
                                                               // [10, 10, 10, 16]  [07, 07, 11, 14]
       expect(entries).to.include("The Kids Aren't Alright");  // [10, 10, 11, 16]  [07, 07, 10, 14]

                                                               // [10, 10, 10, 16]  [17, 15, 13, 10]
       expect(entries).to.include("Si Me Advertí");            // [10, 10, 13, 16]  [17, 15, 10, 10]
     },
   ],

   // POSITION 11
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "The Kids Aren't Alright", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "All Star", "I Need To Know", "Angels", "The Kids Aren't Alright", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("The Kids Aren't Alright");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04] 
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 08, 04, 01]  
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 08, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 09, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 09, 02, 02]

     },

     function (entries) { // The Kids Aren't Alright
       expect(entries.length).to.equal(1);

                                                        // [11, 11, 11, 14]  [17, 15, 13, 10]
       expect(entries).to.include("Si Me Advertí");     // [11, 11, 13, 14]  [17, 15, 11, 10]

// NOTE                                                        // [11, 11, 11, 14]  [13, 13, 14, 17]
//        expect(entries).to.include("When You're Gone");  // [11, 11, 14, 14]  [13, 13, 11, 17]
     },
   ],

   // POSITION 12
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "New", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "New", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("Someday");
       expect(entries).to.include("New");
       expect(entries).to.include("When You're Gone");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [15, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [15, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // When You're Gone
       expect(entries.length).to.equal(3);
                                                       // [14, 14, 14, 17]  [**, **, 15, 12]
       expect(entries).to.include("Mi Chico Latino");  // [14, 14, 15, 17]  [**, **, 14, 12]

                                                       // [14, 14, 14, 17]  [09, 13, 16, **]
       expect(entries).to.include("Heartbreaker");     // [14, 14, 16, 17]  [09, 13, 14, **]

                                                       // [14, 14, 14, 17]  [**, 20, 17, 13]
       expect(entries).to.include("No Quiero Verte");  // [14, 14, 17, 17]  [**, 20, 14, 13]
     },

     function (entries) { // New
       expect(entries.length).to.equal(2);
                                                               // [12, 12, 12, 09]  [08, 08, 11, 14]
       expect(entries).to.include("The Kids Aren't Alright");  // [12, 12, 11, 09]  [08, 08, 12, 14]

                                                               // [12, 12, 12, 09]  [04, 06, 10, 16]
       expect(entries).to.include("La Lola");                  // [12, 12, 10, 09]  [04, 06, 12, 16]
     },
   ],

   // POSITION 13
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "Si Me Advertí", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "Si Me Advertí", "When You're Gone", "Jennifer Del Estero", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("Someday");
       expect(entries).to.include("Si Me Advertí");
       expect(entries).to.include("When You're Gone");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [15, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [15, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // When You're Gone
       expect(entries.length).to.equal(3);
                                                       // [14, 14, 14, 17]  [**, **, 15, 12]
       expect(entries).to.include("Mi Chico Latino");  // [14, 14, 15, 17]  [**, **, 14, 12]

                                                       // [14, 14, 14, 17]  [09, 12, 16, **]
       expect(entries).to.include("Heartbreaker");     // [14, 14, 16, 17]  [09, 12, 14, **]

                                                       // [14, 14, 14, 17]  [**, 19, 17, 13]
       expect(entries).to.include("No Quiero Verte");  // [14, 14, 17, 17]  [**, 19, 14, 13]
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(3);
                                                               // [13, 13, 13, 10]  [**, **, 12, 09]
       expect(entries).to.include("New");                      // [13, 13, 12, 10]  [**, **, 13, 09]

                                                               // [13, 13, 13, 10]  [08, 08, 11, 14]
       expect(entries).to.include("The Kids Aren't Alright");  // [13, 13, 11, 10]  [08, 08, 13, 14]

                                                               // [13, 13, 13, 10]  [04, 06, 10, 16]
       expect(entries).to.include("La Lola");                  // [13, 13, 10, 10]  [04, 06, 13, 16]
     },
   ],

   // POSITION 14
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "All Star", "When You're Gone", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "Jennifer Del Estero", "When You're Gone", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("When You're Gone");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [13, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [13, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // When You're Gone
       expect(entries.length).to.equal(3);
                                                       // [14, 14, 14, 17]  [**, **, 15, 12]
       expect(entries).to.include("Mi Chico Latino");  // [14, 14, 15, 17]  [**, **, 14, 12]

                                                       // [14, 14, 14, 17]  [09, 12, 16, **]
       expect(entries).to.include("Heartbreaker");     // [14, 14, 16, 17]  [09, 12, 14, **]

                                                       // [14, 14, 14, 17]  [**, 19, 17, 13]
       expect(entries).to.include("No Quiero Verte");  // [14, 14, 17, 17]  [**, 19, 14, 13]
     },
   ],

   // POSITION 15
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Mi Chico Latino", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Mi Chico Latino", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("Mi Chico Latino");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // Mi Chico Latino
       expect(entries.length).to.equal(3);
                                                        // [15, 15, 15, 12]  [13, 13, 14, 17]
       expect(entries).to.include("When You're Gone");  // [15, 15, 14, 12]  [13, 13, 15, 17]

                                                        // [15, 15, 15, 12]  [18, 16, 13, 10]
       expect(entries).to.include("Si Me Advertí");     // [15, 15, 13, 12]  [18, 16, 15, 10]

                                                        // [15, 15, 15, 12]  [**, **, 12, 09]
       expect(entries).to.include("New");               // [15, 15, 12, 12]  [**, **, 15, 09]
     },
   ],

   // POSITION 16
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Heartbreaker", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Heartbreaker", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("Heartbreaker");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04] 
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [13, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [13, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // Heartbreaker
       expect(entries.length).to.equal(3);
                                                            // [16, 16, 16, **]  [**, 19, 17, 13]
       expect(entries).to.include("No Quiero Verte");       // [16, 16, 17, **]  [**, 19, 16, 13]

                                                            // [16, 16, 16, **]  [11, 13, 18, **]
       expect(entries).to.include("Jennifer Del Estero");   // [16, 16, 18, **]  [11, 13, 16, **]

                                                            // [16, 16, 16, **]  [**, **, 19, 15]
       expect(entries).to.include("That's The Way It Is");  // [16, 16, 19, **]  [**, **, 16, 15]
     },
   ],

   // POSITION 17
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "No Quiero Verte", "Si Me Advertí", "Let Forever Be", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "No Quiero Verte", "Waiting For Tonight", "Atrapados En La Red", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("No Quiero Verte");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // No Quiero Verte
       expect(entries.length).to.equal(3);
                                                        // [17, 17, 17, 13]  [09, 12, 16, ** ]
       expect(entries).to.include("Heartbreaker");      // [17, 17, 16, 13]  [09, 12, 17, **]

                                                        // [17, 17, 17, 13]  [**, **, 15, 12]
       expect(entries).to.include("Mi Chico Latino");   // [17, 17, 15, 13]  [**, **, 17, 12]

                                                        // [17, 17, 17, 13]  [13, 13, 14, 17]
       expect(entries).to.include("When You're Gone");  // [17, 17, 14, 13]  [13, 13, 17, 17]
     },
   ],

   // POSITION 18
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "Jennifer Del Estero", "...Baby One More Time", "Angels"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "Jennifer Del Estero", "No Quiero Verte", "...Baby One More Time"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("Jennifer Del Estero");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [13, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [13, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // Jennifer Del Estero
       expect(entries.length).to.equal(2);
                                                                // [18, 18, 18, **]  [**, **, 19, 15]
       expect(entries).to.include("That's The Way It Is");      // [18, 18, 19, **]  [**, **, 18, 15]

                                                                // [18, 18, 18, **]  [**, **, 20, 18]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [18, 18, 20, **]  [**, **, 18, 18]
     },
   ],

   // POSITION 19
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "That's The Way It Is", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "That's The Way It Is", "No Quiero Verte"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("That's The Way It Is");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // That's The Way It Is
       expect(entries.length).to.equal(4);
                                                           // [19, 19, 19, 15]  [12, 14, 18, **]
       expect(entries).to.include("Jennifer Del Estero");  // [19, 19, 18, 15]  [12, 14, 19, **]

                                                           // [19, 19, 19, 15]  [**, 20, 17, 13]
       expect(entries).to.include("No Quiero Verte");      // [19, 19, 17, 15]  [**, 20, 19, 13]

                                                           // [19, 19, 19, 15]  [09, 12, 16, **]
       expect(entries).to.include("Heartbreaker");         // [19, 19, 16, 15]  [09, 12, 19, **]

                                                           // [19, 19, 19, 15]  [**, **, 15, 12]
       expect(entries).to.include("Mi Chico Latino");      // [19, 19, 15, 15]  [**, **, 19, 12]
     },
   ],

   // POSITION 20
   [
     new Chart("Puente", "Someday", "All I Have To Give", "La Lola", "Someday We'll Know", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "Heartbreaker", "Waiting For Tonight", "What's My Age Again?", "Jennifer Del Estero", "When You're Gone", "All Star", "Atrapados En La Red", "Look At Me", "Si Me Advertí", "Let Forever Be", "...Baby One More Time", "Man! I Feel Like A Woman"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday");
       expect(entries).to.include("Man! I Feel Like A Woman");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(3);
                                                      // [02, 02, 02, 06]  [01, 01, 01, 04]
       expect(entries).to.include("Puente");          // [02, 02, 01, 06]  [01, 01, 02, 04]

                                                      // [02, 02, 02, 06]  [14, 09, 04, 01]
       expect(entries).to.include("All Star");        // [02, 02, 04, 06]  [14, 09, 02, 01]

                                                      // [02, 02, 02, 06]  [**, 10, 06, 02]
       expect(entries).to.include("I Need To Know");  // [02, 02, 06, 06]  [**, 10, 02, 02]
     },

     function (entries) { // Man! I Feel Like A Woman
       expect(entries.length).to.equal(2);
                                                            // [20, 20, 20, 18]  [**, **, 19, 15]
       expect(entries).to.include("That's The Way It Is");  // [20, 20, 19, 18]  [**, **, 20, 15]

                                                            // [20, 20, 20, 18]  [12, 14, 18, **]
       expect(entries).to.include("Jennifer Del Estero");   // [20, 20, 18, 18]  [12, 14, 20, **]
     },
   ],
  ];

  runTests(5, testCharts, 3, tests);
}

// WEEK 4
{
  const tests = [

   // POSITION 1
   [
     new Chart("All Star", "Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("All Star", "Puente", "Someday We'll Know", "Someday", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 2
   [
     new Chart("Puente", "I Need To Know", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "I Need To Know", "Someday We'll Know", "Someday", "All Star", "All I Have To Give", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 3
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday We'll Know");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 06, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 06, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },
   ],

   // POSITION 4
   [
     new Chart("Someday", "Someday We'll Know", "All I Have To Give", "Puente", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Someday", "Someday We'll Know", "All Star", "Puente", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Puente");
     },

     function (entries) { // Puente
       expect(entries.length).to.equal(1);
                                              // [04, 04, 04, 05]  [11, 08, 05, 03]
       expect(entries).to.include("Angels");  // [04, 04, 05, 05]  [11, 08, 04, 03]
     },
   ],

   // POSITION 5
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Angels", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "Angels", "All I Have To Give", "I Need To Know", "Higher", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("Angels");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [11, 07, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [11, 07, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // Angels
       expect(entries.length).to.equal(1);
                                                     // [05, 05, 05, 03]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");         // [05, 05, 04, 03]  [01, 01, 05, 05]
     },
   ],

   // POSITION 6
   [
     new Chart("Puente", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "Someday", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Someday", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 7
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "Higher", "La Lola", "If Ya Gettin' Down", "All I Have To Give", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "I Need To Know", "Higher", "All I Have To Give", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("All I Have To Give");
     },

     function (entries) { // All I Have To Give
       expect(entries.length).to.equal(2);
                                              // [07, 07, 07, 10]  [04, 06, 08, 12]
       expect(entries).to.include("Higher");  // [07, 07, 08, 10]  [04, 06, 07, 12]

                                              // [07, 07, 07, 10]  [**, 12, 09, 07]
       expect(entries).to.include("New");     // [07, 07, 09, 10]  [**, 12, 07, 07]
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },
   ],

   // POSITION 8
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "Higher", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Angels", "Higher", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("Higher");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // Higher
       expect(entries.length).to.equal(2);
                                                       // [08, 08, 08, 12]  [**, 12, 09, 07]
       expect(entries).to.include("New");              // [08, 08, 09, 12]  [**, 12, 08, 07]

                                                       // [08, 08, 08, 12]  [**, 15, 12, 08]
       expect(entries).to.include("Mi Chico Latino");  // [08, 08, 12, 12]  [**, 15, 08, 08]
     },
   ],

   // POSITION 9
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "New", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "New", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("New");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // New
       expect(entries.length).to.equal(2);
                                                          // [09, 09, 09, 07]  [05, 07, 08, 12]
       expect(entries).to.include("Higher");              // [09, 09, 08, 07]  [05, 07, 09, 12]

                                                          // [09, 09, 09, 07]  [04, 05, 07, 10]
       expect(entries).to.include("All I Have To Give");  // [09, 09, 07, 07]  [04, 05, 09, 10]
     },
   ],

   // POSITION 10
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "Si Me Advertí", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "Si Me Advertí", "La Lola", "The Kids Aren't Alright", "New", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(1);
                                           // [10, 10, 10, 09]  [**, 13, 09, 07]
       expect(entries).to.include("New");  // [10, 10, 09, 09]  [**, 13, 10, 07]
     },
   ],

   // POSITION 11
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "If Ya Gettin' Down", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "La Lola", "The Kids Aren't Alright", "If Ya Gettin' Down", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("If Ya Gettin' Down");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // If Ya Gettin' Down
       expect(entries.length).to.equal(3);
                                                               // [11, 11, 11, 15]  [**, 15, 12, 08]
       expect(entries).to.include("Mi Chico Latino");          // [11, 11, 12, 15]  [**, 15, 11, 08]

                                                               // [11, 11, 11, 15]  [19, 17, 13, 11]
       expect(entries).to.include("No Quiero Verte");          // [11, 11, 13, 15]  [19, 17, 11, 11]

                                                               // [11, 11, 11, 15]  [07, 10, 14, 18]
       expect(entries).to.include("The Kids Aren't Alright");  // [11, 11, 14, 15]  [07, 10, 11, 18]
     },
   ],

   // POSITION 12
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Mi Chico Latino", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "Mi Chico Latino", "New", "Si Me Advertí", "When You're Gone", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("Mi Chico Latino");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // Mi Chico Latino
       expect(entries.length).to.equal(4);
                                                          // [12, 12, 12, 08]  [07, 09, 11, 15]
       expect(entries).to.include("If Ya Gettin' Down");  // [12, 12, 11, 08]  [07, 09, 12, 15]

                                                          // [12, 12, 12, 08]  [16, 14, 10, 09]
       expect(entries).to.include("Si Me Advertí");       // [12, 12, 10, 08]  [16, 14, 12, 09]

                                                          // [12, 12, 12, 08]  [**, 13, 09, 07]
       expect(entries).to.include("New");                 // [12, 12, 09, 08]  [**, 13, 12, 07]

                                                          // [12, 12, 12, 08]  [05, 07, 08, 12]
       expect(entries).to.include("Higher");              // [12, 12, 08, 08]  [05, 07, 12, 12]
     },
   ],

   // POSITION 13
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "No Quiero Verte", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "No Quiero Verte", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("No Quiero Verte");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // No Quiero Verte
       expect(entries.length).to.equal(2);
                                                          // [13, 13, 13, 11]  [**, 16, 12, 08]
       expect(entries).to.include("Mi Chico Latino");     // [13, 13, 12, 11]  [**, 16, 13, 08]

                                                          // [13, 13, 13, 11]  [07, 09, 11, 15]
       expect(entries).to.include("If Ya Gettin' Down");  // [13, 13, 11, 11]  [07, 09, 13, 15]
     },
   ],

   // POSITION 14
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "The Kids Aren't Alright", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "New", "Si Me Advertí", "When You're Gone", "The Kids Aren't Alright", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("The Kids Aren't Alright");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // The Kids Aren't Alright
       expect(entries.length).to.equal(4);
                                                                // [14, 14, 14, 18]  [**, 19, 15, 13]
       expect(entries).to.include("That's The Way It Is");      // [14, 14, 15, 18]  [**, 19, 14, 13]

                                                                // [14, 14, 14, 18]  [06, 10, 16, **]
       expect(entries).to.include("La Lola");                   // [14, 14, 16, 18]  [06, 10, 14, **]

                                                                // [14, 14, 14, 18]  [12, 13, 17, 19]
       expect(entries).to.include("When You're Gone");          // [14, 14, 17, 18]  [12, 13, 14, 19]

                                                                // [14, 14, 14, 18]  [**, 20, 18, 14]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [14, 14, 18, 18]  [**, 20, 14, 14]
     },
   ],

   // POSITION 15
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "That's The Way It Is", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "That's The Way It Is", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("That's The Way It Is");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // That's The Way It Is
       expect(entries.length).to.equal(2);
                                                               // [15, 15, 15, 13]  [08, 11, 14, 18]
       expect(entries).to.include("The Kids Aren't Alright");  // [15, 15, 14, 13]  [08, 11, 15, 18]

                                                               // [15, 15, 15, 13]  [20, 18, 13, 11]
       expect(entries).to.include("No Quiero Verte");          // [15, 15, 13, 13]  [20, 18, 15, 11]
     },
   ],

   // POSITION 16
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "La Lola", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "La Lola", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("La Lola");
     },

     function (entries) { // La Lola
       expect(entries.length).to.equal(3);
                                                                // [16, 16, 16, **]  [12, 13, 17, 19]
       expect(entries).to.include("When You're Gone");          // [16, 16, 17, **]  [12, 13, 16, 19]

                                                                // [16, 16, 16, **]  [**, 20, 18, 14]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [16, 16, 18, **]  [**, 20, 16, 14]

                                                                // [16, 16, 16, **]  [**, **, 19, 16]
       expect(entries).to.include("Don't Say You Love Me");     // [16, 16, 19, **]  [**, **, 16, 16]
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },
   ],



   // POSITION 17
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "When You're Gone", "Atrapados En La Red", "No Quiero Verte", "...Baby One More Time"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "When You're Gone", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("When You're Gone");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // When You're Gone
       expect(entries.length).to.equal(2);
                                                                // [17, 17, 17, 19]  [**, 20, 18, 14]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [17, 17, 18, 19]  [**, 20, 17, 14]

                                                                // [17, 17, 17, 19]  [**, **, 19, 16]
       expect(entries).to.include("Don't Say You Love Me");     // [17, 17, 19, 19]  [**, **, 17, 16]
     },
   ],


   // POSITION 18
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Man! I Feel Like A Woman", "Atrapados En La Red", "No Quiero Verte"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Man! I Feel Like A Woman", "Jennifer Del Estero", "That's The Way It Is"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("Man! I Feel Like A Woman");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // Man! I Feel Like A Woman
       expect(entries.length).to.equal(4);
                                                               // [18, 18, 18, 14]  [13, 14, 17, 19]
       expect(entries).to.include("When You're Gone");         // [18, 18, 17, 14]  [13, 14, 18, 19]

                                                               // [18, 18, 18, 14]  [06, 10, 16, **]
       expect(entries).to.include("La Lola");                  // [18, 18, 16, 14]  [06, 10, 18, **]

                                                               // [18, 18, 18, 14]  [**, 20, 15, 13]
       expect(entries).to.include("That's The Way It Is");     // [18, 18, 15, 14]  [**, 20, 18, 13]

                                                               // [18, 18, 18, 14]  [08, 11, 14, 18]
       expect(entries).to.include("The Kids Aren't Alright");  // [18, 18, 14, 14]  [08, 11, 18, 18]
     },
   ],



   // POSITION 19
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "Don't Say You Love Me", "No Quiero Verte"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "Don't Say You Love Me", "That's The Way It Is"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("Don't Say You Love Me");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },

     function (entries) { // Don't Say You Love Me
       expect(entries.length).to.equal(3);
                                                                // [19, 19, 19, 16]  [**, **, 18, 14]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [19, 19, 18, 16]  [**, **, 19, 14]

                                                                // [19, 19, 19, 16]  [13, 14, 17, 19]
       expect(entries).to.include("When You're Gone");          // [19, 19, 17, 16]  [13, 14, 19, 19]

                                                                // [19, 19, 19, 16]  [06, 10, 16, **]
       expect(entries).to.include("La Lola");                   // [19, 19, 16, 16]  [06, 10, 19, **]
     },
   ],


   // POSITION 20
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All I Have To Give", "Higher", "La Lola", "If Ya Gettin' Down", "The Kids Aren't Alright", "All Star", "I Need To Know", "Angels", "Heartbreaker", "When You're Gone", "Jennifer Del Estero", "Si Me Advertí", "What's My Age Again?", "Waiting For Tonight", "Atrapados En La Red", "No Quiero Verte", "As Fast As You Can"),
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday We'll Know");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [03, 03, 03, 04]  [10, 05, 02, 02]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 04]  [10, 05, 03, 02]

                                                      // [03, 03, 03, 04]  [01, 01, 04, 05]
       expect(entries).to.include("Puente");          // [03, 03, 04, 04]  [01, 01, 03, 05]
     },
   ],
  ];

  runTests(6, testCharts, 3, tests);
}

// WEEK 5
{
  const tests = [
   // POSITION 1
   [
     new Chart("All Star", "Puente", "Someday We'll Know", "Someday", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 2
   [
     new Chart("Puente", "I Need To Know", "Someday We'll Know", "Someday", "All Star", "All I Have To Give", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("I Need To Know");
     },

     function (entries) { // I Need To Know
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 3
   [
     new Chart("Puente", "Someday", "Angels", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Angels");
       expect(entries).to.include("Someday We'll Know");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(0);
     },

     function (entries) { // Angels
       expect(entries.length).to.equal(1);
                                                      // [03, 03, 03, 02]  [07, 02, 02, 03]
       expect(entries).to.include("I Need To Know");  // [03, 03, 02, 02]  [07, 02, 03, 03]
     },
   ],

   // POSITION 4
   [
     new Chart("Puente", "Someday", "All Star", "Someday We'll Know", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Puente", "Someday We'll Know", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday We'll Know");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(1);
                                              // [04, 04, 04, 05]  [01, 03, 05, 10]
       expect(entries).to.include("Puente");  // [04, 04, 05, 05]  [01, 03, 04, 10]
     },
   ],

   // POSITION 5
   [
     new Chart("Someday", "Someday We'll Know", "All Star", "All I Have To Give", "Puente", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Angels", "Puente", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Puente");
     },

     function (entries) { // Puente
       expect(entries.length).to.equal(1);
                                                       // [05, 05, 05, 10]  [15, 12, 08, 04]
       expect(entries).to.include("Mi Chico Latino");  // [05, 05, 08, 10]  [15, 12, 05, 04]
     },
   ],

   // POSITION 6
   [
     new Chart("Puente", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Someday", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(1);
                                           // [06, 06, 06, 07]  [12, 09, 07, 06]
       expect(entries).to.include("New");  // [06, 06, 07, 07]  [12, 09, 06, 06]
     },
   ],

  // POSITION 7
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "New", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "New", "All I Have To Give", "Higher", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("New");
     },

     function (entries) { // New
       expect(entries.length).to.equal(1);
                                               // [07, 07, 07, 06]  [02, 06, 06, 07]
       expect(entries).to.include("Someday");  // [07, 07, 06, 06]  [02, 06, 07, 07]
     },
   ],

   // POSITION 8
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Mi Chico Latino", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Mi Chico Latino", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Mi Chico Latino");
     },

     function (entries) { // Mi Chico Latino
       expect(entries.length).to.equal(2);
                                              // [08, 08, 08, 04]  [13, 10, 07, 06]
       expect(entries).to.include("New");     // [08, 08, 07, 04]  [13, 10, 08, 06]

                                              // [08, 08, 08, 04]  [01, 04, 05, 10]
       expect(entries).to.include("Puente");  // [08, 08, 05, 04]  [01, 04, 08, 10]
     },
   ],

   // POSITION 9
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "Si Me Advertí", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "Si Me Advertí", "New", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 10
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "All I Have To Give", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "Higher", "New", "Si Me Advertí", "All I Have To Give", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("All I Have To Give");
     },

     function (entries) { // All I Have To Give
       expect(entries.length).to.equal(2);
                                                            // [10, 10, 10, 14]  [06, 07, 12, 17]
       expect(entries).to.include("Higher");                // [10, 10, 12, 14]  [06, 07, 10, 17]

                                                            // [10, 10, 10, 14]  [19, 15, 13, 08]
       expect(entries).to.include("That's The Way It Is");  // [10, 10, 13, 14]  [19, 15, 10, 08]
     },
   ],

   // POSITION 11
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "No Quiero Verte", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "No Quiero Verte", "If Ya Gettin' Down", "Mi Chico Latino", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 12
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Higher", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "Higher", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Higher");
     },

     function (entries) { // Higher
       expect(entries.length).to.equal(3);
                                                                // [12, 12, 12, 17]  [19, 15, 13, 08] 
       expect(entries).to.include("That's The Way It Is");      // [12, 12, 13, 17]  [19, 15, 12, 08]

                                                                // [12, 12, 12, 17]  [20, 18, 14, 12] 
       expect(entries).to.include("Man! I Feel Like A Woman");  // [12, 12, 14, 17]  [20, 18, 12, 12]

                                                                // [12, 12, 12, 17]  [08, 10, 15, 19] 
       expect(entries).to.include("If Ya Gettin' Down");        // [12, 12, 15, 17]  [08, 10, 12, 19]
     },
   ],

   // POSITION 13
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "That's The Way It Is", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "That's The Way It Is", "No Quiero Verte", "The Kids Aren't Alright", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("That's The Way It Is");
     },

     function (entries) { // That's The Way It Is
       expect(entries.length).to.equal(3);
                                                          // [13, 13, 13, 08]  [07, 08, 12, 17]
       expect(entries).to.include("Higher");              // [13, 13, 12, 08]  [07, 08, 13, 17]

                                                          // [13, 13, 13, 08]  [18, 14, 11, 11]
       expect(entries).to.include("No Quiero Verte");     // [13, 13, 11, 08]  [18, 14, 13, 11]

                                                          // [13, 13, 13, 08]  [05, 07, 10, 14]
       expect(entries).to.include("All I Have To Give");  // [13, 13, 10, 08]  [05, 07, 13, 14]
     },
   ],

   // POSITION 14
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "Man! I Feel Like A Woman", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "Man! I Feel Like A Woman", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Man! I Feel Like A Woman");
     },

     function (entries) { // Man! I Feel Like A Woman
       expect(entries.length).to.equal(2);
                                                            // [14, 14, 14, 12]  [20, 16, 13, 08]
       expect(entries).to.include("That's The Way It Is");  // [14, 14, 13, 12]  [20, 16, 14, 08]

                                                            // [14, 14, 14, 12]  [07, 08, 12, 17]
       expect(entries).to.include("Higher");                // [14, 14, 12, 12]  [07, 08, 14, 17]
     },
   ],

   // POSITION 15
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "If Ya Gettin' Down", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "If Ya Gettin' Down", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("If Ya Gettin' Down");
     },

     function (entries) { // If Ya Gettin' Down
       expect(entries.length).to.equal(3);
                                                               // [15, 15, 15, 19]  [**, 19, 16, 13]
       expect(entries).to.include("Don't Say You Love Me");    // [15, 15, 16, 19]  [**, 19, 15, 13]

                                                               // [15, 15, 15, 19]  [**, **, 17, 15]
       expect(entries).to.include("Dreams In Digital");        // [15, 15, 17, 19]  [**, **, 15, 15]

                                                               // [15, 15, 15, 19]  [10, 13, 18, **]
       expect(entries).to.include("The Kids Aren't Alright");  // [15, 15, 18, 19]  [10, 13, 15, **]
     },
   ],

   // POSITION 16
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Don't Say You Love Me", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "Don't Say You Love Me", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Don't Say You Love Me");
     },

     function (entries) { // Don't Say You Love Me
       expect(entries.length).to.equal(2);
                                                                // [16, 16, 16, 13]  [09, 11, 15, 19]
       expect(entries).to.include("If Ya Gettin' Down");        // [16, 16, 15, 13]  [09, 11, 16, 19]

                                                                // [16, 16, 16, 13]  [**, 19, 14, 12]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [16, 16, 14, 13]  [**, 19, 16, 12]
     },
   ],

   // POSITION 17
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "Dreams In Digital", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "Dreams In Digital", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Dreams In Digital");
     },

     function (entries) { // Dreams In Digital
       expect(entries.length).to.equal(2);
                                                             // [17, 17, 17, 15]  [**, 20, 16, 13]
       expect(entries).to.include("Don't Say You Love Me");  // [17, 17, 16, 15]  [**, 20, 17, 13]

                                                             // [17, 17, 17, 15]  [09, 11, 15, 19]
       expect(entries).to.include("If Ya Gettin' Down");     // [17, 17, 15, 15]  [09, 11, 17, 19]
     },
   ],

   // POSITION 18
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "The Kids Aren't Alright", "That's The Way It Is", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "The Kids Aren't Alright", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("The Kids Aren't Alright");
     },

     function (entries) { // The Kids Aren't Alright
       expect(entries.length).to.equal(2);
                                                          // [18, 18, 18, **]  [13, 16, 19, 20]
       expect(entries).to.include("When You're Gone");    // [18, 18, 19, **]  [13, 16, 18, 20]

                                                          // [18, 18, 18, **]  [**, 20, 20, 18]
       expect(entries).to.include("As Fast As You Can");  // [18, 18, 20, **]  [**, 20, 18, 18]
     },
   ],

   // POSITION 19
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "When You're Gone", "Man! I Feel Like A Woman"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "Man! I Feel Like A Woman", "Don't Say You Love Me", "When You're Gone", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("When You're Gone");
     },

     function (entries) { // When You're Gone
       expect(entries.length).to.equal(1);
                                                          // [19, 19, 19, 20]  [**, 20, 20, 18]
       expect(entries).to.include("As Fast As You Can");  // [19, 19, 20, 20]  [**, 20, 19, 18]
     },
   ],

   // POSITION 20
   [
     new Chart("Puente", "Someday", "Someday We'll Know", "All Star", "All I Have To Give", "I Need To Know", "Higher", "Angels", "If Ya Gettin' Down", "La Lola", "The Kids Aren't Alright", "New", "Si Me Advertí", "When You're Gone", "Mi Chico Latino", "Heartbreaker", "No Quiero Verte", "Jennifer Del Estero", "That's The Way It Is", "As Fast As You Can"),
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("As Fast As You Can");
     },

     function (entries) { // As Fast As You Can
       expect(entries.length).to.equal(2);
                                                               // [20, 20, 20, 18]  [14, 17, 19, 20] 
       expect(entries).to.include("When You're Gone");         // [20, 20, 19, 18]  [14, 17, 20, 20]

                                                               // [20, 20, 20, 18]  [11, 14, 18, **]
       expect(entries).to.include("The Kids Aren't Alright");  // [20, 20, 18, 18]  [11, 14, 20, **]
     },
   ],
  ];

  runTests(7, testCharts, 3, tests);
}

// WEEK 6
{
  const tests = [
    // POSITION 1
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(0);
      },
    ],

    // POSITION 2
    [
      new Chart("All Star", "Angels", "I Need To Know", "Someday We'll Know", "Puente", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "Angels", "I Need To Know", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("I Need To Know");
      },

      function (entries) { // I Need To Know
        expect(entries.length).to.equal(1);
                                                        // [03, 03, 03, 04]  [12, 08, 04, 03]
        expect(entries).to.include("Mi Chico Latino");  // [03, 03, 04, 04]  [12, 08, 03, 03]
      },
    ],

    // POSITION 3
    [
      new Chart("All Star", "Someday We'll Know", "I Need To Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "Angels", "I Need To Know", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("I Need To Know");
      },

      function (entries) { // I Need To Know
        expect(entries.length).to.equal(1);
                                                        // [03, 03, 03, 04]  [12, 08, 04, 03]
        expect(entries).to.include("Mi Chico Latino");  // [03, 03, 04, 04]  [12, 08, 03, 03]
      },
    ],

    // POSITION 4
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Mi Chico Latino", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Mi Chico Latino", "Someday We'll Know", "Puente", "Someday", "New", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(2);
        expect(entries).to.include("Mi Chico Latino");
        expect(entries).to.include("Someday");
      },

      function (entries) { // Someday
        expect(entries.length).to.equal(2);
                                                             // [07, 07, 07, 10]  [15, 13, 08, 05]     1 + 1 
        expect(entries).to.include("That's The Way It Is");  // [07, 07, 08, 10]  [15, 13, 07, 05]

                                                             // [07, 07, 07, 10]  [05, 06, 10, 13]     3 + 1
        expect(entries).to.include("Puente");                // [07, 07, 10, 10]  [05, 06, 07, 13]
      },

      function (entries) { // Mi Chico Latino
        expect(entries.length).to.equal(1);
                                                       // [04, 04, 04, 03]  [02, 02, 03, 04]
        expect(entries).to.include("I Need To Know");  // [04, 04, 03, 03]  [02, 02, 04, 04]
      },
    ],

    // POSITION 5
    [
      new Chart("All Star", "I Need To Know", "Puente", "Angels", "Someday We'll Know", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Puente", "Someday We'll Know", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("Someday We'll Know");
      },

      function (entries) { // Someday We'll Know
        expect(entries.length).to.equal(0);
      },
    ],

    // POSITION 6
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "New", "Someday", "All I Have To Give", "Higher", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "New", "Someday", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("Someday");
      },

      function (entries) { // Someday
        expect(entries.length).to.equal(2);
                                                             // [07, 07, 07, 10]  [15, 13, 08, 05]
        expect(entries).to.include("That's The Way It Is");  // [07, 07, 08, 10]  [15, 13, 07, 05]

                                                             // [07, 07, 07, 10]  [04, 05, 10, 13]
        expect(entries).to.include("Puente");                // [07, 07, 10, 10]  [04, 05, 07, 13]
      },
    ],

    // POSITION 7
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "All I Have To Give", "Someday", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "New", "Someday", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),      

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("Someday");
      },

      function (entries) { // Someday
        expect(entries.length).to.equal(2);
                                                             // [07, 07, 07, 10]  [15, 13, 08, 05]
        expect(entries).to.include("That's The Way It Is");  // [07, 07, 08, 10]  [15, 13, 07, 05]

                                                             // [07, 07, 07, 10]  [04, 05, 10, 13]
        expect(entries).to.include("Puente");                // [07, 07, 10, 10]  [04, 05, 07, 13]
      },
    ],

    // POSITION 8
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "That's The Way It Is", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "That's The Way It Is", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("That's The Way It Is");
      },

      function (entries) { // That's The Way It Is
        expect(entries.length).to.equal(1);
                                                // [08, 08, 08, 05]  [06, 06, 07, 10]
        expect(entries).to.include("Someday");  // [08, 08, 07, 05]  [06, 06, 08, 10]
      },
    ],

    // POSITION 9
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "Si Me Advertí", "New", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(0);
      },
    ],

   // POSITION 10
   [
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "Puente", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Mi Chico Latino", "Someday", "New", "All I Have To Give", "Si Me Advertí", "Puente", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Puente");
     },

     function (entries) { // Puente
       expect(entries.length).to.equal(1);
                                                       // [10, 10, 10, 13]  [13, 11, 11, 15]
       expect(entries).to.include("No Quiero Verte");  // [10, 10, 11, 13]  [13, 11, 10, 15]
     },
   ],

    // POSITION 11
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "No Quiero Verte", "If Ya Gettin' Down", "Mi Chico Latino", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("No Quiero Verte");
      },

      function (entries) { // No Quiero Verte
        expect(entries.length).to.equal(2);
                                                           // [11, 11, 11, 15]  [04, 05, 10, 13]
        expect(entries).to.include("Puente");              // [11, 11, 10, 15]  [04, 05, 11, 13]

                                                           // [11, 11, 11, 15]  [07, 10, 14, 18]
        expect(entries).to.include("All I Have To Give");  // [11, 11, 14, 15]  [07, 10, 11, 18]
      },
    ],

    // POSITION 12
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Man! I Feel Like A Woman", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Man! I Feel Like A Woman", "Higher", "That's The Way It Is", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(0);
      },
    ],

    // POSITION 13
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "Don't Say You Love Me", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "Don't Say You Love Me", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("Don't Say You Love Me");
      },

      function (entries) { // Don't Say You Love Me
        expect(entries.length).to.equal(3);
                                                                 // [13, 13, 13, 19]  [19, 15, 12, 12]
        expect(entries).to.include("Man! I Feel Like A Woman");  // [13, 13, 12, 19]  [19, 15, 13, 12]
        
                                                                 // [13, 13, 13, 19]  [07, 10, 14, 18]
        expect(entries).to.include("All I Have To Give");        // [13, 13, 14, 19]  [07, 10, 13, 18]

                                                                 // [13, 13, 13, 19]  [08, 12, 17, **]
        expect(entries).to.include("Higher");                    // [13, 13, 17, 19]  [08, 12, 13, **]
      },
    ],

    // POSITION 14
    [
      new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "All I Have To Give", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
      new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "All I Have To Give", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

      function (entries) {
        expect(entries.length).to.equal(1);
        expect(entries).to.include("All I Have To Give");
      },

      function (entries) { // All I Have To Give
        expect(entries.length).to.equal(2);

                                                          // [14, 14, 14, 18]  [**, **, 16, 14]
        expect(entries).to.include("All Or Nothing");     // [14, 14, 16, 18]  [**, **, 14, 14]

                                                          // [14, 14, 14, 18]  [07, 11, 17, **] 
        expect(entries).to.include("Higher");             // [14, 14, 17, 18]  [07, 11, 14, **]
      },
    ],

   // POSITION 15
   [
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "Dreams In Digital", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "Dreams In Digital", "If Ya Gettin' Down", "Don't Say You Love Me", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Dreams In Digital");
     },

     function (entries) { // Dreams In Digital
       expect(entries.length).to.equal(3);
                                                          // [15, 15, 15, 20]  [07, 10, 14, 18]
       expect(entries).to.include("All I Have To Give");  // [15, 15, 14, 20]  [07, 10, 15, 18]

                                                          // [15, 15, 15, 20]  [**, **, 16, 14]
       expect(entries).to.include("All Or Nothing");      // [15, 15, 16, 20]  [**, **, 15, 14]

                                                          // [15, 15, 15, 20]  [08, 12, 17, **]
       expect(entries).to.include("Higher");              // [15, 15, 17, 20]  [08, 12, 15, **]
     },
   ],

   // POSITION 16
   [
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "All Or Nothing", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "All Or Nothing", "Don't Say You Love Me", "Dreams In Digital", "When You're Gone", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("All Or Nothing");
     },

     function (entries) { // All Or Nothing
       expect(entries.length).to.equal(2);
                                                          // [16, 16, 16, 14]  [**, 18, 15, 20]
       expect(entries).to.include("Dreams In Digital");   // [16, 16, 15, 14]  [**, 18, 16, 20]

                                                          // [16, 16, 16, 14]  [07, 10, 14, 18] 
       expect(entries).to.include("All I Have To Give");  // [16, 16, 14, 14]  [07, 10, 16, 18]
     },
   ],

   // POSITION 17
   [
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Higher", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "Higher", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Higher");
     },

     function (entries) { // Higher
       expect(entries.length).to.equal(2);
                                                          // [17, 17, 17, **]  [20, 20, 18, 17]
       expect(entries).to.include("As Fast As You Can");  // [17, 17, 18, **]  [20, 20, 17, 17]

                                                          // [17, 17, 17, **]  [10, 14, 19, **]
       expect(entries).to.include("If Ya Gettin' Down");  // [17, 17, 19, **]  [10, 14, 17, **]
     },
   ],

   // POSITION 18
   [
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "As Fast As You Can", "Man! I Feel Like A Woman", "Don't Say You Love Me"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "As Fast As You Can", "The Kids Aren't Alright", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("As Fast As You Can");
     },

     function (entries) { // As Fast As You Can
       expect(entries.length).to.equal(1);
                                              // [18, 18, 18, 17]  [08, 12, 17, **]
       expect(entries).to.include("Higher");  // [18, 18, 17, 17]  [08, 12, 18, **]
     },
   ],

   // POSITION 19
   [
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "When You're Gone", "Man! I Feel Like A Woman", "Don't Say You Love Me", "If Ya Gettin' Down", "As Fast As You Can"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "If Ya Gettin' Down", "As Fast As You Can"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("If Ya Gettin' Down");
     },

     function (entries) { // If Ya Gettin' Down
       expect(entries.length).to.equal(1);
                                                        // [19, 19, 19, **]  [16, 18, 20, **]
       expect(entries).to.include("When You're Gone");  // [19, 19, 20, **]  [16, 18, 19, **]
     },
   ],

   // POSITION 20
   [
     new Chart("All Star", "I Need To Know", "Someday We'll Know", "Puente", "Angels", "Someday", "All I Have To Give", "Higher", "New", "Si Me Advertí", "If Ya Gettin' Down", "Mi Chico Latino", "No Quiero Verte", "The Kids Aren't Alright", "That's The Way It Is", "La Lola", "Man! I Feel Like A Woman", "Don't Say You Love Me", "As Fast As You Can", "When You're Gone"),
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "As Fast As You Can", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("When You're Gone");
     },

     function (entries) { // When You're Gone
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(8, testCharts, 3, tests);
}

// WEEK 7
{
  const tests = [
   // POSITION 1
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                   // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                   // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],

   // POSITION 2
   [
     new Chart("All Star", "Angels", "I Need To Know", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Angels");
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Angels
       expect(entries.length).to.equal(1);
                                                        // [02, 02, 02, 03]  [08, 04, 03, 02]
       expect(entries).to.include("Mi Chico Latino");  // [02, 02, 03, 03]  [08, 04, 02, 02]
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]
       
                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],
    
   // POSITION 3
   [
     new Chart("All Star", "I Need To Know", "Mi Chico Latino", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Mi Chico Latino");
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },

     function (entries) { // Mi Chico Latino
       expect(entries.length).to.equal(1);
                                               // [03, 03, 03, 02]  [04, 02, 02, 03]
       expect(entries).to.include("Angels");  // [03, 03, 02, 02]  [04, 02, 03, 03]
     },
   ],

   // POSITION 4
   [
     new Chart("All Star", "Angels", "Someday We'll Know", "I Need To Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Angels");
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Angels
       expect(entries.length).to.equal(1);
                                                        // [02, 02, 02, 03]  [08, 03, 03, 02]
       expect(entries[0]).to.equal("Mi Chico Latino");  // [02, 02, 03, 03]  [08, 03, 02, 02]
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],

   // POSITION 5
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "That's The Way It Is", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "That's The Way It Is", "Someday We'll Know", "New", "Someday", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 6
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "New", "Someday", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],

   // POSITION 7
   [
     new Chart("All Star", "I Need To Know", "Angels", "Puente", "New", "Someday", "Someday We'll Know", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "New", "Someday", "Someday We'll Know", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Someday We'll Know");
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(0);
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 06, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 06, 09, 13]
     },
   ],

   // POSITION 8
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Maria Maria", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "Maria Maria", "Si Me Advertí", "That's The Way It Is", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),

     function (entries) {
       expect(entries.length).to.equal(0);
     },
   ],

   // POSITION 9
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],

   // POSITION 10
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "Someday", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "That's The Way It Is", "Si Me Advertí", "Puente", "Someday", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(1);
                                                                 // [10, 10, 10, 13]  [05, 09, 13, 16]
       expect(entries[0]).to.equal("Puente");                    // [10, 10, 13, 13]  [05, 09, 10, 16]
     },
   ],

   // POSITION 11
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "Fly Away", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "Fly Away", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Si Me Advertí");
       expect(entries).to.include("Fly Away");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(3);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [11, 11, 11, 07]
       expect(entries).to.include("Fly Away");     // [09, 09, 11, 11]  [11, 11, 09, 07]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },

     function (entries) { // Fly Away
       expect(entries.length).to.equal(3);
                                                      // [11, 11, 11, 07]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");    // [11, 11, 08, 07]  [**, **, 11, 08]

                                                      // [11, 11, 11, 07]  [09, 09, 09, 11]
       expect(entries).to.include("Si Me Advertí");  // [11, 11, 09, 07]  [09, 09, 11, 11]

                                                      // [11, 11, 11, 07]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");        // [11, 11, 10, 07]  [06, 07, 11, 13]
     },
   ],

   // POSITION 12
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Man! I Feel Like A Woman", "Higher", "That's The Way It Is", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Si Me Advertí");
       expect(entries).to.include("Man! I Feel Like A Woman");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },

     function (entries) { // Man! I Feel Like A Woman
       expect(entries.length).to.equal(3);
                                                       // [12, 12, 12, 18]  [**, **, 11, 07]
       expect(entries).to.include("Fly Away");        // [12, 12, 11, 18]  [**, **, 12, 07]

                                                       // [12, 12, 12, 18]  [05, 10, 13, 16]
       expect(entries).to.include("Puente");          // [12, 12, 13, 18]  [05, 10, 12, 16]

                                                       // [12, 12, 12, 18]  [**, 16, 14, 10]
       expect(entries).to.include("All Or Nothing");  // [12, 12, 14, 18]  [**, 16, 12, 10]
     },
   ],

   // POSITION 13
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "New", "Someday", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Puente", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "Puente", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Puente");
     },

     function (entries) { // Puente
       expect(entries.length).to.equal(2);
                                                        // [13, 13, 13, 16]  [**, 16, 14, 10] 
       expect(entries).to.include("All Or Nothing");   // [13, 13, 14, 16]  [**, 16, 13, 10]

                                                        // [13, 13, 13, 16]  [10, 10, 15, **]
       expect(entries).to.include("No Quiero Verte");  // [13, 13, 15, 16]  [10, 10, 13, **]
     },
   ],

   // POSITION 14
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "All Or Nothing", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All Or Nothing", "All I Have To Give", "Dreams In Digital", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Si Me Advertí");
       expect(entries).to.include("All Or Nothing");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },

     function (entries) { // All Or Nothing
       expect(entries.length).to.equal(3);
                                                                 // [14, 14, 14, 10]  [**, **, 11, 07]
       expect(entries).to.include("Fly Away");                  // [14, 14, 11, 10]  [**, **, 14, 07]

                                                                 // [14, 14, 14, 10]  [05, 10, 13, 16]
       expect(entries).to.include("Puente");                    // [14, 14, 13, 10]  [05, 10, 14, 16]

                                                                 // [14, 14, 14, 10]  [15, 12, 12, 18]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [14, 14, 12, 10]  [15, 12, 14, 18]
     },
   ],

   // POSITION 15
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "No Quiero Verte", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "No Quiero Verte", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Si Me Advertí");
       expect(entries).to.include("No Quiero Verte");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },

     function (entries) { // No Quiero Verte
       expect(entries.length).to.equal(4);
                                                              // [15, 15, 15, **]  [10, 13, 18, **]
       expect(entries).to.include("All I Have To Give");     // [15, 15, 18, **]  [10, 13, 15, **]

                                                              // [15, 15, 15, **]  [16, 12, 19, **]
       expect(entries).to.include("Don't Say You Love Me");  // [15, 15, 19, **]  [16, 12, 15, **]

                                                              // [15, 15, 15, **]  [**, **, 16, 14]
       expect(entries).to.include("Super Trouper");          // [15, 15, 16, **]  [**, **, 15, 14]

                                                              // [15, 15, 15, **]  [17, 14, 20, 20]
       expect(entries).to.include("Dreams In Digital");      // [15, 15, 20, **]  [17, 14, 15, 20]
     },
   ],

   // POSITION 16
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Super Trouper", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "Super Trouper", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Si Me Advertí");
       expect(entries).to.include("Super Trouper");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },

     function (entries) { // Super Trouper
       expect(entries.length).to.equal(2);
                                                        // [16, 16, 16, 14]  [11, 11, 15, **]
       expect(entries).to.include("No Quiero Verte");  // [16, 16, 15, 14]  [11, 11, 16, **]

                                                        // [16, 16, 16, 14]  [**, 17, 14, 10]
       expect(entries).to.include("All Or Nothing");   // [16, 16, 14, 14]  [**, 17, 16, 10]
     },
   ],

   // POSITION 17
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "As Fast As You Can", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "As Fast As You Can", "Higher", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],

   // POSITION 18
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "All I Have To Give", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "All I Have To Give", "If Ya Gettin' Down", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Si Me Advertí");
       expect(entries).to.include("All I Have To Give");
     },

     function (entries) { // All I Have To Give
       expect(entries.length).to.equal(2);
                                                              // [18, 18, 18, **]  [15, 13, 19, **]
       expect(entries).to.include("Don't Say You Love Me");  // [18, 18, 19, **]  [15, 13, 18, **]

                                                              // [18, 18, 18, **]  [16, 14, 20, 20]
       expect(entries).to.include("Dreams In Digital");      // [18, 18, 20, **]  [16, 14, 18, 20]
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],

   // POSITION 19
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "Don't Say You Love Me", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "Don't Say You Love Me", "When You're Gone"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Si Me Advertí");
       expect(entries).to.include("Don't Say You Love Me");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },

     function (entries) { // Don't Say You Love Me
       expect(entries.length).to.equal(1);
                                                           // [19, 19, 19, **]  [10, 13, 18, **]
       expect(entries[0]).to.equal("All I Have To Give");  // [19, 19, 18, **]  [10, 13, 19, **]
     },
   ],

   // POSITION 20
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can", "Dreams In Digital"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                    // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                    // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],
  ];

  runTests(9, testCharts, 3, tests);
}
    
// WEEK 8
{
  const tests = [
    // POSITION 1
    [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Unpretty"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("New");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]    [08, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]    [08, 05, 06, 06]

                                                            // [06, 06, 06, 09]    [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]    [**, 11, 06, 02]

                                                            // [06, 06, 06, 09]    [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]    [**, 08, 06, 05]
     },
    ],

   // POSITION 2
   [
     new Chart("All Star", "Mi Chico Latino", "Angels", "I Need To Know", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Mi Chico Latino", "Angels", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("Mi Chico Latino");
       expect(entries).to.include("Angels");
       expect(entries).to.include("New");
     },

     function (entries) { // Angels
       expect(entries.length).to.equal(1);
                                                // [03, 03, 03, 07]    [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");  // [03, 03, 07, 07]    [**, 11, 03, 02]
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]    [08, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]    [08, 05, 06, 06]

                                                            // [06, 06, 06, 09]    [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]    [**, 11, 06, 02]

                                                            // [06, 06, 06, 09]    [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]    [**, 08, 06, 05]
     },

     function (entries) { // Mi Chico Latino
       expect(entries.length).to.equal(1);
                                                // [02, 02, 02, 01]    [01, 01, 01, 03]
       expect(entries).to.include("All Star");  // [02, 02, 01, 01]    [01, 01, 02, 03]
     },
   ],

   // POSITION 3
   [
     new Chart("All Star", "I Need To Know", "Angels", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Mi Chico Latino", "Angels", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("Angels");
       expect(entries).to.include("New");
     },

     function (entries) { // Angels
       expect(entries.length).to.equal(1);
                                                // [03, 03, 03, 07]    [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");  // [03, 03, 07, 07]    [**, 11, 03, 02]
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]    [08, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]    [08, 05, 06, 06]

                                                            // [06, 06, 06, 09]    [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]    [**, 11, 06, 02]

                                                            // [06, 06, 06, 09]    [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]    [**, 08, 06, 05]
     },
   ],

    // POSITION 4
    [
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("New");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]    [08, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]    [08, 05, 06, 06]

                                                            // [06, 06, 06, 09]    [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]    [**, 11, 06, 02]

                                                            // [06, 06, 06, 09]    [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]    [**, 08, 06, 05]
     },
    ],

   // POSITION 5
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "That's The Way It Is", "Someday We'll Know", "New", "Someday", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("That's The Way It Is");
     },

     function (entries) { // That's The Way It Is
       expect(entries.length).to.equal(1);
                                           // [05, 05, 05, 06]    [07, 06, 06, 09]
       expect(entries).to.include("New");  // [05, 05, 06, 06]    [07, 06, 05, 09]
     },
   ],

   // POSITION 6
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("New");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [08, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [08, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 11, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },
   ],

   // POSITION 7
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Fly Away", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Fly Away", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("Fly Away");
     },

     function (entries) {  // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [09, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [09, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [07, 07, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [07, 07, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 09, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 09, 06, 05]
     },

     function (entries) { // Fly Away
       expect(entries.length).to.equal(2);
                                              // [07, 07, 07, 02]  [06, 06, 06, 09]
       expect(entries).to.include("New");     // [07, 07, 06, 02]  [06, 06, 07, 09]

                                              // [07, 07, 07, 02]  [02, 02, 03, 07]
       expect(entries).to.include("Angels");  // [07, 07, 03, 02]  [02, 02, 07, 07]
     },
   ],

   // POSITION 8
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "Maria Maria", "Si Me Advertí", "That's The Way It Is", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("Maria Maria");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [10, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [10, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 11, 06, 02]

                                                            // [06, 06, 06, 09]  [08, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [08, 08, 06, 05]
     },

     function (entries) { // Maria Maria
       expect(entries.length).to.equal(2);
                                                // [08, 08, 08, 05]  [**, 11, 07, 02]
       expect(entries).to.include("Fly Away");  // [08, 08, 07, 05]  [**, 11, 08, 02]

                                                // [08, 08, 08, 05]  [06, 06, 06, 09]
       expect(entries).to.include("New");       // [08, 08, 06, 05]  [06, 06, 08, 09]
     },
   ],

   // POSITION 9
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Someday We'll Know", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Si Me Advertí", "Maria Maria", "Someday We'll Know", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include("Someday We'll Know");
     },

     function (entries) { // Someday We'll Know
       expect(entries.length).to.equal(2);
                                                      // [09, 09, 09, 14]  [16, 14, 10, 08]
       expect(entries).to.include("All Or Nothing");  // [09, 09, 10, 14]  [16, 14, 09, 08]

                                                     // [09, 09, 09, 14]  [08, 07, 11, 17]
       expect(entries).to.include("Si Me Advertí");  // [09, 09, 11, 14]  [08, 07, 09, 17]
     },
   ],
    
   // POSITION 10
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "All Or Nothing", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "All Or Nothing", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("All Or Nothing");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [08, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [08, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 12, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 12, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // All Or Nothing
       expect(entries.length).to.equal(1);
                                                            // [10, 10, 10, 08]  [05, 07, 09, 14]
       expect(entries).to.include("Someday We'll Know");    // [10, 10, 09, 08]  [05, 07, 10, 14]
     },
   ],
    
   // POSITION 11
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Puente", "No Quiero Verte", "Si Me Advertí", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Someday", "Fly Away", "Si Me Advertí", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("Si Me Advertí");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [08, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [08, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]

     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(1);
                                                          // [11, 11, 11, 17]  [07, 09, 13, 15]
       expect(entries).to.include("Someday");             // [11, 11, 13, 17]  [07, 09, 11, 15]
     },
   ],

   // POSITION 12
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Tengo Frío", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Tengo Frío", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("Tengo Frío");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [08, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [08, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 11, 07, 02]   
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 11, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // Tengo Frío
       expect(entries.length).to.equal(2);
                                                      // [12, 12, 12, 10]  [09, 09, 11, 17]
       expect(entries).to.include("Si Me Advertí");   // [12, 12, 11, 10]  [09, 09, 12, 17]

                                                      // [12, 12, 12, 10]  [17, 15, 10, 08]
       expect(entries).to.include("All Or Nothing");  // [12, 12, 10, 10]  [17, 15, 12, 08]
     },
   ],

   // POSITION 13
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "Someday", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Fly Away", "Man! I Feel Like A Woman", "Puente", "Someday", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("Someday");
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(2);
                                                       // [13, 13, 13, 15]  [**, 16, 14, 12]
       expect(entries).to.include("Super Trouper");    // [13, 13, 14, 15]  [**, 16, 13, 12]

                                                       // [13, 13, 13, 15]  [**, **, 15, 11] 
       expect(entries).to.include("T.V. And Coffee");  // [13, 13, 15, 15]  [**, **, 13, 11]
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },
   ],

   // POSITION 14
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "Super Trouper", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "Super Trouper", "All Or Nothing", "No Quiero Verte", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("Super Trouper");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // Super Trouper
       expect(entries.length).to.equal(2);
                                                  // [14, 14, 14, 12]  [07, 10, 13, 15]
       expect(entries).to.include("Someday");     // [14, 14, 13, 12]  [07, 10, 14, 15]

                                                  // [14, 14, 14, 12]  [**, **, 12, 10]
       expect(entries).to.include("Tengo Frío");  // [14, 14, 12, 12]  [**, **, 14, 10]
     },
   ],

   // POSITION 15
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "T.V. And Coffee", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "T.V. And Coffee", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("T.V. And Coffee");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // T.V. And Coffee
       expect(entries.length).to.equal(4);
                                                     // [15, 15, 15, 11]  [**, 17, 14, 12]
       expect(entries).to.include("Super Trouper");  // [15, 15, 14, 11]  [**, 17, 15, 12]

                                                     // [15, 15, 15, 11]  [07, 10, 13, 15]
       expect(entries).to.include("Someday");        // [15, 15, 13, 11]  [07, 10, 15, 15]
                                                     // NOTE: SHOULD WE FAVOUR THIS BELOW?
                                                     // [15, 15, 15, 11]  [**, **, 12, 10]
       expect(entries).to.include("Tengo Frío");     // [15, 15, 12, 11]  [**, **, 15, 10]

                                                     // [15, 15, 15, 11]  [09, 09, 11, 17]
       expect(entries).to.include("Si Me Advertí");  // [15, 15, 11, 11]  [09, 09, 15, 17]
     },
   ],

   // POSITION 16
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Puente", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "All Or Nothing", "No Quiero Verte", "Super Trouper", "Puente", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("Puente");
     },

     function (entries) { // Puente
       expect(entries.length).to.equal(2);
                                                                // [16, 16, 16, **]  [18, 17, 17, **]
       expect(entries).to.include("As Fast As You Can");        // [16, 16, 17, **]  [18, 17, 16, **]

                                                                // [16, 16, 16, **]  [11, 12, 18, **]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [16, 16, 18, **]  [11, 12, 16, **]
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },
   ],

   // POSITION 17
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "As Fast As You Can", "Higher", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("As Fast As You Can");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // As Fast As You Can
       expect(entries.length).to.equal(1);
                                              // [17, 17, 17, **]  [10, 13, 16, **]
       expect(entries).to.include("Puente");  // [17, 17, 16, **]  [10, 13, 17, **]
     },
   ],

   // POSITION 18
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "When You're Gone"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "All I Have To Give", "As Fast As You Can", "Man! I Feel Like A Woman", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("New");
       expect(entries).to.include("As Fast As You Can");
       expect(entries).to.include("Man! I Feel Like A Woman");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // Man! I Feel Like A Woman
       expect(entries.length).to.equal(1);
                                                         // [18, 18, 18, **]  [**, **, 19, 18]
       expect(entries).to.include("Díselo Con Flores");  // [18, 18, 19, **]  [**, **, 18, 18]
     },

     function (entries) { // As Fast As You Can
       expect(entries.length).to.equal(1);
                                              // [17, 17, 17, **]  [10, 12, 16, **]
       expect(entries).to.include("Puente");  // [17, 17, 16, **]  [10, 12, 17, **]
     },
   ],

   // POSITION 19
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "Díselo Con Flores", "If Ya Gettin' Down"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Díselo Con Flores", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include("New");
       expect(entries).to.include("Díselo Con Flores");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // Díselo Con Flores
       expect(entries.length).to.equal(1);
                                                                // [19, 19, 19, 18]  [12, 12, 18, **]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [19, 19, 18, 18]  [12, 12, 19, **]
     },
   ],

   // POSITION 20
   [
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone", "Dreams In Digital"),
     new Chart("All Star", "Angels", "Mi Chico Latino", "I Need To Know", "That's The Way It Is", "New", "Someday We'll Know", "Maria Maria", "Si Me Advertí", "Someday", "Fly Away", "Man! I Feel Like A Woman", "Puente", "All Or Nothing", "No Quiero Verte", "Super Trouper", "As Fast As You Can", "All I Have To Give", "Don't Say You Love Me", "Dreams In Digital"),

     function (entries) {
       expect(entries.length).to.equal(3);
       expect(entries).to.include("New");
       expect(entries).to.include("As Fast As You Can");
       expect(entries).to.include("Dreams In Digital");
     },

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // As Fast As You Can
       expect(entries.length).to.equal(1);
                                              // [17, 17, 17, **]  [10, 13, 16, **]
       expect(entries).to.include("Puente");  // [17, 17, 16, **]  [10, 13, 17, **]

     },

     function (entries) { // Dreams In Digital
       expect(entries.length).to.equal(0);
     },
   ],
  ];

  runTests(10, testCharts, 3, tests);
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
//         expect(entries.length).to.equal(1);                NOTE:   // I Need To Know    That's The Way It Is
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },
    ],

    // POSITION 13
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', "I Don't Want To Miss A Thing", 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me"),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', "I Don't Want To Miss A Thing", 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores'),

      function (entries) {
       expect(entries.length).to.equal(1);
       expect(entries).to.include('I Need To Know');
      },

      function (entries) {  // I Need To Know
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },
    ],

    // POSITION 14
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', 'Si Me Advertí', 'Maria Maria', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', "Someday We'll Know", 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', "Someday We'll Know", 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('Someday We\'ll Know');
      },

      function (entries) {  // I Need To Know
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // Someday We'll Know
        expect(entries.length).to.equal(3);
                                                      // [14, 14, 14, **]  [09, 12, 15, **]
        expect(entries).to.include('Someday');        // [14, 14, 14, **]  [09, 12, 14, **]

                                                      // [14, 14, 14, **]  [**, **, 16, 11]
        expect(entries).to.include('Crazy');          // [14, 14, 16, **]  [**, **, 14, 11]

                                                      // [14, 14, 14, **]  [07, 10, 17, **]
        expect(entries).to.include('Si Me Advertí');  // [14, 14, 17, **]  [07, 10, 14, **]        
      },
    ],

    // POSITION 15
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Someday', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Super Trouper', 'T.V. And Coffee', 'Someday', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('Someday');
      },

      function (entries) {  // I Need To Know
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // Someday
        expect(entries.length).to.equal(3);
                                                          // [15, 15, 15, **]  [**, **, 16, 11]
        expect(entries).to.include('Crazy');              // [15, 15, 16, **]  [**, **, 15, 11]

                                                          // [15, 15, 15, **]  [09, 11, 17, **]
        expect(entries).to.include('Si Me Advertí');      // [15, 15, 17, **]  [09, 11, 15, **]

                                                          // [15, 15, 15, **]  [**, 19, 18, 15]
        expect(entries).to.include('Díselo Con Flores');  // [15, 15, 18, **]  [**, 19, 15, 15]        
      },
    ],

    // POSITION 16
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Crazy', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me"),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Crazy', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('Crazy');
      },

      function (entries) {  // I Need To Know
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // Crazy
        expect(entries.length).to.equal(3);
                                                                      // [16, 16, 16, 11]  [10, 13, 15, **]
        expect(entries).to.include('Someday');                        // [16, 16, 15, 11]  [10, 13, 16, **]

                                                                      // [16, 16, 16, 11]  [07, 09, 14, **]
        expect(entries).to.include('Someday We\'ll Know');            // [16, 16, 14, 11]  [07, 09, 16, **]

                                                                      // [16, 16, 16, 11]  [**, **, 13, 13]
        expect(entries).to.include('I Don\'t Want To Miss A Thing');  // [16, 16, 13, 11]  [**, **, 16, 13]
      },
    ],

    // POSITION 17
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'Si Me Advertí', 'All I Have To Give', "Don't Say You Love Me", 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Si Me Advertí', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('Si Me Advertí');
      },

      function (entries) {  // I Need To Know
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // Si Me Advertí
        expect(entries.length).to.equal(2);
                                                          // [17, 17, 17, **]  [**, 19, 18, 15]
        expect(entries).to.include('Díselo Con Flores');  // [17, 17, 18, **]  [**, 19, 17, 15]

                                                          // [17, 17, 17, **]  [**, **, 20, 17]
        expect(entries).to.include('Unpretty');           // [17, 17, 20, **]  [**, **, 17, 17]
      },
    ],

    // POSITION 18
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'Díselo Con Flores', 'All I Have To Give', 'Dreams In Digital'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Díselo Con Flores', 'Man! I Feel Like A Woman', 'Dreams In Digital'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('Díselo Con Flores');
      },

      function (entries) {  // I Need To Know
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // Díselo Con Flores
        expect(entries.length).to.equal(3);
                                                      // [18, 18, 18, 15]  [09, 11, 17, **]
        expect(entries).to.include('Si Me Advertí');  // [18, 18, 17, 15]  [09, 11, 18, **]

                                                      // [18, 18, 18, 15]  [**, **, 16, 11]
        expect(entries).to.include('Crazy');          // [18, 18, 16, 15]  [**, **, 18, 11]
        
                                                     // [18, 18, 18, 15]  [10, 13, 15, **]
        expect(entries).to.include('Someday');       // [18, 18, 15, 15]  [10, 13, 18, **]        
      },
    ],

    // POSITION 19
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Keep On Movin'", "Don't Say You Love Me"),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', "Keep On Movin'", 'Díselo Con Flores'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('Keep On Movin\'');
      },

      function (entries) {  // I Need To Know
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // Keep On Movin'
        expect(entries.length).to.equal(1);
                                                          // [19, 19, 19, 18]  [**, 20, 18, 15]
        expect(entries).to.include('Díselo Con Flores');  // [18, 19, 18, 18]  [**, 20, 19, 15]
      },
    ],

    // POSITION 20
    [
      new Chart('All Star', 'Angels', 'Mi Chico Latino', 'I Need To Know', "That's The Way It Is", 'New', "Someday We'll Know", 'Maria Maria', 'Si Me Advertí', 'Someday', 'Fly Away', 'Man! I Feel Like A Woman', 'Puente', 'All Or Nothing', 'No Quiero Verte', 'Super Trouper', 'As Fast As You Can', 'All I Have To Give', "Don't Say You Love Me", 'Unpretty'),
      new Chart('All Star', 'Mi Chico Latino', 'Angels', 'I Need To Know', "That's The Way It Is", 'New', 'Fly Away', 'Maria Maria', "Someday We'll Know", 'All Or Nothing', 'Si Me Advertí', 'Tengo Frío', 'Someday', 'Super Trouper', 'T.V. And Coffee', 'Puente', 'As Fast As You Can', 'Man! I Feel Like A Woman', 'Díselo Con Flores', 'Unpretty'),

      function (entries) {
       expect(entries.length).to.equal(2);
       expect(entries).to.include('I Need To Know');
       expect(entries).to.include('Unpretty');
      },

      function (entries) {  // I Need To Know
//         expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
//         expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
      },

      function (entries) {  // Unpretty
        expect(entries.length).to.equal(2);
                                                        // [20, 20, 20, 17]  [**, **, 19, 18]
        expect(entries).to.include('Keep On Movin\'');  // [20, 20, 19, 17]  [**, **, 20, 18]

                                                        // [20, 20, 20, 17]  [09, 11, 17, **]
        expect(entries).to.include('Si Me Advertí');    // [20, 20, 17, 17]  [09, 11, 20, **]
      },
    ],
  ];

  runTests(11, testCharts, 3, tests);
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
