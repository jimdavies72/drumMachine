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

// play audio function
let playAudio = (soundPath) => {
  let audio = new Audio(soundPath);
  audio.play();
}

// Set up button array for clicks
const btns = document.querySelectorAll(".sound-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    let soundPath = `./media/${btnClass[1]}.wav`
    playAudio(soundPath);
    
  });
});


// Get the keypresses
document.addEventListener("keypress", (e) =>{
  for (let i = 0; i < soundsArray.length; i++){
    if( soundsArray[i][0].toUpperCase() == e.key.toUpperCase()){
      //play audio
      let soundPath = `./media/${soundsArray[i][1]}.wav`;
      playAudio(soundPath)
    }
  }
})
