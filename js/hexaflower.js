function log(o){
  console.log(o);
}

function appendBody(element) {

  return document.body.appendChild(element);
}

function createElementAlt(tag) {

  return document.createElement(tag);
}

function html5Support(tag = 'canvas') {

  return createElementAlt(tag) ? true : false; 
}

function isChrome() {

  return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
}

function playAudio(src, autoplay = false, loop = true, hidden = true, controls = true){
  id = 'hexaflower-player';
  if(html5Support()){
    audio = document.querySelector('#' + id);
    if (!audio) {
      audio = createElementAlt('audio');
    }

    audio.id = id;
    audio.autoplay = autoplay;
    audio.loop = loop;
    audio.hidden = hidden;
    audio.controls = controls;
    audio.src = src;
    
  }

  return appendBody(audio);
}

function playAudioInit(src, autoplay = false, loop = true, hidden = true, controls = true) {
  if (isChrome()) {
    layer = createElementAlt('div');
    layer.style = 'left: 0px; top: 0px;width: 100%; height: 100%; opacity: 0.3; background-color: #D8D8D8;position: fixed;';
    layer.onclick = function () {
      playAudio(src, autoplay , loop , hidden , controls );
      this.remove();
    };

    return appendBody(layer);
  } else {
    return playAudio(src, autoplay , loop , hidden , controls ); 
  }  
}

function playAudioRandom(list = audio_list.audios, autoplay = false, loop = true, hidden = true, controls = true) {
  i = Math.floor((Math.random() * list.length - 1) + 1);
  path = './audios/' + list[i];
  // alert('We use cookies. :kiss:');

  if (playAudioInit(path, autoplay, loop, hidden, controls)) {
    return true;
  } else {
    return false;
  }
}