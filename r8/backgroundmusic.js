myAudio = new Audio("audio/disturbingTune.mp3");
myAudio.addEventListener(
  "ended",
  function() {
    this.currentTime = 0;
    this.play();
  },
  false
);
myAudio.play();
