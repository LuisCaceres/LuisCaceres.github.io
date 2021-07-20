/*

const style = document.createElement('style');
style.textContent = `
.annotation {
    display: none !important;
}

.ytp-ad-image-overlay {
    display: none !important;
}

.ytp-ce-element {
    display: none !important;
}

.ytp-chrome-bottom {
    display: none !important;
}

.ytp-show-cards-title {
    display: none !important;
}

.ytp-spinner {
    display: none !important;
}

`;
document.head.append(style);

*/


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
  const player = event.target;
  
  const response = confirm('Would you like to verify the availability of videos?');

  if (response) {
    await verifyAvailability(player);
  }
    
  alert('The availability of videos has been verified');
  
  const lists = {
    current: new List(...currentList),
    next: new List(...nextList),
  };
  
  const list = format(lists.current, lists.next, charted); 

  const { chart, foo, baz } = associate(list, charted, new List(...uncharted));
  
  playlist = generatePlaylist(chart, sting, advertisement);
  player.loadVideoById(playlist.shift());
}


/*
 *
 */
async function verifyAvailability(player) {
  const videos = [advertisement, sting].concat(charted, uncharted);

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
    iframe.style.left = nextVideo.left || '';
    iframe.style.position = nextVideo.position || '';
    iframe.style.width = nextVideo.width;
 
    const logo = document.querySelector('.logo');
    logo.toggleAttribute('hidden', nextVideo.type !== 0);

    const position = document.querySelector('.position');
    position.textContent = nextVideo.position;

    const player = target;
    player.loadVideoById(nextVideo);
  }
}
