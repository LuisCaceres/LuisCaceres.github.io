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


/* Return
 * @param {Chart} charts -
 * @return {Map}
 * @example
 * const chart1 = new Chart('A', 'B', 'C', 'D', 'E');
 * const chart2 = new Chart('E', 'D', 'C', 'B', 'A');
 * createDatabase(chart1, chart2);
 * // Returns {'A' => ChartHistory(2) [1, 5], 'B' => ChartHistory(2) [2, 4], 'C' => ChartHistory(2) [3, 3], 'D' => ChartHistory(2) [4, 2], 'E' => ChartHistory(2) [5, 1] }
 */
function createDatabase(...charts) {
  const map = new Map();

  for (const chart of charts) {

    for (const entry of chart) {

      if (map.has(entry) === false) {
        const positions = charts.map(chart => chart.positionOf(entry));
        map.set(entry, new ChartHistory(...positions));
      }
    }
  }

  return map;
}


/*
 *
 */
function createChart(list, charted, uncharted) {
  const entries = list.map((element, index) => {
    let entry = charted.find(item => item.match === element)?.title;
    
    if (!entry) {
      entry = uncharted.random().title;
      // Remove any duplicates of 'video' from the pool.
      // uncharted.remove(entry);
      // charted.set(match, entry);
    }
    
    // entry.position = `${index + 1}`.padStart(2, 0);
    
    return entry;
  });
    
  return new Chart(...entries);
  
//   return {
//     chart,
//     charted,
//     uncharted,
//   };
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
   * new List(1, 2, 3, 4).swap(1, 4);
   * // returns [4, 2, 3, 1]
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
   * new NumberList(1, 1, 1, 1, 1).isOrdered();
   * new NumberList(1, 2, 3, 4, 5).isOrdered();
   * new NumberList(5, 4, 3, 2, 1).isOrdered();
   * // Returns false
   * new NumberList(1, 2, 3, 4, 1).isOrdered();
   * @return {Boolean}
   */  
  isOrdered() {
     return this.isDecreasing() || this.isFlat() || this.isIncreasing();
  }


  /* Returns a list of progressions in this NumberList. A progression is
   * is a sequence of numbers that express an increment or decrement.
   * @example
   * new NumberList(1, 1, 1, 1, 1).getProgressions();
   * // Returns [[1, 1, 1, 1, 1]]
   * new NumberList(1, 2, 3, 4, 5).getProgressions();
   * // Returns [[1, 2, 3, 4, 5]]
   * new NumberList(5, 4, 3, 2, 1).getProgressions();
   * // Returns [[5, 4, 3, 2, 1]]
   * new NumberList(1, 2, 3, 4, 1).getProgressions();
   * // Returns [[1, 2, 3, 4], [1]]
   * @return {NumberList[]}
   */  
  getProgressions() {
    let list = new NumberList();
    const lists = [list];
    let start = 0;
    
    this.forEach((n, index) => {
      const sublist = this.slice(start, index + 1); 

      if (sublist.isOrdered()) {
        list.push(n);
      }
      else {
        list = new NumberList(n);
        lists.push(list);
        start = index;
      }
    });

    return lists;
  }


  /* Returns true 
   * @example
   * new NumberList(1, 1, 1, 1, 1).isFlat();
   * // Returns true
   * new NumberList(1, 2, 3, 4, 5).isFlat();
   * // Returns false
   * @return {Boolean}
   */
  isFlat() {
    return Math.min(...this) === Math.max(...this);
  }


  /* Returns true 
   * @example
   * new NumberList(1, 2, 3, 4, 5).isIncreasing();
   * // Returns true
   * new NumberList(5, 4, 3, 2, 1).isIncreasing();
   * // Returns false
   * @return {Boolean}
   */
  isIncreasing() {
    const condition = this.every((n, index) => {
      const next = this[index + 1];
      return next === undefined ? true : n <= next;
    });

    return this.isFlat() === false && condition;
  }


  /* Returns true 
   * @example
   * // Returns true
   * new NumberList(1, 2, 3, 4, 5).isIncreasing();
   * // Returns false
   * new NumberList(5, 4, 3, 2, 1).isIncreasing();
   * @return {Boolean}
   */
  hasStartedDescending() {
    return this.slice(0, -1).isAscending() && this.at(-2) < this.at(-1);
  }


  /* Returns true 
   * @example
   * // Returns true
   * new NumberList(1, 2, 3, 4, 5).isIncreasing();
   * // Returns false
   * new NumberList(5, 4, 3, 2, 1).isIncreasing();
   * @return {Boolean}
   */
  isAscending() {
    return this.isFlat() || this.isDecreasing();
  }


  /* Returns true 
   * @example
   * // Returns true
   * new NumberList(1, 2, 3, 4, 5).isIncreasing();
   * // Returns false
   * new NumberList(5, 4, 3, 2, 1).isIncreasing();
   * @return {Boolean}
   */
  isDescending() {
    return this.isAscending() === false;
  }
}


