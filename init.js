// First it is known as a list. A list consists of elements. 
// This list is then formatted to attempt to eliminate continuity errors.
// Then it is known as a chart. A chart consists of entries.
// Finally it is known as a playlist. A playlist consists of tracks.



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

  const response = confirm('Would you like to verify the availability of video tracks?');

  if (response) {
    await verifyAvailability(player);
  }

  alert('The availability of video tracks has been verified');

  const previousCharts = charts.slice(-4);
  const currentChart = createChartFromList(lists.at(-2), usedItems);
  const nextChart = createChartFromList(lists.at(-1), usedItems);

  const database = createDatabase(...previousCharts, currentChart, nextChart);

  currentChart.format(database);

  const items = currentChart.map((entry, index) => {
    const item = usedItems.find(item => item.title === entry) || unusedItems.random();
    unusedItems.remove(item);
    usedItems.push(item);
    item.position = `${index + 1}`.padStart(2, 0);

    return item;
  });

  insertExtraItems(items, unusedItems);

  let playlist = createPlaylist(items, intro, sting, advertisement, newVideo);
  validate(playlist);
  playlist = adjustPlaylist(playlist);

  window.currentChart = currentChart.reverse();

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
  const videos = new Set([advertisement, sting].concat(Array.from(usedItems.values()), unusedItems));

  for (const video of videos) {
    // Attempt to play this video.
    player.loadVideoById(video);
    // Wait 5 seconds.
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Notify if this music video cannot be played.
    player.getPlayerState() !== 1 && console.log(video);
  }
}
