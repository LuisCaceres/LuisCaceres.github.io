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
    let entry = charted.get(match);
    
    if (!entry) {
      entry = uncharted.random();
      // Remove any duplicates of 'video' from the pool.
      uncharted.remove(entry);
      charted.set(match, entry);
    }
    
    entry.position = `${index + 1}`.padStart(2, 0);
    
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
    let index = this.indexOf(item);
    
    while(index > -1) {
      this.splice(index, 1);
      index = this.indexOf(item);
    }
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
  // Verify if there are any new items in position 12 or below.
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
    const {history} = database.get(match);
    return history.length === 0 || history.at(-1) > 12 && history.isAscending();
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
function format2(currentList, previousList, database) {
  // Compare `currentList` and `nextList` and get the items that have come out of `nextList`.
  // Let `outItems` be a list of such items.
  const outItems = nextList.difference(currentList);
  
  const illegalItems = outItems.filter(match => {
    const {history} = database.get(match);
    return history.isAscending();
  });
  
  // Abort if there are no illegal items.
  if (!illegalItems.length) {
    return currentList;
  }
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


/* Verifies if a playlist `playlist` consists of the expected number of
 * advertisements, music videos and stings and in the expected order.
 * @param {[Video]} - playlist
 * @return {boolean} - Whether `playlist` fulfils the criteria above.
 */
function validate(playlist) {
  
  /* Remove any consecutive duplicates. Duplicates are inserted into 
  `playlist` because of what I consider a bug from the YouTube API. See 
  the `adjustPlaylist` function for further details about this bug. */
  playlist = playlist.reduce(function (accumulator, current, index) {
    if (current !== playlist[index + 1]) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);

  expect(playlist.length).to.equal(57);
  
  const order = [
    'INTRO',
    'STING','20',
    'STING','19',
    'ADVERTISEMENT',
    
    'STING','18',
    'STING NEW VIDEO','xtra',
    'ADVERTISEMENT',
    
    'STING','17',
    'STING','16',
    'ADVERTISEMENT',
    
    'STING','15',
    'STING','14',
    'ADVERTISEMENT',
    
    'STING','13',
    'STING','12',
    'ADVERTISEMENT',
    
    'STING','11',
    'ADVERTISEMENT',
    
    'STING','10',
    'STING','09',
    'ADVERTISEMENT',
    
    'STING','08',
    'STING NEW VIDEO','xtra',
    'ADVERTISEMENT',
    
    'STING','07',
    'STING','06',
    'ADVERTISEMENT',
    
    'STING','05',
    'STING','04',
    'ADVERTISEMENT',
    
    'STING','03',
    'STING','02',
    'ADVERTISEMENT',
    
    'STING','01',
    'INTRO',
  ];
  
  playlist.forEach((item, index) => {
    expect(item.name || item.position || item).to.equal(order[index]);
  });
}
