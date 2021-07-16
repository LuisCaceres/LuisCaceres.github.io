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
  

  // For each item `item` in `illegalEntries`:
  for (const illegalItem of illegalItems) {
    const reserve = new List();
  
    while (replacees.length) {
      debugger;
      const replacee = replacees.random();
      const positionIllegalItem = nextList.indexOf(illegalItem);
      const positionReplacee = currentList.indexOf(replacee);
      const difference = positionReplacee - positionIllegalItem;
      
      if (difference > 1) {
        currentList.replace(replacee, illegalItem);
      }
      else {
        reserve.push(replacee);
      }
      
      replacees.remove(replacee);
    }

    replacees.push(...reserve);
  }

  return currentList;
}


/*
 *
 */
function associate(list, charted, uncharted) {
  const chart = list.map((match, index) => {
    let entry = charted.find(entry => entry.match === match);
    
    if (!entry) {
      entry = uncharted.random();
      entry.match = encode(match);
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
function generatePlaylist(chart, sting, advertisement) {
  const playlist = [];
  const pattern = [1, 2, 4, 6, 8, 9, 11, 12, 14, 16, 18];

  chart.forEach((entry, index) => {
    playlist.push(sting, entry);
    // If the music video must end prematurely.
    entry.endSeconds && playlist.push(entry);
    // If the music video is followed by an add. 
    pattern.includes(index) && playlist.push(advertisement, advertisement);
  });
  
  playlist.push(sting);
  return playlist;
}