/*
 *
 */
class ChartHistory extends NumberList {
  constructor(...items) {
    super(...items);
  }


  /* Returns `true` if or `false` otherwise.
   * @return {Boolean}
   * @example
   * new ChartHistory(21, 10, 06, 02, 02).isIllegalArrival();
   * // returns `true`
   * new ChartHistory(21, 20, 11, 08, 05).isIllegalArrival();
   * // returns `false`
   */
  isIllegalArrival() {
    if (this.includes(21)) {
      const index = this.indexOf(21) + 1;
      const position = this[index] || 21;

      return position <= 12;
    }
    else {
      return false;
    }
  }


  /* Returns `true` if or `false` otherwise.
   * @return {Boolean}
   * @example
   * new ChartHistory(01, 04, 05, 10, 21).isIllegalDeparture();
   * // returns `true`
   * new ChartHistory(13, 13, 14, 17, 21).isIllegalDeparture();
   * // returns `false`
   */
  isIllegalDeparture() {
    if (this.includes(21)) {
      const index = this.lastIndexOf(21) - 1;
      const position = this[index] || 21;

      return position <= 12;
    }
    else {
      return false;
    }
  }


  /* Returns `true` if the order of the progressions in this chart history is valid or `false` otherwise.
   * @return {Boolean}
   * @example
   * new ChartHistory(01, 02, 03, 04, 05).isValid();
   * // returns `true`
   * new ChartHistory(01, 02, 03, 02, 01).isValid();
   * // returns `false`
   */
  isValid() {
    let validity = false;

    const progressions = this.getProgressions();
    const {length} = progressions;

    if (length === 2) {
      if (progressions[0].isAscending() && (progressions[1].isIncreasing() || progressions[1].isFlat())) {
        validity = true;
      }
    }
    else if (length === 1) {
      validity = true;
    }

    return validity;
  }
}


/*
 *
 */
