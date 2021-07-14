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
    return new List(...list.filter(([a, b]) => !this.find(([c, d]) => b === d)));
  }
  

  /*
   *
   */
   intersection(list) {
    return new List(...this.filter(([a, b]) => list.find(([c, d]) => b === d)));
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
    const index = this.findIndex(({artist, title}) => artist === item.artist && title === item.title);
    this.splice(index, 1);
  }
 
  
  /*
   *
   */
  replace(replacee, replacement) {
    for (const item of this) {
      if (item[0] === replacee[0] && item[1] === replacee[1]) {
        item[0] = replacement[0];
        item[1] = replacement[1];
        break;
      }
    }
  }
 
}


/*
 *
 */
function random(max) {
  return Math.floor(Math.random() * max) + 1;
}


/*
 *
 */
function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player');
  player.addEventListener('onReady', onReady);
  player.addEventListener('onStateChange', onStateChange);
}


let playlist;


/*
 *
 */
async function onReady(event) {
//   const player = event.target;
  
//   await verifyAvailability(player);
  
//   const tables = {
//     current: document.querySelector('table'),
//     next: null,
//   };
  
//   const lists = {
//     current: parse(tables.current).map(([artist, title]) => [encode(artist), encode(title)]),
//     next: parse(tables.next).map(([artist, title]) => [encode(artist), encode(title)]),
//   };
  
//   const list = format(lists.current, lists.next, charted); 

//   const { chart } = associate(list, charted, uncharted);
  
//   playlist = generatePlaylist(chart, sting, advertisement);
//   player.loadVideoById(playlist.shift());
}

/*
 *
 */
function parse(table) {
  const artists = Array.from(table.querySelectorAll('td:nth-of-type(5)')).map(artist => artist.textContent);
  const titles =  Array.from(table.querySelectorAll('td:nth-of-type(4)')).map(title => title.textContent);
  const list = new List();

  for (let artist of artists) {
    list.push([artist, titles.shift()]);
  }

  return list;
}



function format(currentList, nextList, database) {
  // Iterate through next week's list and verify if there are any new items.
  // Let `newItems` be a list of such items.
  const newItems = currentList.difference(nextList);
  // Verify if there are any new items below position 13.
  // Let `illegalItems` be a list of such items.
  const illegalItems = newItems.intersection(nextList.filter((item, index) => index + 1 <= 12));

  if (!illegalItems.length) {
    return currentList;
  }
  
  // Iterate through next week's chart and verify which items have dropped out.
  // Let `expiredItems` be a list of such items.
  const expiredItems = nextList.difference(currentList)
    // For each item `item` in `expiredItems`:  
    .filter(([artist, title]) => {
      const {history} = database.find(item => item.match === title);
      return history.at(-1) > 12;
    });

  // For each item `item` in `illegalEntries`:
  for (const illegalItem of illegalItems) {
      const expiredItem = expiredItems.random();
      currentList.replace(expiredItem, illegalItem);
      expiredItems.remove(expiredItem);
  }

  return currentList;
}


/*
 *
 */
function associate(chart, charted, uncharted) {
  chart = chart.map(([artist, title], index) => {
    let entry = charted.find(entry => entry.match === title);
    
    if (!entry) {
      entry = uncharted[random(uncharted.length) - 1];
      entry.match = encode(title);
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


/*
 *
 */
async function verifyAvailability(player) {
  const videos = [advertisement, sting];//.concat(musicVideos, pool);

  function verifier(resolve, video) {
    // Notify if this music video cannot be played.
    player.getPlayerState() !== 1 && console.log(video);
    // Move on to the next music video.
    resolve();
  }
  
  for (const video of videos) {
    // Attempt to play this video.
    player.loadVideoById(video);
    // Wait 5 seconds and verify if this video has loaded and is playing.
    await new Promise(resolve => setTimeout(verifier, 5000, resolve, video));
  }
}

/*
 *
 */
function onStateChange({data, target}) {
  if (data === YT.PlayerState.ENDED) {
    const nextVideo = playlist.shift();

    const iframe = document.querySelector('iframe');
    iframe.style.width = nextVideo.width;

    const logo = document.querySelector('.logo');
    logo.toggleAttribute('hidden', nextVideo.type !== 0);

    const position = document.querySelector('.position');
    position.textContent = nextVideo.position;

    const player = target;
    player.loadVideoById(nextVideo);
  }
}
