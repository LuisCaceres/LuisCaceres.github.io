/*
 *
 */
if (!Array.prototype.at) {
  Array.prototype.at = function(n) {
    return this[n >= 0 ? n : this.length - Math.abs(n)];
  };
}


/*
 *
 */
function adjustScreen(screen, measurements) {
  screen.style.left = measurements.left || '';
  screen.style.position = measurements.position || '';
  screen.style.width = measurements.width || '';
}


/*
 *
 */
function adjustPlaylist(playlist) {
  return playlist.map(item => {
    return item.hasOwnProperty('endSeconds') ? [item, item] : item;
  }).flat();
}


/*
 *
 */
function adjustScreen(screen, measurements) {
  screen.style.left = measurements.left || '';
  screen.style.position = measurements.position || '';
  screen.style.width = measurements.width || '';
}


/*
 *
 */
function associate(list, charted, uncharted) {
  const chart = list.map((match, index) => {
    let entry = charted.find(entry => entry.match === match);
    
    if (!entry) {
      entry = uncharted.random();
      entry.match = match;
      // Remove any duplicates of 'video' from the pool.
      uncharted = uncharted.filter(item => item !== entry);
      charted.push(entry);
    }
    
    entry.position = ("0" + (index + 1)).substr(-2);
    return entry;
  }).reverse();
    
  return {
    chart,
    charted,
    uncharted,
  };
}


/*
 *
 */
function encode(string) {
  const codes = Array.from(string).map(e => e.charCodeAt(0) + 1);
  return String.fromCharCode(...codes);
}


/*
 *
 */
class List extends Array {
  constructor(...items) {
    super(...items);
  }
  
  
  /*
   *
   */
  difference(list) {
    return list.filter(a => !this.find(b => a === b));
  }
  

  
  /*
   *
   */
   insert(indexes, item) {
    indexes.reverse();
     
    for (const index of indexes) {
      this.splice(index, 0, item);
    }
   }
   
  /*
   *
   */
   intersection(list) {
    return this.filter(a => list.find(b => a === b));
   }

  
  /*
   *
   */
  random() {
    const max = Math.floor(Math.random() * this.length) + 1;
    return this[max - 1];
  }
  
  
  /*
   *
   */
  remove(item) {
    const index = this.findIndex(a => a === item);
    this.splice(index, 1);
  }
 
  
  /*
   *
   */
  replace(replacee, replacement) {
    this.forEach((item, index) => {
      if (item === replacee) {
        this[index] = replacement;
      }
    });
  } 
}


/*
 *
 */
class NumericRange extends Array {
  constructor(...numbers) {
    super();
    this.push(...numbers);
  }

  isAscending() {
    return this.every((n, i)=> {
      const next = this[i + 1]; 
      return typeof next === 'number' ? n <= next : true;
    });
  }
  
  isDescending() {
    return this.every((n, i)=> {
      const next = this[i + 1]; 
      return typeof next === 'number' ? n >= next : true;ç
    }); 
  }
}


/*
 *
 */
function format(currentList, nextList, database) {
  // Iterate through next week's list and verify if there are any new items.
  // Let `newItems` be a list of such items.
  const newItems = currentList.difference(nextList);
  // Verify if there are any new items below position 13.
  // Let `illegalItems` be a list of such items.
  const illegalItems = newItems.intersection(nextList.filter((item, index) => index + 1 <= 12));

  // Abort if there are no illegal items.
  if (!illegalItems.length) {
    return currentList;
  }
  
  // Iterate through next week's chart and verify which items have dropped out.
  // Let `expiredItems` be a list of such items.
  const expiredItems = nextList.difference(currentList);
  // Let `replacees` be a list of items that may be replaced by an illegal item. 
  const replacees = expiredItems.filter(match => {
    // For each item `item` in `expiredItems`:  
    const {history} = database.find(item => item.match === match);
    const range = new NumericRange(...history);
    return range.length === 0 || range.at(-1) > 12 && range.isAscending();
  });
  
  // Abort if there are no suitable replacements.
  if (!replacees.length) {
    return currentList;
  }
   
  const reserve = new List();

  // For each item `item` in `illegalEntries`:
  for (const illegalItem of illegalItems) {
  
    while (replacees.length) {
      const replacee = replacees.random();
      const positionIllegalItem = nextList.indexOf(illegalItem);
      const positionReplacee = currentList.indexOf(replacee);
      const difference = positionReplacee - positionIllegalItem;
      
      replacees.remove(replacee);
      
      if (difference > 1) {
        currentList.replace(replacee, illegalItem);
        break;
      }
      else {
        reserve.push(replacee);
      }
    }

    replacees.push(...reserve);
  }

  return currentList;
}


