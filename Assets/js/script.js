var startBtnEl = document.querySelector('#start-btn');
const TIMEPENALTY = 5; // penalty in seconds for wrong answer
var timeLeft = 30; // total seconds for quiz
var user = { initials: 'vl', score: 999 };
var currentScore = 0;
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


function countdown() {
  var penalty = false;
 
  var timerEl = document.querySelector('#time-left');   

  var gameClock = setInterval(function () {
    timerEl.textContent = ' ' + timeLeft;
    timeLeft--;
    // timeLeft -= (penalty ? (TIMEPENALTY + 1) : 1);
    // set flag if we've run out of time
    // otherwise update clock on screen
    if (timeLeft <= 0) {
      gameOver = true;
      clearInterval(gameClock);
      console.log('timeLeft ran out');
    }
   }, 1000);
  
    // rungame();

}

function rungame() {
/*This code is supposed to run while the clock ticks */
/* and end when it hits 0 and sets gameOver to true */
  
  var killSwitch = 0;
  var loopmore = true;
  while (loopmore) {
    loopmore = !gameOver;
    console.log('rungame: time-remaining ' + timeLeft);
    if (killSwitch++ > 100) console.log('rungame killed');
  }
console.log('rungame OVER');
}


//******** LISTEN FOR START ************** */


// run the game in a loop

var startPromptEl = document.querySelector('#start-prompt');
var nextQuestionEL = document.querySelector('#next-question');
var deductPenalty = false; /* set true for wrong answer */

startPromptEl.textContent = 'Click Start to Begin Timed Quiz';
startBtnEl.addEventListener("click", countdown);




    // Output the score
  
    //  nextQuestionEL.textContent = (`Your score was ${currentScore}`);
  
    // ask for initials
 



