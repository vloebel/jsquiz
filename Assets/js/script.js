
const TIMEPENALTY = 5; // penalty in seconds for wrong answer
var penalty = false; // penalty flag 
var user = { initials: '', score: 0 };

var timeLeft = 8; // countdown varible
var gameOver = false;

// questions are in quiz-question.js
// each question is an object in an array
// of the form:
// const questions = [
//   {
//     q: 'Where is JavaScript code placed?',
//     a: 'inside the html <head> element',
//     b: 'inside the html <body> element',
//     c: 'Inside a <script> tag',
//     d: 'In a file named \'script\'',
//     ans: 'c'
//   }]




// Display next question and score answer

// var questionText = document.querySelector("#nextQuestion")
// for (const nextQ of questions) {
//   //get question and options
//   questionText.value = nextQ.q;
//   optiona.value = nextQ.a;
//   optionb.value = nextQ.b;
//   optionc.value = nextQ.c;
//   optiond.value = nextQ.d;
  // wait for button press
  
  // test answer
  // if (userAnswer == nextQ.ans)
  // output correct and increment score //

    //output wrong and deduct time penalty//

// end loop through questions


function startGame() {
 
  var gameClock = setInterval(function () {
    timerEl.textContent = ' ' + timeLeft;
    console.log('time left: ' + timeLeft);
    //if global penalty is set, subtract extra time
    --timeLeft;
    if (penalty) {
      timeLeft -= TIMEPENALTY;
      penalty = false;
    }
    // set flag if we've run out of time
    // otherwise update clock on screen
    if (timeLeft <= 0) {
      gameOver = true;
      clearInterval(gameClock);
      console.log('timeLeft ran out');
    }
}, 1000);
  
  runGame();

} 

function runGame() {
/*This code is supposed to run while the clock ticks */

  var i = 0; 
for (i; i < 10; i++) console.log('i = ' + i);

console.log('rungame OVER');
}


//******** ATTACH HTML ELEMENTS ************** */
// buttons
var startBtnEl = document.querySelector('#start-btn');
// text spans
var timerEl = document.querySelector('#timeleft');
var startPromptEl = document.querySelector('#start-prompt');
// var nextQuestionEL = document.querySelector('#next-question');

//******** LISTEN FOR START ************** */

startPromptEl.textContent = 'Click Start to Begin Timed Quiz';

startBtnEl.addEventListener("click", startGame);




    // Output the score
  
    //  nextQuestionEL.textContent = (`Your score was ${currentScore}`);
  
    // ask for initials
 