function createPlaylist(chart, intro, sting, advertisement, extra) {
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
  format(database) {
    // Detect continuity errors.
    const errors = Chart.detector3(database);
    errors.shuffle();

    const map = new Map();

    // Find entries in this chart able to eliminate continuity errors. 
    errors.forEach(error => {
      const targets = Chart.corrector3(error, this, listB, database);
//       Chart.sorter3(error, target, [chart1, chart2, this, listB]);
      map.set(error, targets);
    });

    map.share();

    // Eliminate errors.
    for (const [replacement, replacee] of map) {
      if (replacee !== null) {
        this.swap(replacee, replacement);
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
   *                               A   B
   * For example: [20, 18, 16, 14, 11, **]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries having ever charted.
   * @return {Array} entries
   */
  static detector1(chartA, chartB, database) {
    return chartB.difference(chartA).filter(entry => {
      const history = new ChartHistory(...(database.get(entry)?.history || []), chartA.positionOf(entry));
      return history.isAscending();
    });
  }


  /* Finds entries on `chartA` which `entryB` can replace.
   * @param {*} entryA - Entry on `chartA` which has been ascending and has unexpectedly departed from `chartB`.
   *                               A   B
   * For example: [20, 18, 16, 14, 11, **]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @return {Array} entries
   */
  static corrector1(entryA, chartA, chartB) {
    return chartA.difference(chartB).filter(entryB => {
      const delta = chartA.positionOf(entryA) - chartB.positionOf(entryB);

      // TO DO: Detect if entry will be in the position for more than two weeks.
      // For example: [20, 19, 18, 18, *] turns into [20, 19, 18, 18, 18]
      // It seems that it's okay to let this happen because we'd like to reduce the number of debuts.
      // It's expected that a different corrector will correct this kind of behaviour.

      // `entryB`'s position on `chartB` is the same as `entryA`'s position or higher. 
      return delta >= 0;
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
    return chartA.difference(chartB).filter(entry => chartB.positionOf(entry) <= 12);
  }


  /* Finds entries on `chartA` which `entry` can replace.
   * @param {*} entry - Corrupt entry on `chartB` which has debuted in position 12 or a higher position.
   * For example: [21, 10, 6, 2]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries which have ever charted.
   * @return {Array} entries
   */
  static corrector2(entry, chartA, chartB, database) {
    const start = Math.max(12, chartB.positionOf(entry));

    return chartA.slice(start).filter(entry => {
      const [A, B] = [chartA.positionOf(entry), chartB.positionOf(entry)];
      const history = new ChartHistory(...database.get(entry)?.history || [21]);

      //  2   A   B       2   A   B
      // [17, 15, 13]    [17, **, 13]
      if (new ChartHistory(...history, 21, B).isValid() === false) {
        return false;
      }
      
      //  A   B       A   B
      // [11, 16]    [11, **]
      if (history.at(-1) <= 12) {
        return false;
      }

      //  A   B       A   B
      // [**, 18]    [**, 10]
      if (history.at(-1) === 21 && B <= 12) {
        return false;
      }

      return true;
    });
  }


  /* Finds entries on `chartA` which have been static in the same position consecutively for 3 charts.
   * For example: [17, 15, 13, 10, 9, 9, 9]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries having ever charted.
   * @return {Array} entries
   */
  static detector3(database) {
    const errors = new List();

    for (const [entry, history] of database) {      
      // Filter in if `entry` is in the same position for 3 consecutive charts and not for 4 consecutive charts.
      //  1   2   A   B       1   2   A   B
      // [02, 02, 02, 03]    [02, 02, 02, 02]
      if (history.at(-4) !== 21 && history.at(-4) !== 1 && history.slice(-4).isFlat() === false && history.slice(-4, -1).isFlat()) {
        errors.push(entry);
      }
    }

    return errors;
  }


  /* Finds entries on `chartA` which `entryB` can replace.
   * @param {*} entry - Corrupt entry on `chartB` which has debuted in position 12 or a higher position.
   * For example: [**, 10, 6, 2, 2]
   * @param {Chart} chartA
   * @param {Chart} chartB
   * @param {} database - A list of entries having ever charted.
   * @return {Array} entries
   */
  static corrector3(entry, chartA, database) {
    const history = database.get(entry);
    const [A, B] = history.slice(-2);
 
    let [start, end] = [A, B].sort((a, b) => a - b);

    if (history.hasStartedDescending()) {
      //   1   2   A   B
      // [12, 12, 12, 13]
      start = start - 1;

      if (B === 21) {
        //   1   2   A   B
        // [17, 17, 17, **]
        end = start + 1;
      }

      // Decreases the likelyhood that entry starts descending earlier than allowed (minimum 4 charts).
      //        BEFORE                  AFTER
      // [**, 10, 02, 02, 02] = [**, 10, 02, 02, 03]
      if (history.at(-6) === 21) {
        end = end - 1;
      }
    }

    return chartA.slice(start - 1, end).remove(entry).filter(entry => {
      const history = database.get(entry).slice();

      // TO DO: item has only been in chart for less than 3 weeks
      // TO DO: item ascends from chart B 
      // Example: [20, 19, 1, 9]

      // Filter out if `entry` arrives in `chartA`
      // and `positionA` in `entry`'s history causes `entry` to arrive in position 12 or lower.
      //               BEFORE             AFTER
      // Example: [**, **, 14, 07] = [**, **, 12, 07]
      if (history.at(-3) === 21 && history.at(-2) >= 13 && A <= 12) {
        return false;
      }

      // Filter out if `entry` already arrives in `chartA` in position 12 or lower,
      // and `positionA` in `entry`'s history causes `entry` to arrive in an even lower position.
      //               BEFORE             AFTER
      // Example: [**, **, 11, 07] = [**, **, 09, 07]
      if (history.at(-3) === 21 && history.at(-2) <= 12 && A < history.at(-2)) {
        return false;
      }

      // Filter out if `positionA` is 12 or higher and `entry` departs from `chartB`.
      if (A <= 12 && history.at(-2) >= 13 && history.at(-1) === 21) {
        return false;
      }

      // Filter out if `entry` is ascending and `positionA` in `entry`'s history causes `entry` to descend from `chartB`.
      //           1   2   A   B   C
      // Example: [05, 03, 02, 03, 02]
      if (history.isAscending() && A < history.at(-1)) {
        return false;
      }

      history[history.length - 2] = A;

      // Filter out if the difference between `entry`'s position in `chart2` and `positionA` is at least 2 
      // and `entry` starts to descend from `chartB`.
      //           1  2  A  B
      // Example: [6, 5, 1, 8]            19 16 10 19, 19 16 13 19 | 21 18 16 20, 21 18 15 20 | 05 05 04 09, 05 05 06 09 
      if (history.hasStartedDescending() &&
        (history.at(-4) - history.at(-3) <= 2 && chartA.positionOf(entry) - A >= 2 ||
         history.at(-4) - history.at(-3) >= 3 && chartA.positionOf(entry) - A >= 1)) {
        return false;
      }

      // Filter out if `entry` is descending and `positionA` in `entry`'s history causes `entry` to ascend again.
      //           1  2  A  B
      // Example: [3, 4, 2, 7]
      if (history.isValid() === false) {
        return false;
      }

      return true;
    });
  }

  Chart[`sorter${detector}`](entry, values, [chart1, chart2, chartA, chartB]);

  static sorter3(entry, values, database) {
    const position = database.get(entry).at(-2);  // charts[2].positionOf(entry);
    const map = new Map();

    for (const value of values) {
      const history = database.get(value); // new ChartHistory(...charts.map(chart => chart.positionOf(value)));
      const delta1 = Math.abs(history.at(-3) - position); // Math.abs(history[1] - position);
      const delta2 = Math.abs(history.at(-1) - position); // Math.abs(history[3] - position);

      //  1   2   A   B
      // [**, **, 11, 07]  [**, **, 14, 07]
      if (history.at(-3) === 21 && history.at(-2) <= 12) {
        map.set(value, 12);
      }
      // [11, 11, 11, 07]  [11, 11, 09, 07]
      else if (history.slice(-4, -1).isFlat() === true) {
        map.set(value, 11);
      }
      // [15, 12, 12, 18]  [15, 12, 13, 18]
      else if (new ChartHistory(...history.slice(-4, -1), position).hasStartedDescending() === true) {
        map.set(value, 1);
      }
      // [**, **, 17, 14]  [**, **, 16, 14]
      else if (delta1 >= 2) {
        if (delta2 >= 2) {
          map.set(value, 10);
        }
        else {
          map.set(value, delta2 === 1 ? 9 : 8);
        }
      }
      // [**, **, 16, 14]  [**, **, 15, 14]
      else if (delta1 === 1) {

        if (delta2 >= 2) {
          map.set(value, 7);
        }
        else {
          map.set(value, delta2 === 1 ? 6 : 5);
        }
      }
      // [**, **, 16, 14]  [**, **, 14, 14]
      else if (delta1 === 0) {

        if (delta2 >= 2) {
          map.set(value, 4);
        }
        else {
          map.set(value, delta2 === 1 ? 3 : 2);
        }
      }
      else {
        map.set(value, 0);
      }
    }

    values.sort((a, b) => map.get(b) - map.get(a));

    return values;
  }
}
