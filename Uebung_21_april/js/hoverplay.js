

var playBtn = document.getElementById('play'),
resetBtn = document.getElementById('reset'),
Mate1227 = document.getElementById('Mate1227')
  audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
// do whatever
audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
Mate1227.pause();
Mate1227.currentTime = 0;
}, false);

resetBtn.addEventListener('mouseover', function() {
  Mate1227.play();
}, false);

resetBtn.addEventListener('mouseleave', function() {
Mate1227.pause();
Mate1227.currentTime = 0;
}, false);