/*
 *
 */
function generatePlaylist(chart, intro, sting, advertisement, extra) {
  chart.insert([0], intro);
  chart.insert([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22], sting);
  chart.insert([7, 28], extra);
  chart.insert([5, 9, 13, 17, 21, 23, 27, 31, 35, 39, 43, ], advertisement);
  chart.push(intro);
  return chart;
}


/*
 *
 */
function insertExtraItems(chart, uncharted) {
  const slots = [3, 14];

  for (const slot of slots) {
    const extraItem = uncharted.random();
    extraItem.position = "xtra";
    uncharted = uncharted.filter(item => item !== extraItem);
    chart.splice(slot, 0, extraItem);
  }

 return chart;
}


/*
 *
 */
function parse(table) {
  const artists = Array.from(table.querySelectorAll('td:nth-of-type(5)')).map(artist => artist.textContent);
  const titles =  Array.from(table.querySelectorAll('td:nth-of-type(4)')).map(title => title.textContent);
  const list = new List();

  for (const artist of artists) {
    const title = titles.shift();
    list.push(encode(`${artist} ${title}`));
  }

  return list;
}


/*
 *
 */
function validate(playlist) {
  playlist = playlist.reduce(function (accumulator, current, index) {
    if (current !== playlist[index + 1]) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  
  expect(playlist.length).to.equal(57);
  
  expect(playlist[0].name).to.equal('INTRO');
  expect(playlist[1].name).to.equal('STING');
  expect(playlist[2].position).to.equal('20');
  expect(playlist[3].name).to.equal('STING');
  expect(playlist[4].position).to.equal('19');
  expect(playlist[5].name).to.equal('ADVERTISEMENT');

  expect(playlist[6].name).to.equal('STING');
  expect(playlist[7].position).to.equal('18');
  expect(playlist[8].name).to.equal('STING NEW VIDEO');
  expect(playlist[9].position).to.equal('xtra');
  expect(playlist[10].name).to.equal('ADVERTISEMENT');

  expect(playlist[11].name).to.equal('STING');
  expect(playlist[12].position).to.equal('17');
  expect(playlist[13].name).to.equal('STING');
  expect(playlist[14].position).to.equal('16');
  expect(playlist[15].name).to.equal('ADVERTISEMENT');

  expect(playlist[16].name).to.equal('STING');
  expect(playlist[17].position).to.equal('15');
  expect(playlist[18].name).to.equal('STING');
  expect(playlist[19].position).to.equal('14');
  expect(playlist[20].name).to.equal('ADVERTISEMENT');

  expect(playlist[21].name).to.equal('STING');
  expect(playlist[22].position).to.equal('13');
  expect(playlist[23].name).to.equal('STING');
  expect(playlist[24].position).to.equal('12');
  expect(playlist[25].name).to.equal('ADVERTISEMENT');

  expect(playlist[26].name).to.equal('STING');
  expect(playlist[27].position).to.equal('11');
  expect(playlist[28].name).to.equal('ADVERTISEMENT');

  expect(playlist[29].name).to.equal('STING');
  expect(playlist[30].position).to.equal('10');
  expect(playlist[31].name).to.equal('STING');
  expect(playlist[32].position).to.equal('09');
  expect(playlist[33].name).to.equal('ADVERTISEMENT');

  expect(playlist[34].name).to.equal('STING');
  expect(playlist[35].position).to.equal('08');
  expect(playlist[36].name).to.equal('STING NEW VIDEO');
  expect(playlist[37].position).to.equal('xtra');
  expect(playlist[38].name).to.equal('ADVERTISEMENT');

  expect(playlist[39].name).to.equal('STING');
  expect(playlist[40].position).to.equal('07');
  expect(playlist[41].name).to.equal('STING');
  expect(playlist[42].position).to.equal('06');
  expect(playlist[43].name).to.equal('ADVERTISEMENT');

  expect(playlist[44].name).to.equal('STING');
  expect(playlist[45].position).to.equal('05');
  expect(playlist[46].name).to.equal('STING');
  expect(playlist[47].position).to.equal('04');
  expect(playlist[48].name).to.equal('ADVERTISEMENT');

  expect(playlist[49].name).to.equal('STING');
  expect(playlist[50].position).to.equal('03');
  expect(playlist[51].name).to.equal('STING');
  expect(playlist[52].position).to.equal('02');
  expect(playlist[53].name).to.equal('ADVERTISEMENT');

  expect(playlist[54].name).to.equal('STING');
  expect(playlist[55].position).to.equal('01');
  expect(playlist[56].name).to.equal('INTRO');
}
