let gameSeq = [];
let userSeq = [];
let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");
let scoreBoard = document.createElement("h3");
document.body.insertBefore(scoreBoard, document.querySelector(".btn-container"));
scoreBoard.innerText = `Highest Score: ${highScore}`;

// 🎵 Frequencies for each button
const sounds = {
  green: 329.63,   // E
  red: 261.63,     // C
  yellow: 220.00,  // A
  blue: 164.81,    // E low
  wrong: 110.00    // buzz
};

function playTone(freq, duration = 300, delay = 0) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = freq;

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // Play with delay (so we can chain tones)
  oscillator.start(audioCtx.currentTime + delay / 1000);
  gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime + delay / 1000);
  oscillator.stop(audioCtx.currentTime + (delay + duration) / 1000);
}

// 🎵 Melody played when player completes a level
function playLevelUpMelody() {
  playTone(261.63, 200, 0);   // C
  playTone(329.63, 200, 200); // E
  playTone(392.00, 300, 400); // G
}

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn, color) {
  btn.classList.add("flash");
  playTone(sounds[color]); // ✅ play tone
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn, color) {
  btn.classList.add("userflash");
  playTone(sounds[color]); // ✅ play tone
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let RandmIndx = Math.floor(Math.random() * 4);
  let randmColor = btns[RandmIndx];
  let randmBtn = document.querySelector(`.${randmColor}`);

  gameSeq.push(randmColor);
  console.log("Game sequence:", gameSeq);

  gameFlash(randmBtn, randmColor);
}

function checkAns() {
  let idx = userSeq.length - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      // ✅ play melody when level is completed
      playLevelUpMelody();
      setTimeout(levelUp, 1000);
    }
  } else {
    playTone(sounds.wrong, 600); // ✅ error buzz
    if (level - 1 > highScore) {
      highScore = level - 1;
      scoreBoard.innerText = `Highest Score: ${highScore}`;
    }

    h2.innerText = "Game Over! Press Any Key To Restart";
    document.body.style.backgroundColor = "red";
    setTimeout(function () {
      document.body.style.backgroundColor = "white";
    }, 200);

    resetGame();
  }
}

function btnPress() {
  let btn = this;
  let userColor = btn.getAttribute("id");

  userFlash(btn, userColor);
  userSeq.push(userColor);

  checkAns();
}

function resetGame() {
  started = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
}

let btnAll = document.querySelectorAll(".btn");
for (let btn of btnAll) {
  btn.addEventListener("click", btnPress);
}
