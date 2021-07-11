const script = document.createElement('script');
script.src = "https://www.youtube.com/iframe_api";
document.body.append(script);

const adds = [19, 18, 16, 14, 12, 11, 9, 8, 6, 4, 2, 1];
const playlist = [];

function encode(string) {
  const codes = Array.from(string).map(e => e.charCodeAt(0) + 1);
  return String.fromCharCode(...codes);
}

function random(max) {
  return Math.floor(Math.random() * max) + 1;
}

function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player');
  player.addEventListener('onReady', onReady);
}

async function onReady(event) {
  await verifyAvailability(event);
  
  const chart = document.querySelector('table');
  const items = parse(chart);
  const musicVideos = associate(items);
  
  console.log(musicVideos);
}

function parse(chart) {
  const artists = Array.from(chart.querySelectorAll('td:nth-of-type(3)')).map(artist => artist.textContent);
  const titles =  Array.from(chart.querySelectorAll('td:nth-of-type(4)')).map(title => title.textContent);
  const items = [];

  for (let artist of artists) {
    artist = encode(artist);
    const title = encode(titles.shift());
    items.push([artist, title]);
  }

  return items;
}

function associate(items) {
  items.forEach([artist, title] => {
    let musicVideo = musicVideos.find(item => item.match === encode(title));
    
    if (!musicVideo) {
      musicVideo = pool[random(pool.length - 1)];
      musicVideo.match = encode(cell);
      // Remove any duplicates of 'musicVideo' from the pool.
      pool = pool.filter(item => item !== musicVideo);
    }
    
    musicVideos.push(musicVideo);
    
    const position = Math.abs(index - 20);
    musicVideo.position = ("0" + position).substr(-2);

    playlist.push(intro, musicVideo);
    // If the music video must end prematurely.
    musicVideo.endSeconds && playlist.push(musicVideo);
    // If an add must play immediately after the music video. 
    adds.includes(position) && playlist.push(add, add);
    
    target.loadVideoById(playlist.shift());
  }); 
  
 

async function verifyAvailability({target}) {
  const player = target;
  const videos = [add, intro].concat(musicVideos, pool);

  function verifier(resolve, video) {
    // Notify if this music video cannot be played.
    player.getPlayerState() !== 1 && console.log(video);
    // Move on to the next music video.
    resolve();
  }
  
  let promise;
  
  for (const video of videos) {
    // Attempt to play this video.
    player.loadVideoById(video);
    // Wait 5 seconds and verify if this video has loaded and is playing.
    promise = await new Promise(resolve => setTimeout(verifier, 5000, resolve, video));
  }

  return promise;
}
  
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
