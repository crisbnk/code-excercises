// Sounds to play by the buttons
var sndStart = new Audio("http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VIDEO%20GAMES/zelda/688%5Bkb%5Dzelda-start.aif.mp3");
var sndWrong = new Audio("http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VIDEO%20GAMES/dkong/7%5Bkb%5Deffect01.wav.mp3");
var sndWin = new Audio("http://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/VIDEO%20GAMES/zelda/782%5Bkb%5Dzelda-triforce.aif.mp3");
var snd0 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var snd1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var snd2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var snd3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var soundToPlay = [snd0, snd1, snd2, snd3];
// Speed to change during game
var speed = [1000, 850, 700];
// Maximum number of sounds
var goal = 20;
// Simon obj with configuration
var simon = {
  start: false, // Start variable: changes pressing START button
  strict: false, // If true, for every error soundSequenceAi is cleared
  step: 0, // Number of correct steps done by the user
  soundSequenceAi: [], // Arr that stores the sound combination of the AI
  soundSequenceUsr: [], // Arr that stores the sound combination of the USER
  clearSoundTimeout: [], // Arr that stores the soundTimeout id
  clearBtnTimeout: 0, // Num that store the btnTimeout id
  speedSnd: 1000 // Speed of the setTimeout in ms
}

$(document).ready(function() {
  whenTurnedOff(); // All buttons are disabled except Start button
  $(".btn-start").on("click", function() { // Actions when START button is clicked
    whenTurnedOn();
    if(!simon.start) { // If Simon Game is turned off, turn it on
      $(this).addClass("btn-on");
      showToDisplay("START!")
      sndStart.play();
      setTimeout(function() {
        start();
        incrementTheSequence();
        playIt();
      }, 5500);
    } else { // If Simon Game is turned on, turn it off
      $(this).removeClass("btn-on");
      end();
      disableBtn();
      whenTurnedOff();
    }
  });
  $(".btn-restart").on("click", function() { // Actions when RESTART button is clicked
    if(simon.start) {
      $(this).addClass("btn-on").delay(200).queue(function(){
        $(this).removeClass("btn-on").dequeue();
      });
      restart();
      incrementTheSequence();
      playIt();
    }
  });
  $(".btn-strict").on("click", function() { // Actions when STRICT button is clicked
    simon.strict = !simon.strict;
    if(simon.strict) {
      $(this).addClass("btn-on");
    } else {
      $(this).removeClass("btn-on");
    }
  });
  $(document).on('change', 'input[name="speed"]:radio', function() {
    simon.speedSnd = speed[$(this).val() - 1];
  });
  $(".btn-sound").on("click", function(){ // Actions when any SOUND button is clicked
    $(this).addClass("pressed").delay(200).queue(function(){
        $(this).removeClass("pressed").dequeue();
    });
    var buttonSound = $(this).data("button"); // Check which button is clicked and store its number
    soundToPlay[buttonSound].play(); // Play the sound of the clicked button
    simon.soundSequenceUsr.push(buttonSound); // Store the button number in the soundSequenceUsr array
    simon.step++ // Increase the number of correct steps
    compare(); // Check if the sound is correct or wrong
  });
});

function start() { // Variable settings when turn on
  simon.start = true;
  simon.step = 0;
  simon.soundSequenceAi = [];
  simon.soundSequenceUsr = [];
}

function end() { // Variable settings when turn off
  simon.start = false;
  console.log(simon.clearSoundTimeout);
  showToDisplay("-");
  setTimeout(function() {
    showToDisplay("");
  }, 700);
  clearTimeoutSnd();
  clearTimeoutBtn();
}

function restart() { // Variable settings on restart
  simon.start = true;
  simon.step = 0;
  simon.soundSequenceAi = [];
  simon.soundSequenceUsr = [];
  simon.clearSoundTimeout = [];
  simon.clearBtnTimeout = 0;
}

function incrementTheSequence() { // Add a new sound to the sequence
  simon.soundSequenceAi.push(Math.floor(Math.random() * (4)));
  showToDisplay(simon.soundSequenceAi.length);
}

function playIt() { // Start the AI sound sequence
  showToDisplay(simon.soundSequenceAi.length);
  disableBtn();
  btnTimeout();
  soundTimeout();
}

function compare() { // Check if the USER sound is correct
  if(simon.soundSequenceUsr[simon.step - 1] == simon.soundSequenceAi[simon.step - 1]) {
    isCorrect();
  } else {
    showToDisplay("WRONG!");
    setTimeout(function() { // Play sndWrong
      sndWrong.play();
    }, simon.speedSnd);
    setTimeout(function() {
      checkStrict();
      doItAgain();
    }, simon.speedSnd);
  }
}

function isCorrect() { // Check if the USER did all the sequence
  if(simon.soundSequenceUsr.length == simon.soundSequenceAi.length) {
    if(simon.soundSequenceUsr.length == goal) { // Check if USER reached the goal
      showToDisplay("WIN!")
      disableBtn();
      setTimeout(function() {
        sndWin.play();
      }, 800);
    } else {
      sequenceFinished();
    }
  }
}

function sequenceFinished() { // Reset all the correct steps and the USER sound sequence, increase and play the AI sound sequence again
  simon.step = 0;
  simon.soundSequenceUsr = [];
  incrementTheSequence();
  playIt();
}

function doItAgain() { // Reset all the correct steps and the USER sound sequence and play the AI sound sequence again
  simon.step = 0;
  simon.soundSequenceUsr = [];
  playIt();
}

function btnTimeout() { // Enable sound buttons after a time interval
  simon.clearBtnTimeout = setTimeout(function() {
    enableBtn();
  }, simon.speedSnd * simon.soundSequenceAi.length);
}

function soundTimeout() { // Play the AI sequence with an offset between each sound
  var offset = 0;
  simon.soundSequenceAi.forEach(function(num){
    simon.clearSoundTimeout.push(setTimeout(function(){
      soundToPlay[num].play();
      // Light up the current button played
      $("button[data-button='" + num + "']").addClass("pressed").delay(200).queue(function(){
        $(this).removeClass("pressed").dequeue();
      });
    }, simon.speedSnd + offset));
    offset += simon.speedSnd;
  });
}

function clearTimeoutBtn() { // Clear the id of btnTimeout
  clearTimeout(simon.clearBtnTimeout);
}

function clearTimeoutSnd() { // Clear all the ids of soundTimeout
  for (var i = 0; i < simon.clearSoundTimeout.length; i++) {
    clearTimeout(simon.clearSoundTimeout[i]);
  }
  simon.clearSoundTimeout = [];
}

function disableBtn() { // Disable sound buttons
  $(".btn-sound").prop("disabled", true);
}

function enableBtn() { // Enable sound buttons
  $(".btn-sound").prop("disabled", false);
}

function showToDisplay(message) { // Notify a message in the display
  $("#display").text(message);
}

function checkStrict() { // In strict mode, when there is an error, the soundSequenceAi is erased
  if(simon.strict) {
    simon.soundSequenceAi = [];
    incrementTheSequence();
  }
}

function whenTurnedOff() { // Buttons disabled
  $(".btn-sound").prop("disabled", true); // All sound buttons disabled before start
  $(".btn-restart").prop("disabled", true); // Restart button disabled before start
  $(".btn-strict").prop("disabled", true); // Strict button disabled before start
}

function whenTurnedOn() {
  $(".btn-restart").prop("disabled", false); // Restart button enabled after start
  $(".btn-strict").prop("disabled", false); // Strict button disabled after start
  $(".btn-strict").removeClass("btn-on");
}
