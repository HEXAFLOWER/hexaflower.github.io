function log(o){
  console.log(o);
}

function html5Support(tag = 'canvas') {

  return document.createElement(tag) ? true : false; 
}

function playAudio(src, autoplay = false, loop = true, hidden = false, controls = true){
  id = 'hexaflower-player';
  if(html5Support()){
    audio = document.querySelector('#' + id);
    if (!audio) {
      audio = document.createElement('audio');
    }

    audio.id = id;
    audio.autoplay = autoplay;
    audio.loop = loop;
    audio.hidden = hidden;
    audio.controls = controls;
    audio.src = src;
    
  }

  return document.body.appendChild(audio);
}

function playAudioRandom(list = audio_list.audios, autoplay = false, loop = true, hidden = false, controls = true) {
  i = Math.floor((Math.random() * list.length - 1) + 1);
  path = './audios/' + list[i];
  // alert('We use cookies. :kiss:');

  if (playAudio(path, autoplay, loop, hidden, controls)) {
    return true;
  } else {
    return false;
  }
}