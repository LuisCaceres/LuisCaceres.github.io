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

     function (entries) { // Mi Chico Latino
       expect(entries.length).to.equal(1);
                                              // [03, 03, 03, 02]  [04, 02, 02, 03]
       expect(entries).to.include("Angels");  // [03, 03, 02, 02]  [04, 02, 03, 03]
     },

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                   // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]
       
                                                   // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
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
       expect(entries).to.include("Mi Chico Latino");  // [02, 02, 03, 03]  [08, 03, 02, 02]
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
       expect(entries).to.include("Puente");                    // [10, 10, 13, 13]  [05, 09, 10, 16]
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

                                                   // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]

                                                   // [09, 09, 09, 11]  [11, 11, 11, 07]
       expect(entries).to.include("Fly Away");     // [09, 09, 11, 11]  [11, 11, 09, 07]
     },

     function (entries) { // Fly Away
       expect(entries.length).to.equal(3);
                                                     // [11, 11, 11, 07]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");        // [11, 11, 10, 07]  [06, 07, 11, 13]

                                                     // [11, 11, 11, 07]  [09, 09, 09, 11]
       expect(entries).to.include("Si Me Advertí");  // [11, 11, 09, 07]  [09, 09, 11, 11]
                                                                          // LOOK AT THE BELOW
                                                     // [11, 11, 11, 07]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");    // [11, 11, 08, 07]  [**, **, 11, 08]
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
                                                                // [14, 14, 14, 10]  [05, 10, 13, 16]
       expect(entries).to.include("Puente");                    // [14, 14, 13, 10]  [05, 10, 14, 16]

                                                                // [14, 14, 14, 10]  [15, 12, 12, 18]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [14, 14, 12, 10]  [15, 12, 14, 18]

                                                                // [14, 14, 14, 10]  [**, **, 11, 07]
       expect(entries).to.include("Fly Away");                  // [14, 14, 11, 10]  [**, **, 14, 07]
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
                                                             // [15, 15, 15, **]  [**, **, 16, 14]
       expect(entries).to.include("Super Trouper");          // [15, 15, 16, **]  [**, **, 15, 14]

                                                             // [15, 15, 15, **]  [10, 13, 18, **]
       expect(entries).to.include("All I Have To Give");     // [15, 15, 18, **]  [10, 13, 15, **]

                                                             // [15, 15, 15, **]  [16, 12, 19, **]
       expect(entries).to.include("Don't Say You Love Me");  // [15, 15, 19, **]  [16, 12, 15, **]

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

     function (entries) { // Si Me Advertí
       expect(entries.length).to.equal(2);
                                                   // [09, 09, 09, 11]  [**, **, 08, 08]
       expect(entries).to.include("Maria Maria");  // [09, 09, 08, 11]  [**, **, 09, 08]

                                                   // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries).to.include("Someday");      // [09, 09, 10, 11]  [06, 07, 09, 13]
     },

     function (entries) { // All I Have To Give
       expect(entries.length).to.equal(2);
                                                             // [18, 18, 18, **]  [15, 13, 19, **]
       expect(entries).to.include("Don't Say You Love Me");  // [18, 18, 19, **]  [15, 13, 18, **]

                                                             // [18, 18, 18, **]  [16, 14, 20, 20]
       expect(entries).to.include("Dreams In Digital");      // [18, 18, 20, **]  [16, 14, 18, 20]
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
       expect(entries).to.include("All I Have To Give");  // [19, 19, 18, **]  [10, 13, 19, **]
     },
   ],

// AAAAA
  ];

  runTests(9, charts, 3, tests);
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

     function (entries) { // Mi Chico Latino
       expect(entries.length).to.equal(1);
                                                // [02, 02, 02, 01]    [01, 01, 01, 03]
       expect(entries).to.include("All Star");  // [02, 02, 01, 01]    [01, 01, 02, 03]
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

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // Someday
       expect(entries.length).to.equal(2);
                                                       // [13, 13, 13, 15]  [**, 16, 14, 12]
       expect(entries).to.include("Super Trouper");    // [13, 13, 14, 15]  [**, 16, 13, 12]

                                                       // [13, 13, 13, 15]  [**, **, 15, 11] 
       expect(entries).to.include("T.V. And Coffee");  // [13, 13, 15, 15]  [**, **, 13, 11]
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

     function (entries) { // New
       expect(entries.length).to.equal(3);
                                                            // [06, 06, 06, 09]  [07, 05, 05, 06]
       expect(entries).to.include("That's The Way It Is");  // [06, 06, 05, 09]  [07, 05, 06, 06]

                                                            // [06, 06, 06, 09]  [**, 10, 07, 02]
       expect(entries).to.include("Fly Away");              // [06, 06, 07, 09]  [**, 10, 06, 02]

                                                            // [06, 06, 06, 09]  [**, 08, 08, 05]
       expect(entries).to.include("Maria Maria");           // [06, 06, 08, 09]  [**, 08, 06, 05]
     },

     function (entries) { // Puente
       expect(entries.length).to.equal(2);
                                                                // [16, 16, 16, **]  [18, 17, 17, **]
       expect(entries).to.include("As Fast As You Can");        // [16, 16, 17, **]  [18, 17, 16, **]

                                                                // [16, 16, 16, **]  [11, 12, 18, **]
       expect(entries).to.include("Man! I Feel Like A Woman");  // [16, 16, 18, **]  [11, 12, 16, **]
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

     function (entries) { // As Fast As You Can
       expect(entries.length).to.equal(1);
                                              // [17, 17, 17, **]  [10, 12, 16, **]
       expect(entries).to.include("Puente");  // [17, 17, 16, **]  [10, 12, 17, **]
     },

     function (entries) { // Man! I Feel Like A Woman
       expect(entries.length).to.equal(1);
                                                         // [18, 18, 18, **]  [**, **, 19, 18]
       expect(entries).to.include("Díselo Con Flores");  // [18, 18, 19, **]  [**, **, 18, 18]
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

  runTests(10, charts, 3, tests);
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
        expect(entries.length).to.equal(1);                   // I Need To Know    That's The Way It Is
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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
        expect(entries.length).to.equal(1);                   // [04, 04, 04, 06]  [05, 05, 06, 09]
        expect(entries).to.include('That\'s The Way It Is');  // [04, 04, 06, 06]  [05, 05, 04, 09]
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

  runTests(11, charts, 3, tests);
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
