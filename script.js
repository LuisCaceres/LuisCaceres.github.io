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


  /* Finds the first occurrence of `item` in this list and returns a list of the items placed after `item`.
   * @param {*} item
   * @return {List}
   * @example
   * // returns '3'
   * (new List(1, 2, 3)).after(2);
   */
  after(item, howMany) {
    const index = this.indexOf(item);

    if (index === -1) {
      return [];
    }

    const start = index + 1;
    const end = Number.isInteger(howMany) ? start + Math.max(howMany, 0) : howMany;

    return this.slice(start, end);
  }


  /* Finds the first occurrence of `item` in this list and returns a list of the items placed before `item`.
   * The number of items on the returned is list is determined by `howMany`.
   * @param {*} item -
   * @param {Number} howMany -
   * @return {List}
   * @example
   * // returns '1'
   * (new List(1, 2, 3)).before(2);
   */
  before(item, howMany) {
    return this.slice().reverse().after(item, howMany).reverse();
  }


  /* Returns the items from `list` not present in this list.
   * @param {List} list -
   * @return {List}
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
    const index = this.indexOf(replacee);

    if (index !== -1) {
      this[index] = replacement;
    }

    return this;
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

  
  /* Find `item1` and `item2` in this list. If found, move `item1` to `item2`'s position and viceversa. 
   * @param {*} item1 -
   * @param {*} item2 -
   * @returns {List} - this list.
   * @example
   * // returns [4, 2, 3, 1]
   * new List(1, 2, 3, 4).swap(1, 4);
   */
  swap(item1, item2) {
    const index1 = this.indexOf(item1);
    const index2 = this.indexOf(item2);

    if (index1 !== -1 && index2 !== -1) {      
      this[index1] = item2;
      this[index2] = item1;
    }

    return this;
  }
}



/*
 *
 */
class NumberList extends Array {
  constructor(...numbers) {
    super();
    this.push(...numbers);
  }


  /* Returns true 
   * @example
   * // Returns true
   * new NumberList(1, 2, 3, 4, 5).isIncreasing();
   * // Returns false
   * new NumberList(5, 4, 3, 2, 1).isIncreasing();
   * @return {Boolean}
   */
  isIncreasing() {
    const condition1 = this.every((n, index) => {
      const next = this[index + 1];
      return next === undefined ? true : n <= next;
    });

    return this.isFlat() === false && condition1;
  }


  /* Returns true 
   * @example
   * // Returns true
   * new NumberList(5, 4, 3, 2, 1).isDecreasing();
   * // Returns false
   * new NumberList(1, 2, 3, 4, 5).isDecreasing();
   * @return {Boolean}
   */
  isDecreasing() {
    return this.slice().reverse().isIncreasing();
  }


