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

.ytp-pause-overlay-container {
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

  // Ensures that each video track can be currently played. For example, a video track may've been deleted from
  // YouTube. 
  if (response) {
    await verifyAvailability(player);
  }

  alert('The availability of video tracks has been verified');

  // Retrieves the 4 most recent charts, the current chart (this week) and the next chart (next week).   
  const previousCharts = charts.slice(-4);
  const currentChart = createChartFromList(lists.at(-2), usedItems);
  const nextChart = createChartFromList(lists.at(-1), usedItems);

  // Creates a table-like structure consisting of entries and their positions.
  // This is referred to as the database. For example:
  // 
  // ENTRY    | PREVIOUS CHART 4 | PREVIOUS CHART 3 | PREVIOUS CHART 2 | PREVIOUS CHART 1 | CURRENT CHART | NEXT CHART
  // TITLE 1    20                 11                 08                 05                 03              02
  // TITLE 2    18                 10                 06                 02                 02              03
  const database = createDatabase(...previousCharts, currentChart, nextChart);

  // Ensures there are no unwanted chart movements as a result of introducing `currentChart`.
  // For example, an entry exiting the chart from position 10 is an unwanted movement.
  currentChart.format(database);

  // Replaces each entry on the current chart with an item. An item is simply an object that's associated with
  // a video track. An item also contains other useful information.
  const items = currentChart.map((entry, index) => {
    const item = usedItems.find(item => item.title === entry) || unusedItems.random();
    unusedItems.remove(item);
    usedItems.push(item);
    item.position = `${index + 1}`.padStart(2, 0);

    return item;
  });

  // Retrieves a couple of items that serve as this week's extra items. An extra item is an item that's
  // likely to chart in the near future.
  insertExtraItems(items, unusedItems);

  // Creates a playlist by replacing each item with a video track.
  let playlist = createPlaylist(items, intro, sting, advertisement, newVideo);
  // Ensures the playlist has been built accordingly. For example, it verifies that the playlist contains exactly
  // 22 video tracks (20 currently charting video tracks plus 2 extra video tracks).
  validate(playlist);
  // Because of what I believe is a bug from the YouTube A.P.I. the playlist needs to be adjusted a little bit.
  // If this isn't done then some video tracks will finish playing prematurely.
  playlist = adjustPlaylist(playlist);

  window.currentChart = currentChart;

  // Plays each video track on the playlist. 
  while (playlist.length) {
    const video = playlist.shift();
    player.loadVideoById(video);
//     player.setVolume(video.volume);

    const screen = document.querySelector('iframe');
    adjustScreen(screen, video.style);

    const logo = document.querySelector('.logo');
    logo.toggleAttribute('hidden', video.type !== 0);

    const position = document.querySelector('.position');
    position.textContent = video.position;

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
