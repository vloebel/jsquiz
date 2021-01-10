
const TIMEPENALTY = 5; // penalty in seconds for wrong answer
var penalty = false; // penalty flag 
var user = { initials: '', score: 0 };

var timeLeft = 5; // countdown varible
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
    timerEl.textContent = ' ' + --timeLeft;
    console.log('time left: ' + timeLeft);
    //if global penalty is set, subtract extra time
    
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

/*This code is supposed to run while the clock ticks */
/* But nothing seems to make that work */

// Clear the screen
// display the next question and response buttons
// wait for user to click button
// check whether answer was correct
// display "correct" or "wrong" at bottom of quiz
// if wrong, set penalty flag to deduct time from clock
// if time is not up, advance to next question


function buildQuestion(j) {
  
  var answerDivEl = document.querySelector('#cardbody');

  console.log('answerDivEl = ' + answerDivEl);

  // display the question
  startPromptEl.textContent = qArr[j].q;
  console.log('startPromptEl.textContent is ' + startPromptEl.textContent);

  // create and append answer buttons
  var aEl = document.createElement('button');
  aEl.textContent = qArr[j].a;
  console.log('aEl = '+ aEl.textContent);
  var bEl = document.createElement('button');
  bEl.textContent = qArr[j].b;
  var cEl = document.createElement('button');
  cEl.textContent = qArr[j].c;
  var dEl = document.createElement('button');
  dEl.textContent = qArr[j].d;
// append the buttons to the display
  
  answerDivEl.append (aEl, bEl, cEl, dEl);
}

function runGame() {
  //build the next question 
  var i = 0;
  buildQuestion(i);
}






//******** ATTACH HTML ELEMENTS ************** */
// buttons
var startBtnEl = document.querySelector('#start-btn');
// text spans
var timerEl = document.querySelector('#timeleft');
var startPromptEl = document.querySelector('#start-prompt');
// var nextQuestionEL = document.querySelector('#next-question');

// retrieve LAST high score and initials and display on screen

//******** LISTEN FOR START ************** */

startPromptEl.textContent = 'Click Start to Begin Timed Quiz';

startBtnEl.addEventListener("click", startGame);

// Game is over:
// Notify user of score and ask if they want to save
// save user initials and score to local storage


 