  /* Returns true 
   * @example
   * // Returns true
   * new NumberList(1, 1, 1, 1, 1).isFlat();
   * // Returns false
   * new NumberList(1, 2, 3, 4, 5).isFlat();
   * @return {Boolean}
   */
  isFlat() {
    return this.every((n, i)=> {
      const next = this[i + 1]; 
      return typeof next === 'number' ? n === next : true;
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


  /* Modifies this chart to eliminate continuity errors.
   * @param {Chart} chartB - This chart's previous or next chart.
   * @param {} database - A list of entries having ever charted.
   * @return {Chart} this chart.
   * @example
   * // returns ['A', 'B', 'E', 'C', 'D']
   * (new Chart('A', 'B', 'F', 'C', 'D')).format(new Chart('A', 'B', 'C', 'D', 'E'));
   */
  format(listB, database) {
    // Detect continuity errors.
    const errors = Chart.detector2(this, listB, database);
    errors.shuffle();

    const map = new Map();

    // Find entries in this chart able to eliminate continuity errors. 
    errors.forEach(error => {
      const targets = Chart.corrector2(error, this, listB, database);
      map.set(error, targets.shuffle());
    });

    map.share();

    // Eliminate errors.
    for (const [replacement, replacee] of map) {
      if (replacee !== null) {
        this.replace(replacee, replacement);
        
        // this.replace(replacement, replacee);
      }
    }

    return this;
  }


  /* Returns the position of `entry` on this chart.
   * @param {*} entry - 
   * @return {Number} position - The position of `entry` on this chart otherwise 21 if `entry` isn't on this chart.
   * @example
   * // returns 3
   * (new Chart('A', 'B', 'C', 'D', 'E')).positionOf('C');
   * // returns -1
   * (new Chart('A', 'B', 'C', 'D', 'E')).positionOf('F');
   */
  positionOf(entry) {
    const index = this.indexOf(entry);
    return index >= 0 ? index + 1 : 21;
  }


  /* Compares `chartA` to `chartB` to find entries on `chartB` which have been ascending
   * and have unexpectedly departed from chartA.
   * For example: [20, 18, 16, 14, 11, **]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries having ever charted.
   * @return {Array} entries
   */
  static detector1(chartA, chartB, database) {
    return chartA.difference(chartB).filter(entry => {
      const history = new NumberList(...database.get(entry).history);
      return history.length === 0 && history.isDescending();
    });
  }


  /* Finds entries on `chartA` which `entryB` can replace.
   * @param {*} entryB - Entry on `chartB` which has been ascending and has unexpectedly departed from chartA.
   * For example: [20, 18, 16, 14, 11, **]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @return {Array} entries
   */
  static corrector1(entryB, chartA, chartB) {
    return chartA.difference(chartB).filter(entryA => {
      const delta = chartA.positionOf(entryA) - chartB.positionOf(entryB);
 
      // TO DO: Detect if entry will be in the position for more than two weeks.
      // For example: [20, 19, 18, 18, *] turns into [20, 19, 18, 18, 18]
      // It seems that it's okay to let this happen because we'd like to reduce the number of debuts.
      // It's expected that a different corrector will correct this kind of behaviour.
      
      // `entryB`'s position on `chartB` is the same as `entryA`'s position or higher. 
      return delta >= 0
    });
  }

  
  /* Compares `chartA` to `chartB` to find entries on `chartB` which have debuted
   * in position 12 or a lower position.
   * For example: [**, 10]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries having ever charted.
   * @return {Array} entries
   */
  static detector2(chartA, chartB) {
    return chartA.difference(chartB).filter(entry => chartB.positionOf(entry) < 13);
  }


  /* Finds entries on `chartA` which `entryB` can replace.
   * @param {*} entryB - Corrupt entry on `chartB` which has debuted in position 12 or a higher position.
   * For example: [**, 10, 6, 2, 2]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries having ever charted.
   * @return {Array} entries
   */
  static corrector2(entryB, chartA, chartB, database) {
    return chartB.difference(chartA).filter(entryA => {
      const position = chartA.positionOf(entryA) 
      const delta = position - chartB.positionOf(entryB);
      const history = new NumberList(...database.get(entryA).history);
      
      // `entryA`'s position on `chartA` is at least two positions lower than `entryB`'s position on `chartB` and
      // `entryA`'s position on `chartA` is 13 or lower and
      // `entryA` has been charting for at least 2 charts and
      // `entryA` has already had at least one movement backwards.
      return delta >= 2 && position > 12 && history.length >= 1 && history.isDescending();
    });
  }


  /* Finds entries on `chartA` which have been static in the same position consecutively for 3 charts.
   * For example: [17, 15, 13, 10, 9, 9, 9]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries having ever charted.
   * @return {Array} entries
   */
  static detector3(chartA, chartB, database) {
    return chartA.filter(entry => {

      // Filter out if `entry` debuts on `chartA`.
      if (database.has(entry) === false) {
        return false;
      }

      const history = new NumberList(...database.get(entry).history.slice(-2));

      // Filter out if `entry` has charted for 2 weeks at most.
      if (history.length === 1) {
        return false;
      }

      const positionA = chartA.positionOf(entry);
      const positionB = chartB.positionOf(entry);
      history.push(positionA);

      // Filter out if `entry` starts to descend from `chartB`.
      // Example: [12, 12, 12, 13]
      // TO DO: THIS DOESN'T SEEM TO WORK WITH 'SOMEDAY';
      if (history.isDecreasing() && history.at(-1) < positionB) {
        return false;
      }

      // Filter out if `entry` has been static in position 1 for 3 weeeks consecutively.
      history.push(positionA);

      if (history.at(0) === 1 && history.isFlat() === true) {
        return false;
      }
      
      history.push(positionB);
      
      // Filter out if `entry` is in the same position for 4 weeeks consecutively.
      // Example: [07, 05, 03, 02, 02, 02, 02]
      if (history.isFlat() === true) {
        return false;
      }

      // Filter in if `entry` has been static in the same position for 3 weeks consecutively.
      return history.slice(0, 3).isFlat() === true;
    });
  }


  /* Finds entries on `chartA` which `entryB` can replace.
   * @param {*} entry - Corrupt entry on `chartB` which has debuted in position 12 or a higher position.
   * For example: [**, 10, 6, 2, 2]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries having ever charted.
   * @return {Array} entries
   */
  static corrector3(entry, chartA, chartB, database) {
    // TO DO: If there are multiple instances of an entry being static for 3 weeks be careful because inadvertently 
    // we could end up moving an entry too far away from his original position.
    // For example:
    // POSITION 5 [5, 5, 5]
    // POSITION 10 [10, 10, 10]
    // TARGET [4, 6, 15] COULD BECOME [4, 5, 15]
    
    const positionA = chartA.positionOf(entry);
    const positionB = chartB.positionOf(entry);
    const history = new NumberList(...database.get(entry).history, positionA, positionB);
    
    const delta = Math.abs(positionA - positionB);
    const method = history.isDecreasing() ? 'before' : 'after';
    
    // According to `entry`'s direction of movement, retrieve those entries placed ahead of `entry`.
    // Example:
    // Returns [20, 19]
    // new Chart(20, 19, entry, 17, 16).before(entry);

    // TO DO: ALSO WE DON'T WANT TO CAUSE THE ITEM THAT'S MOVED TO REPEAT POSITION FOR CHART A AND B
    // EXAMPLE [1O, 12, 13, 14] = [10, 12, 14, 14]

    const entries = chartA[method](entry, delta);

    // If `entry` starts descending from chartB.
    // Example: [**, 18, 16, 14, 12, 12, 12, 13]
    if (history.slice(0, -1).isDecreasing() && positionA < positionB) {
      // Retreive the entry immediately preceding `entry` on chartA and add it to `entries`.
      entries.unshift(...chartA.before(entry, 1));
    } 

    return entries.filter(entry => {
      const history = new NumberList(...(database.get(entry)?.history || [21, 21]));

      // TO DO: item has only been in chart for less than 3 weeks
      // TO DO: item ascends from chart B 
      // Example: [20, 19, 1, 9]
      
      // Filter out if `entry` arrives in `chartA` and `positionA` is 12 or higher.
      if (history.at(-1) === 21 && positionA <= 12) {
        return false;
      }

      // Filter out if `positionA` is 12 or higher and `entry` departs from `chartB`.
      if (positionA <= 12 && chartB.positionOf(entry) === 21) {
        return false;
      }

      // Filter out if `entry` is descending and `positionA` in `entry`'s history causes `entry` to ascend again.
      // Example: [1, 2, 3, 4, 2]
      if (history.isIncreasing() && history.at(-1) > positionA) {
        return false;
      }
  
      // Filter out if the difference between `entry`'s position in `chart2` and `positionA` is at least 2 
      // and `entry` starts to descend from `chartB`.
      //           1  2  A  B
      // Example: [6, 5, 1, 8]
      if (history.isIncreasing() === false && (history.at(-1) - positionA) >= 2 && history.at(-1) < chartB.positionOf(entry)) {
        return false;
      }

      history.push(chartA.positionOf(entry), chartB.positionOf(entry));

      // Filter out if `entry` is ascending and `positionA` in `entry`'s history causes `entry` to descend from `chartB`.
      //           1  2  A  B  C
      // Example: [5, 3, 2, 3, 2]
      if (history.isDecreasing() && positionA < chartB.positionOf(entry)) {
        return false;
      }

      return true;
    });
  }
}
