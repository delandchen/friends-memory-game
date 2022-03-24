// Global Variables
let progress = 0;
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;
let guessCounter = 0;
let wrongGuessCounter = 0;
let time = 120;

// Global Const
const clueHoldTime = 500;
const cluePauseTime = 222;
const nextClueWaitTime = 800;

// Game Functions
const getPattern = (dif) => {
    const arr = [];
    let btn;

    // Randomly append one of the buttons to the pattern dif number of times
    for (let i = 0; i < dif; i++) {
        btn = (Math.floor((Math.random() * 5)));

        switch (btn) {
            case 0:
                arr.push("monica");
                break;
            case 1:
                arr.push("rachel");
                break;
            case 2:
                arr.push("ross");
                break;
            case 3:
                arr.push("chandler");
                break;
            case 4:
                arr.push("joey");
                break;
        }
    }

    return arr;
}

const startGame = () => {
    // Getting the simon pattern
    let difficulty = document.getElementById("difficulty").value;
    pattern = getPattern(difficulty);

    // Initializing variables for start
    gamePlaying = true;
    progress = 0
    wrongGuessCounter = 0;

    // Initializing HTML elements
    document.getElementById("startbtn").classList.add("hidden");
    document.getElementById("stopbtn").classList.remove("hidden");
    document.getElementById("time").innerHTML = time;

    // Start timer countdown and begin playing the clues
    interval = setInterval(decrementTimer, 1000);
    playClueSequence(pattern.slice(0, progress+1));
}

const stopGame = () => {
    gamePlaying = false;
    time = 120;
    clearInterval(interval);

    // Reset elements 
    document.getElementById("startbtn").classList.remove("hidden")
    document.getElementById("stopbtn").classList.add("hidden");
    document.getElementById("s1").classList.remove("strike");
    document.getElementById("s2").classList.remove("strike");
    document.getElementById("s3").classList.remove("strike");
}

const lostGame = () => {
    stopGame();
    alert("Game Over. You Lost");
}

const wonGame = () => {
    stopGame();
    alert("You won!");
}


const guess = (btn) => {
    console.log("user guessed: " + btn);

    if (!gamePlaying) {
        return;
    }

    // If the guess is correct
    if (pattern[guessCounter] == btn) {
        // If the # of correct guesses is equal to the # of current clues then:
        if (guessCounter == progress) { 
            // If the player has correctly guessed every pattern
            if (progress == pattern.length - 1) { 
                wonGame();
            }
            // Else, play next sequence
            else {
                progress += 1;
                playClueSequence(pattern.slice(0, progress+1));
            }
        }
        // Continue with current sequence
        else {
            guessCounter += 1;
        }
    }
    // If the guess is wrong
    else {
        wrongGuessCounter += 1;  // Add a strike
        document.getElementById("s" + wrongGuessCounter).classList.add("strike");

        if (wrongGuessCounter == 3) {
            setTimeout(lostGame, 10); // Wait until strike 3 updates before alerting game loss.
        }
    }
}

// Playing Clues
const playClueSequence = (sequence) => {
    guessCounter = 0;
    let delay = nextClueWaitTime; //set delay to initial wait time

    for (let i=0; i<=progress; i++) { // for each clue that is revealed so far
        console.log("play single clue: " + sequence[i] + " in " + delay + "ms")
        setTimeout(playSingleClue, delay, sequence[i]) // set a timeout to play that clue
        delay += clueHoldTime;
        delay += cluePauseTime;
    }
}

const playSingleClue = (btn) => {
    if (gamePlaying) {
        lightButton(btn);
        playTone(btn, clueHoldTime);
        setTimeout(clearButton, clueHoldTime, btn);
      }
}


// Light Functions
const lightButton = (btn) => {
    document.getElementById(btn).classList.add("lit")
}

const clearButton = (btn) => {
    document.getElementById(btn).classList.remove("lit")
}


// Sound Synthesis Functions
const freqMap = {
    "monica": 261.6,
    "rachel": 329.6,
    "ross": 392,
    "chandler": 466.2,
    "joey": 501.4
}
function playTone(btn, len) {
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
    setTimeout(function () {
        stopTone()
    }, len)
}
function startTone(btn) {
    if (!tonePlaying) {
        context.resume()
        o.frequency.value = freqMap[btn]
        g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
        context.resume()
        tonePlaying = true
    }
}
function stopTone() {
    g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
    tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)


// Timer Functions
const decrementTimer = () => {
    if (time <= 0) {
        lostGame();
    }
    
    let timer = document.getElementById("time").innerHTML = time;
    time -= 1;
    timer = time
}