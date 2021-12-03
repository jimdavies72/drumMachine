const soundsArray = [
  boom = ["A","boom", "Boom"],
  clap = ["S", "clap", "Clap"],
  hihat = ["D", "hihat", "Hi-hat"],
  kick = ["F", "kick", "Kick"],
  openhat = ["G", "openhat", "Open-hat"],
  ride = ["H", "ride", "Ride"],
  snare = ["J", "snare", "Snare"],
  tink = ["K", "tink", "Tink"],
  tom = ["L", "tom", "Tom"],
];

const soundbar = document.querySelector(".soundbar")
const drumKit = document.getElementById("drum-kit")
const defaultMediaPath = "./media/"

//populate the sound bar
for(let i = 0; i < soundsArray.length; i++){
  let html = `
  <div class="sound">
    <h4 class="sound-key">${soundsArray[i][0]}</h4>
    <button class="sound-btn ${soundsArray[i][1]}">
      ${soundsArray[i][2]}
    </button>
  </div>
  `;
  soundbar.innerHTML += html;
}

// Set up button array for clicks
const btns = document.querySelectorAll(".sound-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    playDrum(btnClass[1]);
  });
});

// Get the keypresses
document.addEventListener("keypress", (e) =>{
  for (let i = 0; i < soundsArray.length; i++){
    if( soundsArray[i][0].toUpperCase() == e.key.toUpperCase()){
      playDrum(soundsArray[i][1]);
    }
  }
})

const playDrum = (sound) => {
  //play audio
  playAudio(`${sound}.wav`);
  //shake the boss drum
  shakeDrumKit(500);
}

// play audio function
let playAudio = (soundPath) => {
  let audio = new Audio(`${defaultMediaPath}${soundPath}`);
  // reset the audio play position to 0 to allow for key overlap
  audio.currentTime = 0;
  audio.play();
}

// shake the drum kit image
const shakeDrumKit = (shakeLength) => {
  drumKit.classList.add("shake");
  setTimeout(() => {
    drumKit.classList.remove("shake");
  }, shakeLength);
}