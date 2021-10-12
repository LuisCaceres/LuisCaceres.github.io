// WEEK 2
{
  const tests = [
   // POSITION 1
   [
     new Chart("All Star", "I Need To Know", "Angels", "Someday We'll Know", "Puente", "Someday", "New", "Mi Chico Latino", "Si Me Advertí", "All I Have To Give", "No Quiero Verte", "Higher", "That's The Way It Is", "Man! I Feel Like A Woman", "If Ya Gettin' Down", "Don't Say You Love Me", "Dreams In Digital", "The Kids Aren't Alright", "When You're Gone", "As Fast As You Can"),
     new Chart("All Star", "Angels", "I Need To Know", "Mi Chico Latino", "Someday We'll Know", "New", "Someday", "That's The Way It Is", "Si Me Advertí", "Puente", "No Quiero Verte", "Man! I Feel Like A Woman", "Don't Say You Love Me", "All I Have To Give", "Dreams In Digital", "All Or Nothing", "Higher", "As Fast As You Can", "If Ya Gettin' Down", "When You're Gone"),

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
       
                                                       // [09, 09, 09, 11]  [06, 07, 10, 13]
       expect(entries[1]).to.equal("Angels");          // [09, 09, 10, 11]  [06, 07, 09, 13]
     },
   ],
  ];
}

