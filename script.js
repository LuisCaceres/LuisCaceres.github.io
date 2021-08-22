// TO DO: IT SEEMS THERE ARE MORE DEBUTS THAN I WOULD LIKE THEM TO THERE BE. 
// TO DO: [20, 20, 18, 17, 17, **], [**, **, **, **, **, 13] <<<< SHOULDN'T BE ALLOWED, INSTEAD [20, 20, 18, 17, 17, 13]
// TO DO: [20, **], [** 18]<<<<< SHOULDN'T BE ALLOWED INSTEAD [20, 18]
// WHAT ABOUT WHEN THERE IS MORE THAN ONCE INSTANCE OF THIS?


// TO DO: THERE ARE MORE OCURRENCES OF VIDEOS BEING IN THE SAME POSITION FOR MORE THAN 3 WEEKS, I DON'T LIKE THAT.

Map.prototype.share = function share() {
  const lists = new List(...this.values());

  for ([key] of this) {
    const list = lists.shift();
    let item = null;

    while (list.length) {
      item = list.shift();
      const singles = lists.filter(list => list.includes(item) && list.length === 1);
      const condition = list.length === 0 || singles.length === 0;

      if (condition) {
        lists.forEach(list => list.remove(item));
        break;
      }
      else {
        singles.difference(lists).forEach(list => list.remove(item));
      }
    }

    this.set(key, item);
  }
};



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


  /* Returns the items from `list` not present in this list.
   * @param {List} - list
   * @return {List} -
   */
  difference(list) {
    return list.filter(item => !this.includes(item));
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

    return this;
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


  /*
   *
   */
  shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }

    return this;
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
  
  /* Verify there are no music videos duplicated in the playlist */
  playlist = playlist.filter(item => item.position);
  playlist = new Set(playlist);
  expect(playlist.size).to.equal(22);
}


/*
 *
 */
class Chart extends List {
  constructor(...entries) {
    super(...entries);
  }


  /*
   *
   */
  at(index) {
    return this[index - 1];
  }
  
  foo(listB, database) {
    
    const foo = [[this, listB], [listB, this], [listB, this], [this, listB]];
    let index = 0;
 
    for (const [listA, listB] of foo) {
       if (index++ === 2) {
          listA.reverse();
          listB.reverse();
       }

      const difference = listA.difference(listB);
      const targets = difference.filter(entry => listB.positionOf(entry) < 13);
      const map = new Map();

      targets.forEach(target => {
        const list = listA.filter(item => {
          if (listB.includes(item)) {
            return false;
          }

          const delta = listA.positionOf(item) - listB.positionOf(target);

          if (delta < 2) {
            return false;
          }

          if (!database.get(item)) {
            return true;
          }

          const history = new NumericRange(...database.get(item).history);

          return history.length === 0 || history.at(-1) > 12 && history.isAscending();
        });

        map.set(target, list);
      });
      
      map.share();

      for (const [replacement, replacee] of map) {
        listA.replace(replacee, replacement);
      }
    }
    
    this.reverse();
    listB.reverse();
    
    return this;
  }


  /*
   *
   */
  format(listB, database) {
    // Iterate through next week's list and verify if there are any new items.
    // Let `newItems` be a list of such items.
    const newItems = this.difference(listB);
    // Verify if there are any new items in position 12 or below.
    // Let `illegalItems` be a list of such items.
    const illegalItems = newItems.filter(entry => listB.positionOf(entry) < 13);

    const map = new Map();

    illegalItems.forEach(itemA => {
      const list = this.filter(itemB => {
        
        if (listB.includes(itemB)) {
          return false;
        }

        const delta = this.positionOf(itemB) - listB.positionOf(itemA);
        
        if (delta < 2) {
          return false;
        }
        
        if (!database.get(itemB)) {
          return false;
        }
 
        const history = new NumericRange(...database.get(itemB).history);
        
        return history.length === 0 || history.at(-1) > 12 && history.isAscending();
      });

      map.set(itemA, list);
    });

    map.share();

    for (const [replacement, replacee] of map) {
      this.replace(replacee, replacement);
    }

    return this;
  }


  /*
   *
   */
  format2(previousList, database) {
    // FIND OUT WHICH ENTRIES HAVE DROPPED OFF THIS WEEK'S CHART.
    // Compare last week's chart and this week's chart and get the entries not present in this week's chart.
    // Let `outItems` be a list of such entries.
    const outItems = this.difference(previousList);

    // OUT OF THOSE ENTRIES, FIND OUT WHICH ONES ARE DISALLOWED.
    // Let `disallowedEntries` be an initially empty list of entries.
    // For each entry `entry` in `outItems`.
       // Add `entry` to `disallowedEntries` if `entry`'s history only contains forward movements.
       // EXAMPLE of an entry's history which only contains forward movements: [20, 20, 18, 17, 17, **]
    const illegalItems = outItems.filter(match  => {
      const history = new NumericRange(...database.get(match).history);
      return history.isDescending() || history.length === 1;
    });

    const map = new Map();

    illegalItems.forEach(itemA => {
      const list = this.filter(itemB => {
        if (previousList.includes(itemB)) {
          return false;
        }

        const position = this.positionOf(itemB);

        // WHAT ABOUT BEING IN THE SAME POSITION FOR 3 WEEKS OR MORE
        return previousList.positionOf(itemA) >= position;
      });

      map.set(itemA, list);
    });

    map.share();

    for (const [replacement, replacee] of map) {
      const item = database.get(replacement);
      database.delete(replacement);
      database.set(replacee, item);
      item.match = replacee;
    }

    // DONE
    return this;
  }


  /*
   *
   */
  positionOf(entry) {
    return this.indexOf(entry) + 1;
  }
}
