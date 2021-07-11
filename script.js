function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player');
  player.addEventListener('onReady', onReady);
}

async function onReady() {
  console.log('Hola mundo!');
}
