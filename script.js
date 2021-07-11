const script = document.createElement('script');
script.src = "https://www.youtube.com/iframe_api";
document.body.append(script);

function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player');
  player.addEventListener('onReady', onReady);
}

async function onReady() {
  console.log('Hola mundo!');
}
