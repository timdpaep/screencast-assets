/**
 * The Webaudio API
 * More Information: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
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

// FIX The AudioContext was not allowed to start
// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio

/**
 * Oscillator
 */

let oscillator = null;
let oscAudioContext = null;

const initOscAudioContext = () => {
  if(!oscAudioContext) oscAudioContext = new AudioContext();
  if(!oscillator) {
    oscillator = oscAudioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(440, oscAudioContext.currentTime);
  }
}

const startOscillator = async () => {
  initOscAudioContext();
  oscillator.start();
  oscillator.connect(oscAudioContext.destination);
}

const stopOscillator = async () => {
  oscillator.disconnect(oscAudioContext.destination);
  oscillator = null;
  oscAudioContext = null;
}

const changeFreq = (e) => {
  oscillator.frequency.setValueAtTime(e.target.value, oscAudioContext.currentTime);
}

btnStartOscillator.addEventListener('click', startOscillator);
btnStopOscillator.addEventListener('click', stopOscillator);
sliderFreq.addEventListener('input', changeFreq); // Update the current slider value (each time you drag the slider handle)

/**
 * Playing a file
 */

let audioContext = null;
let audio = null;
let gainNode = null;
let pannerNode = null;
let audioSource = null;

const initAudioContext = () => {
  if(!audioContext) audioContext = new AudioContext();
  if(!audio) audio = new Audio('./audio/file-example.wav');
  if(!gainNode) gainNode = audioContext.createGain(); // create gain
  if(!pannerNode) pannerNode = new StereoPannerNode(audioContext, { pan: 0 }); // create panner
  if(!audioSource) {
    audioSource = audioContext.createMediaElementSource(audio); // get audiosource
    audioSource.connect(gainNode) // connecting the dots
               .connect(pannerNode)
               .connect(audioContext.destination);
  }
}

const startAudio = async () => {
  initAudioContext();
  audio.play(); // play the audio
}

const stopAudio = async() => {
  audio.pause();
  audio.currentTime = 0;
}

const changeVolume = (e) => gainNode.gain.value = e.target.value;
const pan = (e) => pannerNode.pan.value = e.target.value;

btnStartAudio.addEventListener('click', startAudio);
btnStopAudio.addEventListener('click', stopAudio);
sliderVolume.addEventListener('input', changeVolume);
sliderPanner.addEventListener('input', pan);
