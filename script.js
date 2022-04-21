//global constants
let clueHoldTime = 1000; //how long to play the clue
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var timeleft = 10;
let timeSecond = 20;
const timeH = document.querySelector(".gameTime");
let countDown;

// audio
var successAudio = new Audio("https://cdn.glitch.global/ef9a0f9e-9ee3-4b5a-9b94-370642b0237f/successSound.wav?v=1650346030970");
var failureAudio = new Audio("https://cdn.glitch.global/ef9a0f9e-9ee3-4b5a-9b94-370642b0237f/335906__littlerainyseasons__fail.mp3?v=1650501003561");

//problems start here
function time() {
  countDown = setInterval(() => {
    if (timeSecond < 10) {
      if (timeSecond <= 5) {
        timeH.innerHTML = `<h1 style="color:red">00:0${timeSecond}s</h1>`;
      } else {
        timeH.innerHTML = `<h1>00:0${timeSecond}s</h1>`;
      }
    } else {
      timeH.innerHTML = `<h1>00:${timeSecond}s</h1>`;
    }
    if (timeSecond === 0) {
      //to stop the game from playing
      //set game to false and timeSecond to 0
      gamePlaying = false;
      timeSecond = 0;
      clueHoldTime = 1000;
      clearInterval(countDown);
      timeH.innerHTML = `<h1 style="color:red">Time Out!</h1>`;
      failureAudio.play();
      document.getElementById("startBtn").classList.remove("hidden");
      document.getElementById("stopBtn").classList.add("hidden");
    }
    timeSecond--;
  }, 1000);
}

var pattern = [];
//setting array with radom values
//round number to closest integer
for (var i = 1, t = 6; i < t; i++) {
  pattern.push(Math.round(Math.random() * t));
}
document.write(pattern);

// var tonePlaying = false;
var volume = 0.5; //must be betwqeen 0.0 and 1.0
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  //buttons to hide and appear when pressed

  playClueSequence();
  time();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearInterval(countDown);
  //buttons to hide and appear when pressed
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 580.2,
  6: 690.1,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn]; //playing the tones for each of the indices in the pattern array
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//two simple functions for lighting or clearing a button:
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    //if condition of game is on.
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

let totallLost = 0;

function guess(btn) {
  if (!gamePlaying) {
    return;
  }
  if (btn == pattern[guessCounter]) {
    //if user 'guessed' the correct button, continue
    if (guessCounter == progress) {
      //if user guessed all buttons in pattern up to progress. Progress keeps
      //track number of buttons and get incremented each time user guessed all correct buttons in
      //sequence.
      if (progress != pattern.length - 1) {
        progress++;
        timeSecond = 20;
        playClueSequence(); // if user has not guessed all buttons, continue
      } else {
        winGame(); //if the end of pattern.length-1 is reached, all incices (levels) have been
        //passed and a win is achieved.
      }
    } else {
      guessCounter++;
    }
  } else {
    totallLost++;
    document
      .querySelector(`.singleLive${totallLost}`)
      .setAttribute("style", "color:#334155");
    if (totallLost === 2) {
      document
        .querySelector(`.singleLive${totallLost + 1}`)
        .setAttribute("style", "color:#ef4444");
    }
    playClueSequence();
    totallLost === 3 && loseGame(); //if none of the above holds, user has incorrectly guessed!
  }
}

//Lets Demonstrate!

function loseGame() {
  stopGame();
  // alert("Game Over. You lost.");
  timeH.innerHTML = `<h1 style="color:red">You Lost!</h1>`;
  failureAudio.play();
}

function winGame() {
  stopGame();
  // alert("Game Over. You Won.");
  timeH.innerHTML = `<h1 style="color:green">You Win!🏆</h1>`;
  successAudio.play();
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
