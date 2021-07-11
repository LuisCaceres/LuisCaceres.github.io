const script = document.createElement('script');
script.src = "https://www.youtube.com/iframe_api";
document.body.append(script);

function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player');
  player.addEventListener('onReady', onReady);
}

async function onReady(event) {
  await verifyAvailability(event);
  console.log('Hello world!');
}

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
