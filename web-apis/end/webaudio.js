/**
 * The Webaudio API
 */

/**
 * Get controls
 */

const btnStartOscillator = document.getElementById("btnStartOscillator");
const btnStopOscillator = document.getElementById("btnStopOscillator");
const sliderFreq = document.getElementById("sliderFreq");

const btnStartAudio = document.getElementById("btnStartAudio");
const btnStopAudio = document.getElementById("btnStopAudio");
const sliderPanner = document.getElementById("sliderPanner");
const sliderVolume = document.getElementById("sliderVolume");

/**
 * Create the audio context
 */

const audioContext = new AudioContext();

/**
 * The origins of sound, an oscillator
 */

// create a new oscillator
const oscillator = audioContext.createOscillator();
oscillator.type = "sine";
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
oscillator.connect(audioContext.destination);

// connect oscillator to our speakers
btnStartOscillator.addEventListener('click', async () => {
  if(audioContext.state !== 'running') { await audioContext.resume(); }
  oscillator.start()
});
btnStartOscillator.addEventListener('click', () => oscillator.stop());

// Update the current slider value (each time you drag the slider handle)
sliderFreq.addEventListener('input', function() {
  oscillator.frequency.setValueAtTime(this.value, audioContext.currentTime);
});

/**
 * Playing a file
 */

const audio = new Audio('./audio/file-example.wav');
const source = audioContext.createMediaElementSource(audio);
const gainNode = audioContext.createGain();
const panner = new StereoPannerNode(audioContext, { pan: 0 });

// connecting the stuff
source.connect(gainNode)
      .connect(panner)
      .connect(audioContext.destination);

// btnStartAudio
btnStartAudio.addEventListener('click', async () => {
  if(audioContext.state !== 'running') { await audioContext.resume(); }
  audio.play();
});

// btnStopAudio
btnStopAudio.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// sliderVolume
sliderVolume.addEventListener('input', function() {
  gainNode.gain.value = this.value;
});

// sliderPanner
sliderPanner.addEventListener('input', function() {
  panner.pan.value = this.value;
});
