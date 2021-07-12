const adds = [19, 18, 16, 14, 12, 11, 9, 8, 6, 4, 2, 1];
const playlist = [];


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

/*
 *
 */
async function onReady(event) {
  const player = event.target;
  
  await verifyAvailability(player);
  
  const tables = {
    current: document.querySelector('table'),
    next: null,
  }
  
  const charts = {
    current: parse(tables.current).map(([artist, title]) => [encode(artist), encode(title)]),
    // next: parse(tables.next),
  }

  const items = {
    current: associate(charts.current),
    // next: associate(charts.next),
  };

  // charts.current = format(items.current, items.next, items);
  
  // const musicVideos = associate(charts.current);
  player.loadVideoById(playlist.shift());
}

/*
 *
 */
function parse(chart) {
  const artists = Array.from(chart.querySelectorAll('td:nth-of-type(5)')).map(artist => artist.textContent);
  const titles =  Array.from(chart.querySelectorAll('td:nth-of-type(4)')).map(title => title.textContent);
  const items = [];

  for (let artist of artists) {
    items.push([artist, titles.shift()]);
  }

  items.reverse();
  return items;
}

/*
 *
 */
function associate(items, musicVideos, pool) {
  const videos = [];
  
  items.forEach(([artist, title], index) => {
    let musicVideo = musicVideos.find(musicVideo => musicVideo.match === title);
    
    if (!musicVideo) {
      musicVideo = pool[random(pool.length) - 1];
      musicVideo.match = encode(title);
      // Remove any duplicates of 'musicVideo' from the pool.
      pool = pool.filter(item => item !== musicVideo);
    }
    
    videos.push(musicVideo);
  });
  
  return videos;
}

 
   /* const position = Math.abs(index - 20);
    musicVideo.position = ("0" + position).substr(-2);

    playlist.push(intro, musicVideo);
    // If the music video must end prematurely.
    musicVideo.endSeconds && playlist.push(musicVideo);
    // If an add must play immediately after the music video. 
    adds.includes(position) && playlist.push(add, add); */

/*
 *
 */
async function verifyAvailability(player) {
  const videos = [add, intro];//.concat(musicVideos, pool);

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
