var keySequence = '';

document.addEventListener('keydown', function(event) {
  var key = event.key;

  if (keySequence.length >= 7) {
    keySequence = '';
  }

  if (key === '5' || key === '2' || key === '3'|| key === '6'|| key === '8') {
    keySequence += key;

    if (keySequence === '5552368') {
       
        var audio = new Audio('Audio/ghost.mp3');
        audio.play();
        keySequence = '';
    }
  } else {
    keySequence = '';
  }
});