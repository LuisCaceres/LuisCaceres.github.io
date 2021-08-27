// TO DO: IT SEEMS THERE ARE MORE DEBUTS THAN I WOULD LIKE THEM TO THERE BE. 
// TO DO: [20, 20, 18, 17, 17, **], [**, **, **, **, **, 13] <<<< SHOULDN'T BE ALLOWED, INSTEAD [20, 20, 18, 17, 17, 13]
// TO DO: [20, **], [** 18]<<<<< SHOULDN'T BE ALLOWED INSTEAD [20, 18]
// WHAT ABOUT WHEN THERE IS MORE THAN ONCE INSTANCE OF THIS?


// TO DO: THERE ARE MORE OCURRENCES OF VIDEOS BEING IN THE SAME POSITION FOR MORE THAN 3 WEEKS, I DON'T LIKE THAT.

/* Reduces each list to only one item. These items become the values of this map instead. The items are unique as values.    
 * In other words, an item is used as a value only once even if some lists share that same item. Therefore, null may be used as a value if necessary   
 * in order to maintain the uniqueness of the values. 
 */
Map.prototype.share = function share() {
  // Let `lists` be a list of lists in this listMap.
  const lists = new List(...this.values());

  // For each key in this listMap.
  for ([key] of this) {
    // Let `list` be the list associate with `key`.
    const list = lists.shift();
    // Let `item` be...
    let item = null;

    // While this list isn't empty.
    while (list.length) {
      // Remove the item currently at the beginning of `list`.
      item = list.shift();
      // Let `singles` be a list of lists. Each list contains only one item. This item is `item`. 
      const singles = lists.filter(list => list.includes(item) && list.length === 1);
      // If `list` contains only one item then `item` is the {{what}} item.
      const condition = list.length === 0 || singles.length === 0;

      if (condition) {
        lists.forEach(list => list.remove(item));
        break;
      }
      else {
        singles.difference(lists).forEach(list => list.remove(item));
      }
    }

    // Associate `key` and `item` instead.
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


  /* Rearranges the order of the items in this list.
   * @returns {List} - this list.
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


  /* Returns
   * @return {Number} position -
   * @example
   * // returns 'C'
   * (new Chart('A', 'B', 'C', 'D', 'E')).at(3)
   */
  at(position) {
    return this[position - 1];
  }


  /* Compares this chart to `chatB` in search of errors. 
   * Modifies this chart to eliminate such errors.
   * @param {Chart} chartB -
   * @return {Chart} this chart.
   * @example
   * // returns ['A', 'B', 'E', 'C', 'D']
   * (new Chart('A', 'B', 'F', 'C', 'D')).format(new Chart('A', 'B', 'C', 'D', 'E'));
   */
  format(listB, database) {    
    const errors = Chart.detector2(this, listB, database);
    errors.shuffle();
    
    const map = new Map();

    errors.forEach(error => {
      const targets = Chart.corrector2(error, this, listB, database);
      map.set(error, targets.shuffle());
    });

    map.share();

    for (const [replacement, replacee] of map) {
      // what if it's null?
      this.replace(replacee, replacement);
    }

    return this;
  }


  /* Returns the position of `entry` in this chart.
   * @param {*} entry -
   * @return {Number}
   * @example
   * // returns 'C'
   * (new Chart('A', 'B', 'C', 'D', 'E')).positionOf('C')
   */
  positionOf(entry) {
    // What about if `entry` doesn't exist in this chart?
    return this.indexOf(entry) + 1;
  }


  /* Compares `chartA` to `chartB` to find entries on `chartB` which have been ascending
   * and have unexpectedly departed from chartA.
   * For example, [20, 18, 16, 14, 11, **]
   * @param {Chart} chartA -
   * @param {Chart} chartB -
   * @param {} database -
   * @return {Array}
   */
  static detector1(chartA, chartB, database) {
    return chartA.difference(chartB).filter(entry => {
      const history = new NumericRange(...database.get(entry).history);
      return history.length === 0 && history.isDescending();
    });
  }


  /* Finds entries on `chartA` which `entryB` can replace.
   * @param {} entryB - Entry on `chartB` which has been ascending and has unexpectedly departed from chartA.
   * For example, [20, 18, 16, 14, 11, **]
   * @param {Chart} chartA -
   * @param {Chart} chartB -
   * @return {Array}
   */
  static corrector1(entryB, chartA, chartB) {
    return chartA.difference(chartB).filter(entryB => {
      const delta = chartA.positionOf(entryB) - chartB.positionOf(entryB);
      
      // TO DO: Detect if entry will be in the position for more than two weeks.
      // For example: [20, 19, 18, 18, *] turns into [20, 19, 18, 18, 18]
      return delta >= 0;
    });
  }

  
  /* Compares `chartA` to `chartB` to find entries on `chartB` which have debuted
   * in position 12 or a lower position.
   * For example, [**, 10]
   * @param {Chart} chartA -
   * @param {Chart} chartB -
   * @param {} database -
   * @return {Array}
   */
  static detector2(chartA, chartB) {
    return chartA.difference(chartB).filter(entry => chartB.positionOf(entry) < 13);
  }


  /* Finds entries on `chartA` which `entryB` can replace.
   * `entryB` is an entry on `chartB` which has debuted in position 12 or a lower position.
   * For example, [**, 10, 6, 2, 2]
   * @return {Array}
   */
  static corrector2(entryB, chartA, chartB, database) {
    return chartB.difference(chartA).filter(entryA => {
      const delta = chartA.positionOf(entryA) - chartB.positionOf(entryB);
      const history = new NumericRange(...database.get(entryA).history);
      
      // TO DO: Detect if entry will be in the position for more than two weeks.
      // For example: [20, 19, 18, 18, *] turns into [20, 19, 18, 18, 18]
      return delta >= 0 && history.at(-1) > 12;
    });
  }
}
