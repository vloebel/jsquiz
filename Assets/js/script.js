
const TIMEPENALTY = 5; // penalty in seconds for wrong answer
var penalty = false; // penalty flag 
var user = { initials: '', score: 0 };

//button number of correct answer for current question
var correctAnswer=''; 

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

//****************************************
// FUNCTION configureButton (buttonElement) 
// adds uniform style to the argument button
// and attaches an event listener
// TODO - improve style or attach css class?
//**************************************** 
function configureButton(elem){
  elem.setAttribute('style',
    'display:block; color: black; margin: auto; text-align: center;'
  );
  elem.addEventListener("click", function() {                          
    if (elem.id == correctAnswer) {
      answerFeedbackEl.textContent = 'Correct! Current score: ' + (++user.score);
      elem.setAttribute('style',
    'display:block; color: blue;background:yellow; margin: auto; text-align: center;'
    );
     
    }
    else {
      answerFeedbackEl.textContent = 'Sorry, wrong. Current score: ' + user.score;
      elem.setAttribute('style',
      'display:block; color: red;  margin: auto; text-align: center;'
      );
    }
    return; // escape from event listener?
       
  });
}

//****************************************
// FUNCTION nextQuestion (index) 
// Accepts the index to an array of question objects
// Places each of the four answer strings on a button
// calls configureButon to style button and 
// attach an event listener
// and then appends them to the card-body div
//**************************************** 
function nextQuestion(j) {
  
  var answerDivEl = document.querySelector('#answerdiv');
  correctAnswer = qArr[j].solution;
  console.log('answerDivEl = ' + answerDivEl);

  // display the question
  startPromptEl.textContent = qArr[j].q;

  // create a button for each of 4 answers
  // call configureButton to style the buttons
  // and attach event listeners
  // TBD? This might be possible in a single
  // loop using template literals? for another day...
  var opt1El = document.createElement('button');
  opt1El.textContent = qArr[j].opt1; 
  opt1El.id = '1';
  configureButton(opt1El);
  
  var opt2El = document.createElement('button');
  opt2El.textContent = qArr[j].opt2;
  opt2El.id = '2';
  configureButton(opt2El);

  var opt3El = document.createElement('button');
  opt3El.textContent = qArr[j].opt3;
  opt3El.id = '3';
  configureButton(opt3El);

  var opt4El = document.createElement('button');
  opt4El.textContent = qArr[j].opt4;
  opt4El.id = '4';
  configureButton(opt4El);

// append the answer buttons to the answer Div
  answerDivEl.append(opt1El, opt2El, opt3El, opt4El);
  

}

//**********************************
// FUNCTION runGame()
// builds 
function runGame() {
  // remove the start button
  
  startBtnEl.remove();
  //build the next question 
  var i = 0;
  nextQuestion(i);
}






//******** ATTACH HTML ELEMENTS ************** */
// buttons
var startBtnEl = document.querySelector('#start-btn');
// text spans
var timerEl = document.querySelector('#timeleft');
var startPromptEl = document.querySelector('#start-prompt');
var answerFeedbackEl = document.querySelector('#feedback');
// var nextQuestionEL = document.querySelector('#next-question');

// retrieve LAST high score and initials and display on screen

//******** LISTEN FOR START ************** */

startPromptEl.textContent = 'Click Start to Begin Timed Quiz';
answerFeedbackEl.textContent = '';
startBtnEl.addEventListener("click", function () {
  // remove the start button
  startBtnEl.remove();
  startGame()
});

// Game is over:
// Notify user of score and ask if they want to save
// save user initials and score to local storage


 



