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
    current: associate(charts.current, musicVideos, pool),
    // next: associate(charts.next),
  };
  
  const playlist = generatePlaylist(current.items);

  // charts.current = format(items.current, items.next, items);
  
  // const musicVideos = associate(charts.current);
  player.loadVideoById(playlist.shift());
}

/*
 *
 */
function parse(table) {
  const artists = Array.from(table.querySelectorAll('td:nth-of-type(5)')).map(artist => artist.textContent);
  const titles =  Array.from(table.querySelectorAll('td:nth-of-type(4)')).map(title => title.textContent);
  const chart = [];

  for (let artist of artists) {
    items.push([artist, titles.shift()]);
  }

  items.reverse();
  return chart;
}


/*
 *
 */
function associate(chart, videos, pool) {
  chart = chart.map(([artist, title], index) => {
    let video = videos.find(video => video.match === title);
    
    if (!video) {
      video = pool[random(pool.length) - 1];
      video.match = encode(title);
      // Remove any duplicates of 'video' from the pool.
      pool = pool.filter(item => item !== video);
      videos.push(video);
    }
    
    video.position = ("0" + (index + 1)).substr(-2);
    return video;
  });
    
  return {
    chart,
    videos,
    pool,
  };
}


/*
 *
 */
function generatePlaylist(chart) {
  const advertisement = {endSeconds: 10, videoId: 'caaddLZhLoY', width: '83vw'};
  const sting = {videoId: 'YoqgOOQwEqI', width: '83vw'};
  
  const playlist = [];
  const pattern = [2, 3, 5, 7, 9, 10, 12, 13, 15, 17, 19, 20];

  chart.forEach((entry, index) => {
    playlist.push(sting, entry);
    // If the music video must end prematurely.
    entry.endSeconds && playlist.push(entry);
    // If the music video is followed by an add. 
    pattern.includes(index) && playlist.push(advertisement, advertisement);
  });
  
  return playlist;
}


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
