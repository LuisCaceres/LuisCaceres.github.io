/* The number of debuts on the first 10 charts is higher than expected. For that reason, the following piece of code
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


function foo(previousChart, currentChart, database) {
    // Get any chart entries that start to descend in the current chart.
    const chevrons = new List(...new Set(previousChart.concat(...currentChart)))
    .filter(entry => database.get(entry).hasStartedDescending());
         
    if (!chevrons.length) {
        return;
    }

    chevrons.shuffle();

    for (const chevron of chevrons) {
        // Are there any debuts in the same position or in a higher position than `chevron`'s position in the previous chart?
        const debuts = previousChart.difference(currentChart)
        .filter(debut => currentChart.positionOf(debut) <= previousChart.positionOf(chevron));

        const condition1 = debuts.length > 0;

        if (!condition1) {
            continue;
        }

        // Are there any titles that dropped out of the chart this week from the same position or higher position than `chevron`'s current position in the current chart?
        const dropouts = currentChart.difference(previousChart)
        .filter(dropout => dropout !== chevron)
        .filter(dropout => previousChart.positionOf(dropout) <= currentChart.positionOf(chevron));

        const condition2 = dropouts.length > 0;

        if (!condition2) {
            continue;
        }

        const debut = debuts.random();
        const dropout = dropouts.random();

        const position1 = currentChart.positionOf(debut); 
        const position2 = currentChart.positionOf(chevron) 
      
        // If so, delete `debut` and place `chevron`'s in `debut`'s position. 
        currentChart[position1 - 1] = chevron;
        // Place `dropout` in `chevron`'s former position.
        currentChart[position2 - 1] = dropout;
        
        currentChart.length = 20;
    }
}

{ // SOLVED BUT FURTHER IMPROVEMENTS RECOMMENDED
  const chart1 = new Chart("Savage Garden - The Animal Song", "Semisonic - Secret Smile", "The Offspring - Why Don’t You Get A Job", "The Cranberries - Promises", "Blur - Tender", "Control Machete - Si Señor", "KoRn - Freak on a Leash", "Sugar Ray - Every Morning", "Everlast - What It’s Like", "Gus Gus - Ladyshave", "The Cardigans - Erase/Rewind", "El Tri - Todo Me Sale Mal", "Roxette - Wish I Could Fly", "Metallica - Whiskey in a Jar", "Blondie - Maria", "Eminem - My Name Is", "Backstreet Boys - I Want It That Way", "Marilyn Manson - Rock Is Dead", "U.N.K.L.E. con Ian Brown - Be There", "Ricky Martin - Livin’ La Vida Loca");
  const chart2 = new Chart("Semisonic - Secret Smile", "Savage Garden - The Animal Song", "The Offspring - Why Don’t You Get A Job", "Blur - Tender", "KoRn - Freak on a Leash", "The Cranberries - Promises", "Control Machete - Si Señor", "Backstreet Boys - I Want It That Way", "Metallica - Whiskey in a Jar", "Gus Gus - Ladyshave", "Everlast - What It’s Like", "Sugar Ray - Every Morning", "Ricky Martin - Livin’ La Vida Loca", "The Cardigans - Erase/Rewind", "Marilyn Manson - Rock Is Dead", "Eminem - My Name Is", "Blondie - Maria", "U.N.K.L.E. con Ian Brown - Be There", "Texas - In Our Lifetime", "Underworld - Push Upstairs");
  const chart3 = new Chart("Semisonic - Secret Smile", "Savage Garden - The Animal Song", "Backstreet Boys - I Want It That Way", "Blur - Tender", "Jamiroquai - Canned Heat", "KoRn - Freak on a Leash", "Metallica - Whiskey in a Jar", "Control Machete - Si Señor", "Gus Gus - Ladyshave", "The Offspring - Why Don’t You Get A Job", "Ricky Martin - Livin’ La Vida Loca", "Marilyn Manson - Rock Is Dead", "The Cranberries - Promises", "Sugar Ray - Every Morning", "U.N.K.L.E. con Ian Brown - Be There", "Underworld - Push Upstairs", "Eminem - My Name Is", "Texas - In Our Lifetime", "Jumbo - Monotransistor", "Bersuit Vergarabat - Sr. Cobranza");

  const database = createDatabase(chart1, chart2, chart3);

  foo(chart2, chart3, database);

  expect(chart3.length).to.equal(20);
  expect(chart3.at(5)).to.equal("Eminem - My Name Is");
  expect(chart3.at(17)).not.to.equal("Eminem - My Name Is");
  expect(["Everlast - What It’s Like", "The Cardigans - Erase/Rewind", "Blondie - Maria"]).to.include(chart3.at(17));
  expect(chart3).not.to.include("Jamiroquai - Canned Heat");
}

{ // SOLVED
  const chart1 = new Chart("Lou Bega - Mambo #5", "Britney Spears - Sometimes", "Backstreet Boys - Larger Than Life", "Moenia - Manto Estelar", "James - I Know What I'm Here For", "Ricky Martin - Bella", "Maná - Te Solté la Rienda (Unplugged)", "Jaguares - Fin", "The Cranberries - Animal Instinct", "Christina Aguilera - Genie in a Bottle", "Jumbo - Siento Que", "Molotov - Parásito", "Luis Miguel - O Tú, O Ninguna", "Limp Bizkit - Nookie", "Santana con Rob Thomas - Smooth", "Azul Violeta - Quiere Más", "Madonna - Beautiful Stranger", "Jamiroquai - Supersonic", "Chris Cornell - Can't Change Me", "The Cranberries - Just My Imagination");
  const chart2 = new Chart("Britney Spears - Sometimes", "Backstreet Boys - Larger Than Life", "Lou Bega - Mambo #5", "James - I Know What I'm Here For", "Maná - Te Solté la Rienda (Unplugged)", "Ricky Martin - Bella", "Christina Aguilera - Genie in a Bottle", "Luis Miguel - O Tú, O Ninguna", "Moenia - Manto Estelar", "Chris Cornell - Can't Change Me", "Molotov - Parásito", "Jaguares - Fin", "Jumbo - Siento Que", "Azul Violeta - Quiere Más", "Jamiroquai - Supersonic", "Santana con Rob Thomas - Smooth", "The Cranberries - Just My Imagination", "Gustavo Cerati - Puente", "Foo Fighters - Learn to Fly", "Illya Kuryaki & The Valderramas - Coolo");
  const chart3 = new Chart("Backstreet Boys - Larger Than Life", "James - I Know What I'm Here For", "Lou Bega - Mambo #5", "Christina Aguilera - Genie in a Bottle", "Britney Spears - Sometimes", "Luis Miguel - O Tú, O Ninguna", "Maná - Te Solté la Rienda (Unplugged)", "Ricky Martin - Bella", "Chris Cornell - Can't Change Me", "Molotov - Parásito", "Enrique Iglesias - Rhythm Divine", "Jamiroquai - Supersonic", "Jaguares - Fin", "Moenia - Manto Estelar", "The Cranberries - Just My Imagination", "Santana con Rob Thomas - Smooth", "Gustavo Cerati - Puente", "Foo Fighters - Learn to Fly", "Illya Kuryaki & The Valderramas - Coolo", "Limp Bizkit - Rearranged");

  const database = createDatabase(chart1, chart2, chart3);

  foo(chart2, chart3, database);

  expect(chart3.length).to.equal(20);
  expect(chart3.at(11)).to.equal("Azul Violeta - Quiere Más");
  expect(chart3).not.to.include("Enrique Iglesias - Rhythm Divine");
}

{ // UNRESOLVED
  const chart1 = new Chart("Bon Jovi - It’s My Life", "Madonna - Music", "Moby - Porcelain", "La Ley - Fuera de Mí", "Britney Spears - Lucky", "Bloodhound Gang - The Bad Touch", "Plastilina Mosh - Human Disco Ball", "Travis - Why Does It Always Rain On Me?", "Kabah - Antro", "Eminem - The Real Slim Shady", "Five - We Will Rock You", "Saúl Hernández - Deslizándote", "Savage Garden - Affirmation", "Limp Bizkit - Take A Look Around", "Whitney Houston / Enrique Iglesias - Could I Have This Kiss Forever?", "The Corrs - Breathless", "Westlife - Fool Again", "Blink 182 - Adam's Song", "Hanson - This Time Around", "Matchbox Twenty - Bent");
  const chart2 = new Chart("Madonna - Music", "Bon Jovi - It’s My Life", "Britney Spears - Lucky", "Moby - Porcelain", "Eminem - The Real Slim Shady", "Savage Garden - Affirmation", "Bloodhound Gang - The Bad Touch", "Travis - Why Does It Always Rain On Me?", "Plastilina Mosh - Human Disco Ball", "La Ley - Fuera de Mí", "Kabah - Antro", "Five - We Will Rock You", "Saúl Hernández - Deslizándote", "Westlife - Fool Again", "Limp Bizkit - Take A Look Around", "The Corrs - Breathless", "Hanson - This Time Around", "Whitney Houston / Enrique Iglesias - Could I Have This Kiss Forever?", "Blink 182 - Adam's Song", "Thalía - Regresa A Mí");
  const chart3 = new Chart("Madonna - Music", "Britney Spears - Lucky", "Eminem - The Real Slim Shady", "Savage Garden - Affirmation", "Moby - Porcelain", "Bon Jovi - It’s My Life", "Bloodhound Gang - The Bad Touch", "Westlife - Fool Again", "Travis - Why Does It Always Rain On Me?", "Plastilina Mosh - Human Disco Ball", "Kabah - Antro", "Five - We Will Rock You", "La Ley - Fuera de Mí", "Hanson - This Time Around", "Saúl Hernández - Deslizándote", "Limp Bizkit - Take A Look Around", "*NSYNC - It's Gonna Be Me", "Thalía - Regresa A Mí", "The Corrs - Breathless", "Aqua - Bumble Bees");
  const chart4 = new Chart("Madonna - Music", "Britney Spears - Lucky", "Savage Garden - Affirmation", "Eminem - The Real Slim Shady", "Moby - Porcelain", "Westlife - Fool Again", "Bon Jovi - It’s My Life", "Bloodhound Gang - The Bad Touch", "Travis - Why Does It Always Rain On Me?", "*NSYNC - It's Gonna Be Me", "Plastilina Mosh - Human Disco Ball", "U2 - Beautiful Day", "Hanson - This Time Around", "Robbie Williams - Rock DJ", "Five - We Will Rock You", "Thalía - Regresa A Mí", "Christina Aguilera - Ven Conmigo", "Kabah - Antro", "Aqua - Bumble Bees", "La Ley - Fuera de Mí");

  const database = createDatabase(chart1, chart2, chart3, chart4);

  foo(chart3, chart4, database);

  expect(chart4.length).to.equal(20);
  expect(chart4.at(12)).to.equal("U2 - Beautiful Day");
}

{ // SOLVED BUT FURTHER IMPROVEMENTS RECOMMENDED
  const chart1 = new Chart("No Doubt - Hella Good", "Nelly Furtado - …On the Radio (Remember the Days)", "Moby - We Are All Made of Stars", "Juanes - A Dios le Pido", "Garbage - Breaking Up the Girl", "Paulina Rubio - Don't Say Goodbye", "P.O.D. - Youth of the Nation", "Eminem - Without Me", "Kabah - La Vida Que Va", "Korn - Here to Stay", "Britney Spears - I'm Not a Girl, Not Yet a Woman", "Shakira - Underneath Your Clothes", "Kylie Minogue - Can't Get You Out of My Head", "Darren Hayes - Insatiable", "System Of A Down - Toxicity", "Sophie Ellis Bextor - Murder On The Dance Floor", "The Calling - Wherever You Will Go", "Pink - Don't Let Me Get Me", "Box Car Racer - I Feel So", "Westlife - A World of Our Own");
  const chart2 = new Chart("No Doubt - Hella Good", "Moby - We Are All Made of Stars", "Nelly Furtado - …On the Radio (Remember the Days)", "Juanes - A Dios le Pido", "Paulina Rubio - Don't Say Goodbye", "Eminem - Without Me", "Garbage - Breaking Up the Girl", "Korn - Here to Stay", "Britney Spears - I'm Not a Girl, Not Yet a Woman", "P.O.D. - Youth of the Nation", "Kabah - La Vida Que Va", "Shakira - Underneath Your Clothes", "Pink - Don't Let Me Get Me", "The Calling - Wherever You Will Go", "Sophie Ellis Bextor - Murder On The Dance Floor", "Kylie Minogue - Can't Get You Out of My Head", "Box Car Racer - I Feel So", "Darren Hayes - Insatiable", "Westlife - Bop Bop Baby", "System Of A Down - Toxicity");
  const chart3 = new Chart("Moby - We Are All Made of Stars", "No Doubt - Hella Good", "Juanes - A Dios le Pido", "Paulina Rubio - Don't Say Goodbye", "Nelly Furtado - …On the Radio (Remember the Days)", "Eminem - Without Me", "Korn - Here to Stay", "Britney Spears - I'm Not a Girl, Not Yet a Woman", "Garbage - Breaking Up the Girl", "P.O.D. - Youth of the Nation", "Pink - Don't Let Me Get Me", "The Calling - Wherever You Will Go", "Kabah - La Vida Que Va", "Shakira - Underneath Your Clothes", "Sophie Ellis Bextor - Murder On The Dance Floor", "Westlife - Bop Bop Baby", "Box Car Racer - I Feel So", "Kylie Minogue - Can't Get You Out of My Head", "Red Hot Chili Peppers - By the Way", "Static-X - Cold");
  const chart4 = new Chart("Juanes - A Dios le Pido", "Moby - We Are All Made of Stars", "Paulina Rubio - Don't Say Goodbye", "Eminem - Without Me", "No Doubt - Hella Good", "Korn - Here to Stay", "Nelly Furtado - …On the Radio (Remember the Days)", "Pink - Don't Let Me Get Me", "The Calling - Wherever You Will Go", "P.O.D. - Youth of the Nation", "Garbage - Breaking Up the Girl", "Westlife - Bop Bop Baby", "Kabah - La Vida Que Va", "Red Hot Chili Peppers - By the Way", "Sophie Ellis Bextor - Murder On The Dance Floor", "Britney Spears - I'm Not a Girl, Not Yet a Woman", "Box Car Racer - I Feel So", "Shakira - Underneath Your Clothes", "Static-X - Cold", "Alanis Morissette - Precious Illusions");
  const chart5 = new Chart("Paulina Rubio - Don't Say Goodbye", "Eminem - Without Me", "Korn - Here to Stay", "Juanes - A Dios le Pido", "Moby - We Are All Made of Stars", "Westlife - Bop Bop Baby", "The Calling - Wherever You Will Go", "Pink - Don't Let Me Get Me", "Red Hot Chili Peppers - By the Way", "P.O.D. - Youth of the Nation", "Britney Spears - I Love Rock 'N Roll", "Papa Roach - She Loves Me Not", "Alanis Morissette - Precious Illusions", "Kelly Osbourne - Papa Don't Preach", "Garbage - Breaking Up the Girl", "Box Car Racer - I Feel So", "Nelly Furtado - …On the Radio (Remember the Days)", "Static-X - Cold", "Thalía - Tú y Yo", "Fey - Sé Lo Que Vendrá");

  const database = createDatabase(chart1, chart2, chart3, chart4, chart5);

  foo(chart4, chart5, database);

  expect(chart5.length).to.equal(20);
  expect(chart5).to.include("Sophie Ellis Bextor - Murder On The Dance Floor");
  expect([11, 12, 14]).to.include(chart5.positionOf("Sophie Ellis Bextor - Murder On The Dance Floor"));

  if (chart5.positionOf("Sophie Ellis Bextor - Murder On The Dance Floor") === 11) {
    expect(chart5).not.to.include("Britney Spears - I Love Rock 'N Roll");
  }
  else if (chart5.positionOf("Sophie Ellis Bextor - Murder On The Dance Floor") === 12) {
    expect(chart5).not.to.include("Papa Roach - She Loves Me Not");
  }
  else if (chart5.positionOf("Sophie Ellis Bextor - Murder On The Dance Floor") === 14) {
    expect(chart5).not.to.include("Kelly Osbourne - Papa Don't Preach");
  }
}

{ // MARCH 2023 ::::: SOLVED
  const chart1 = new Chart("Shakira - Que Me Quedes Tú", "Eminem - Lose Yourself", "Avril Lavigne - Sk8er Boi", "Westlife - Unbreakable", "Juanes - Es Por Tí", "Jennifer Lopez - Jenny from the Block", "Madonna - Die Another Day", "Nirvana - You Know You're Right", "Kelly Osbourne - Shut Up", "Robbie Williams - Feel", "Kylie Minogue - Come Into My World", "Foo Fighters - All My Life", "Christina Aguilera Redman - Dirrty", "Coldplay - The Scientist", "Crazy Town - Drowning", "Justin Timberlake - Cry Me A River", "Nick Carter - Do I Have to Cry for You?", "Missy - Misdemeanor Elliott - Work It", "t.A.T.u. - Not Gonna Get Us", "Molotov - Frijolero");
  const chart2 = new Chart("Eminem - Lose Yourself", "Shakira - Que Me Quedes Tú", "Avril Lavigne - Sk8er Boi", "Robbie Williams - Feel", "Kelly Osbourne - Shut Up", "Jennifer Lopez - Jenny from the Block", "Juanes - Es Por Tí", "Westlife - Unbreakable", "Madonna - Die Another Day", "Justin Timberlake - Cry Me A River", "t.A.T.u. - Not Gonna Get Us", "Nirvana - You Know You're Right", "Nick Carter - Do I Have to Cry for You?", "Crazy Town - Drowning", "Kylie Minogue - Come Into My World", "Foo Fighters - All My Life", "Missy - Misdemeanor Elliott - Work It", "Molotov - Frijolero", "Coldplay - The Scientist", "Paulina Rubio - Baila Casanova");
  const chart3 = new Chart("Eminem - Lose Yourself", "Shakira - Que Me Quedes Tú", "Robbie Williams - Feel", "Kelly Osbourne - Shut Up", "Avril Lavigne - Sk8er Boi", "Justin Timberlake - Cry Me A River", "t.A.T.u. - Not Gonna Get Us", "Jennifer Lopez - Jenny from the Block", "Juanes - Es Por Tí", "Nick Carter - Do I Have to Cry for You?", "Westlife - Unbreakable", "Madonna - Die Another Day", "Crazy Town - Drowning", "Molotov - Frijolero", "Kylie Minogue - Come Into My World", "Nirvana - You Know You're Right", "Missy - Misdemeanor Elliott - Work It", "Paulina Rubio - Baila Casanova", "Foo Fighters - All My Life", "Coldplay - The Scientist");
  const chart4 = new Chart("Eminem - Lose Yourself", "Robbie Williams - Feel", "Kelly Osbourne - Shut Up", "t.A.T.u. - Not Gonna Get Us", "Shakira - Que Me Quedes Tú", "Justin Timberlake - Cry Me A River", "Avril Lavigne - Sk8er Boi", "Nick Carter - Do I Have to Cry for You?", "Jennifer Lopez - Jenny from the Block", "Juanes - Es Por Tí", "Molotov - Frijolero", "Westlife - Unbreakable", "Paulina Rubio - Baila Casanova", "Madonna - Die Another Day", "Red Hot Chili Peppers - Can't Stop", "Gustavo Cerati - Cosas Imposibles", "Crazy Town - Drowning", "Kylie Minogue - Come Into My World", "Coldplay - The Scientist", "Audioslave - Like a Stone");

  const database = createDatabase(chart1, chart2, chart3, chart4);

  foo(chart3, chart4, database);

  expect(chart4.length).to.equal(20);
  expect(chart3.difference(chart4).length).to.equal(2);
  expect(chart4).to.include("Missy - Misdemeanor Elliott - Work It");
  expect([15, 16]).to.include(chart4.positionOf("Missy - Misdemeanor Elliott - Work It"));

  if (chart4.positionOf("Missy - Misdemeanor Elliott - Work It") === 15) {
    expect(chart4).not.to.include("Red Hot Chili Peppers - Can't Stop");
  }
  else if (chart4.positionOf("Missy - Misdemeanor Elliott - Work It") === 16) {
    expect(chart4).not.to.include("Gustavo Cerati - Cosas Imposibles");
  }
}

{ // APRIL 2023 ::::: UNRESOLVED
  const chart1 = new Chart("t.A.T.u. - Not Gonna Get Us", "Nick Carter - Do I Have to Cry for You?", "Molotov - Frijolero", "Christina Aguilera - Beautiful", "Eminem - Lose Yourself", "Kelly Osbourne - Shut Up", "Shakira - Que Me Quedes Tú", "Red Hot Chili Peppers - Can't Stop", "Paulina Rubio - Baila Casanova", "Avril Lavigne - Sk8er Boi", "Robbie Williams - Feel", "Audioslave - Like a Stone", "Gustavo Cerati - Cosas Imposibles", "Justin Timberlake - Cry Me A River", "Linkin Park - Somewhere I Belong", "Melanie C. - Here it Comes", "Sum 41 - Still Waiting", "Simple Plan - I'd Do Anything", "Jennifer Lopez - Jenny from the Block", "Coldplay - Clocks");
  const chart2 = new Chart("Nick Carter - Do I Have to Cry for You?", "t.A.T.u. - Not Gonna Get Us", "Christina Aguilera - Beautiful", "Molotov - Frijolero", "Red Hot Chili Peppers - Can't Stop", "Paulina Rubio - Baila Casanova", "Linkin Park - Somewhere I Belong", "Kelly Osbourne - Shut Up", "Shakira - Que Me Quedes Tú", "Gustavo Cerati - Cosas Imposibles", "Eminem - Lose Yourself", "Coldplay - Clocks", "Avril Lavigne - Sk8er Boi", "Audioslave - Like a Stone", "Melanie C. - Here it Comes", "Sum 41 - Still Waiting", "Simple Plan - I'd Do Anything", "Justin Timberlake - Cry Me A River", "Juanes - Mala Gente", "Kabah - Por Tí");
  const chart3 = new Chart("Nick Carter - Do I Have to Cry for You?", "Christina Aguilera - Beautiful", "t.A.T.u. - Not Gonna Get Us", "Linkin Park - Somewhere I Belong", "Molotov - Frijolero", "Red Hot Chili Peppers - Can't Stop", "Coldplay - Clocks", "Kelly Osbourne - Shut Up", "Paulina Rubio - Baila Casanova", "Gustavo Cerati - Cosas Imposibles", "Shakira - Que Me Quedes Tú", "Juanes - Mala Gente", "Avril Lavigne - Sk8er Boi", "Audioslave - Like a Stone", "Simple Plan - I'd Do Anything", "Kabah - Por Tí", "Melanie C. - Here it Comes", "Justin Timberlake - Cry Me A River", "Maná - Mariposa Traicionera", "Sum 41 - Still Waiting");
  const chart4 = new Chart("Christina Aguilera - Beautiful", "Linkin Park - Somewhere I Belong", "Nick Carter - Do I Have to Cry for You?", "t.A.T.u. - Not Gonna Get Us", "Coldplay - Clocks", "Molotov - Frijolero", "Red Hot Chili Peppers - Can't Stop", "Eminem - Sing for the Moment", "Paulina Rubio - Baila Casanova", "System Of A Down - Boom", "Juanes - Mala Gente", "Gustavo Cerati - Cosas Imposibles", "Simple Plan - I'd Do Anything", "Avril Lavigne - Sk8er Boi", "Audioslave - Like a Stone", "Kabah - Por Tí", "Kelly Osbourne - Shut Up", "Maná - Mariposa Traicionera", "Shakira - Que Me Quedes Tú", "Justin Timberlake - Cry Me A River");

  const database = createDatabase(chart1, chart2, chart3, chart4);

  foo(chart3, chart4, database);

  expect(chart4.length).to.equal(20);
  expect(chart4.at(8)).to.equal("Eminem - Sing for the Moment");
  expect(chart4.at(10)).to.equal("System Of A Down - Boom");
  expect(chart4.at(12)).to.equal("Gustavo Cerati - Cosas Imposibles");
}

{ // MAY 2023 ::::: UNRESOLVED
  const chart1 = new Chart("System Of A Down - Boom", "Linkin Park - Somewhere I Belong", "Eminem - Sing for the Moment", "Juanes - Mala Gente", "Kelly Osbourne - Come Dig Me Out", "Simple Plan - I'd Do Anything", "Nelly Justin & Timberlake - Work It", "Maná - Mariposa Traicionera", "The Calling - For You", "Marilyn Manson - mOBSCENE", "Bon Jovi - All About Lovin' You", "Christina Aguilera - Beautiful", "50 Cent - In Da Club", "Avril Lavigne - I'm With You", "Missy Misdemeanor Elliott Ludacris - Gossip Folks", "Nick Carter - Do I Have to Cry for You?", "Audioslave - Like a Stone", "t.A.T.u. - Not Gonna Get Us", "Coldplay - Clocks", "Madonna - American Life");
  const chart2 = new Chart("System Of A Down - Boom", "Linkin Park - Somewhere I Belong", "Kelly Osbourne - Come Dig Me Out", "Eminem - Sing for the Moment", "Marilyn Manson - mOBSCENE", "Juanes - Mala Gente", "Nelly Justin & Timberlake - Work It", "50 Cent - In Da Club", "Avril Lavigne - I'm With You", "Missy Misdemeanor Elliott Ludacris - Gossip Folks", "Madonna - American Life", "Simple Plan - I'd Do Anything", "Maná - Mariposa Traicionera", "Bon Jovi - All About Lovin' You", "Stacie Orrico - Stuck", "Deftones - Minerva", "The Calling - For You", "Ricky Martin - Tal Vez", "Audioslave - Like a Stone", "Christina Aguilera - Beautiful");
  const chart3 = new Chart("System Of A Down - Boom", "Marilyn Manson - mOBSCENE", "Linkin Park - Somewhere I Belong", "Eminem - Sing for the Moment", "Avril Lavigne - I'm With You", "50 Cent - In Da Club", "Kelly Osbourne - Come Dig Me Out", "Nelly Justin & Timberlake - Work It", "Evanescence - Bring Me to Life", "Missy Misdemeanor Elliott Ludacris - Gossip Folks", "Juanes - Mala Gente", "Deftones - Minerva", "Ricky Martin - Tal Vez", "Stacie Orrico - Stuck", "Madonna - American Life", "Simple Plan - I'd Do Anything", "A-Teens - Perfect Match", "Bon Jovi - All About Lovin' You", "Audioslave - Like a Stone", "Maná - Mariposa Traicionera");

  const database = createDatabase(chart1, chart2, chart3);

  foo(chart2, chart3, database);

  expect(chart3.length).to.equal(20);
  expect(chart3.at(9)).to.equal("Evanescence - Bring Me to Life");
  expect(chart3.at(15)).to.equal("Madonna - American Life");    
}

{ // JUNE 2003 ::::: SOLVED
  const chart1 = new Chart("System Of A Down - Boom", "Linkin Park - Somewhere I Belong", "Eminem - Sing for the Moment", "Juanes - Mala Gente", "Kelly Osbourne - Come Dig Me Out", "Simple Plan - I'd Do Anything", "Nelly Justin & Timberlake - Work It", "Maná - Mariposa Traicionera", "The Calling - For You", "Marilyn Manson - mOBSCENE", "Bon Jovi - All About Lovin' You", "Christina Aguilera - Beautiful", "50 Cent - In Da Club", "Avril Lavigne - I'm With You", "Missy Misdemeanor Elliott Ludacris - Gossip Folks", "Nick Carter - Do I Have to Cry for You?", "Audioslave - Like a Stone", "t.A.T.u. - Not Gonna Get Us", "Coldplay - Clocks", "Madonna - American Life");
  const chart2 = new Chart("System Of A Down - Boom", "Linkin Park - Somewhere I Belong", "Kelly Osbourne - Come Dig Me Out", "Eminem - Sing for the Moment", "Marilyn Manson - mOBSCENE", "Juanes - Mala Gente", "Nelly Justin & Timberlake - Work It", "50 Cent - In Da Club", "Avril Lavigne - I'm With You", "Missy Misdemeanor Elliott Ludacris - Gossip Folks", "Madonna - American Life", "Simple Plan - I'd Do Anything", "Maná - Mariposa Traicionera", "Bon Jovi - All About Lovin' You", "Stacie Orrico - Stuck", "Deftones - Minerva", "The Calling - For You", "Ricky Martin - Tal Vez", "Audioslave - Like a Stone", "Christina Aguilera - Beautiful");
  const chart3 = new Chart("System Of A Down - Boom", "Marilyn Manson - mOBSCENE", "Linkin Park - Somewhere I Belong", "Eminem - Sing for the Moment", "Avril Lavigne - I'm With You", "50 Cent - In Da Club", "Kelly Osbourne - Come Dig Me Out", "Nelly Justin & Timberlake - Work It", "Evanescence - Bring Me to Life", "Missy Misdemeanor Elliott Ludacris - Gossip Folks", "Juanes - Mala Gente", "Deftones - Minerva", "Ricky Martin - Tal Vez", "Stacie Orrico - Stuck", "Madonna - American Life", "Simple Plan - I'd Do Anything", "A-Teens - Perfect Match", "Bon Jovi - All About Lovin' You", "Audioslave - Like a Stone", "Maná - Mariposa Traicionera");
  const chart4 = new Chart("Marilyn Manson - mOBSCENE", "Avril Lavigne - I'm With You", "Linkin Park - Somewhere I Belong", "System Of A Down - Boom", "Eminem - Sing for the Moment", "50 Cent - In Da Club", "Evanescence - Bring Me to Life", "Nelly Justin & Timberlake - Work It", "Kelly Osbourne - Come Dig Me Out", "Stacie Orrico - Stuck", "Missy Misdemeanor Elliott Ludacris - Gossip Folks", "Deftones - Minerva", "Ricky Martin - Tal Vez", "Juanes - Mala Gente", "Madonna - American Life", "A-Teens - Perfect Match", "La Oreja de Van Gogh - Puedes Contar Conmigo", "Christina Aguilera - Fighter", "Audioslave - Like a Stone", "Bon Jovi - All About Lovin' You");
  const chart5 = new Chart("Avril Lavigne - I'm With You", "Marilyn Manson - mOBSCENE", "Linkin Park - Somewhere I Belong", "Evanescence - Bring Me to Life", "Eminem - Sing for the Moment", "System Of A Down - Boom", "50 Cent - In Da Club", "Stacie Orrico - Stuck", "Deftones - Minerva", "Christina Aguilera - Fighter", "Ricky Martin - Tal Vez", "Nelly Justin & Timberlake - Work It", "Missy Misdemeanor Elliott Ludacris - Gossip Folks", "La Oreja de Van Gogh - Puedes Contar Conmigo", "P.O.D. - Sleeping Awake", "Moenia - En Qué Momento?", "Juanes - Mala Gente", "Kelly Osbourne - Come Dig Me Out", "Madonna - American Life", "Audioslave - Like a Stone");

  const database = createDatabase(chart1, chart2, chart3, chart4, chart5);

  foo(chart4, chart5, database);

  expect(chart5.length).to.equal(20);
  expect(chart5).to.include("A-Teens - Perfect Match");
  expect([15, 16]).to.include(chart5.positionOf("A-Teens - Perfect Match"));

  if (chart5.positionOf("A-Teens - Perfect Match") === 15) {
    expect(chart5).not.to.include("P.O.D. - Sleeping Awake");
  }
  else if (chart5.positionOf("A-Teens - Perfect Match") === 16) {
    expect(chart5).not.to.include("Moenia - En Qué Momento?");
  }
}

{ // JULY 2003 ::::: // UNRESOLVED
  const chart1 = new Chart("Christina Aguilera - Fighter", "Avril Lavigne - I'm With You", "Metallica - St. Anger", "Evanescence - Bring Me to Life", "Stacie Orrico - Stuck", "P.O.D. - Sleeping Awake", "Eminem - Sing for the Moment", "Linkin Park - Faint", "Deftones - Minerva", "La Ley - Ámate y Sálvate", "White Stripes - Seven Nation Army", "Marilyn Manson - mOBSCENE", "Pink & William Orbit - Feel Good Time", "Molotov - Here We Kum", "Juanes & Nelly Furtado - Fotografía", "Café Tacuba - EO (El Sonidero)", "Qbo - No Más", "Michelle Branch - Are You Happy Now?", "Moenia - En Qué Momento?", "Red Hot Chili Peppers - Universally Speaking");
  const chart2 = new Chart("Metallica - St. Anger", "Christina Aguilera - Fighter", "Linkin Park - Faint", "Evanescence - Bring Me to Life", "Stacie Orrico - Stuck", "P.O.D. - Sleeping Awake", "Avril Lavigne - I'm With You", "White Stripes - Seven Nation Army", "Molotov - Here We Kum", "Pink & William Orbit - Feel Good Time", "Deftones - Minerva", "La Ley - Ámate y Sálvate", "Marilyn Manson - mOBSCENE", "Eminem - Sing for the Moment", "Café Tacuba - EO (El Sonidero)", "Qbo - No Más", "Juanes & Nelly Furtado - Fotografía", "Michelle Branch - Are You Happy Now?", "Red Hot Chili Peppers - Universally Speaking", "Moenia - En Qué Momento?");
  const chart3 = new Chart("Linkin Park - Faint", "Metallica - St. Anger", "Stacie Orrico - Stuck", "Evanescence - Bring Me to Life", "Christina Aguilera - Fighter", "Pink & William Orbit - Feel Good Time", "White Stripes - Seven Nation Army", "Molotov - Here We Kum", "P.O.D. - Sleeping Awake", "Avril Lavigne - I'm With You", "Audioslave - Show Me How to Live", "Michelle Branch - Are You Happy Now?", "Qbo - No Más", "Deftones - Minerva", "Café Tacuba - EO (El Sonidero)", "Simple Plan - Addicted", "Juanes & Nelly Furtado - Fotografía", "Red Hot Chili Peppers - Universally Speaking", "Madonna - Hollywood", "Beyoncé & Jay-Z - Crazy in Love");
  
  const database = createDatabase(chart1, chart2, chart3);
  const clone = chart3.slice();    
  
  foo(chart2, chart3, database);
    
  expect(chart3.length).to.equal(20);
  expect(chart3.join('')).to.equal(clone.join(''));
  expect(chart3.at(11)).to.equal("Audioslave - Show Me How to Live");
}


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
