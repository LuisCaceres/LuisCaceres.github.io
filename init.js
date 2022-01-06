//

// Initially known as a list.
// Then it is known as a chart.
// Then it is known as a playlist.
// Then a playlist is adjusted.


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
async function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player');

  await new Promise(resolve => {
    player.addEventListener('onReady', resolve); 
  }); 

  const response = confirm('Would you like to verify the availability of videos?');

  if (response) {
    await verifyAvailability(player);
  }

  alert('The availability of videos has been verified');

  const previousChart = charts.at(-1);
  const [currentList, nextList] = lists.slice(-2);

  const database = createDatabase(previousChart, currentList, nextList, entries);


  function createDatabase(previousChart, currentList, nextList, items) {
    const map = new Map();

    for (const entry of previousChart) {
      // trim history to find out whether 
      map.set(entry, items.find(item => item.title === entry);
    }
 
    currentList.concat(nextList)
      .map(encode => items.find(item => item.match === encode)?.title || encode)
      .forEach(title => {
        if (map.has(title) === false) {
          map.set(title, {history: [21, currentList.indexOf(), nextList()]})
        }
      });

    return map();
  }
    
    

  currentList.format(nextList, database);

  const chart = createChart(currentList, charted, uncharted); /* associate(list, charted, uncharted); */
  insertExtraItems(result.chart, result.uncharted);

  let playlist = createPlaylist(new List(...result.chart), intro, sting, advertisement, newVideo);
  playlist = adjustPlaylist(playlist);
  validate(playlist);

  while (playlist.length) {
    const video = playlist.shift();
    player.loadVideoById(video);
//     player.setVolume(video.volume);

//     const screen = document.querySelector('iframe');
//     adjustScreen(screen, video.style);

//     const logo = document.querySelector('.logo');
//     logo.toggleAttribute('hidden', video.type !== 0);

//     const position = document.querySelector('.position');
//     position.textContent = video.position;

    await new Promise(resolve => {
      player.addEventListener('onStateChange', function listener({data}) {
        if (data === YT.PlayerState.ENDED) {
          resolve();
          player.removeEventListener('onStateChange', listener);
        }
      });
    });
  }
}


/*
 *
 */
async function verifyAvailability(player) {
  const videos = new Set([advertisement, sting].concat(Array.from(charted.values()), uncharted));

  for (const video of videos) {
    // Attempt to play this video.
    player.loadVideoById(video);
    // Wait 5 seconds.
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Notify if this music video cannot be played.
    player.getPlayerState() !== 1 && console.log(video);
  }
}
